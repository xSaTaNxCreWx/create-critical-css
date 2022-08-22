const penthouse = require('penthouse');
const fs = require('fs');
const querystring = require('querystring');
const https  = require('https');
const config = require('./config');


const urls = config.URLS;

const penthouseOptions = {
	css: config.CSS_FILE
}

function startNewJob () {
	const url = urls.pop();

	if (!url) {
		return Promise.resolve();
	}

	return penthouse({
		url,
		...penthouseOptions
	}).then(criticalCss => {
		fs.access('temp/all.css', function(error){
			if (error) {
				fs.writeFileSync('temp/all.css', criticalCss);
			} else {
				const newLineChar = process.platform === 'win32' ? '\r\n' : '\n';
				fs.appendFileSync('temp/all.css', `${newLineChar}${criticalCss}`);
			}
		});

		console.log('URL ' + url + ' обработан.')

		return startNewJob();
	})
}

// Работаем параллельно, выставляем кол-во потоков
Promise.all([
	startNewJob(),
	startNewJob(),
	startNewJob(),
	startNewJob(),
	startNewJob()
]).then(() => {
	try {
		const data = fs.readFileSync('temp/all.css', 'utf8');

		const query = querystring.stringify({
			input: data
		});

		const req = https.request(
			{
				method   : 'POST',
				hostname : 'www.toptal.com',
				path     : '/developers/cssminifier/api/raw',
			},
			function(resp) {
				let body = '';

				// if the statusCode isn't what we expect, get out of here
				if ( resp.statusCode !== 200 ) {
					console.log('StatusCode=' + resp.statusCode);
					return;
				}

				resp.on('data', function (chunk) {
					body += chunk;
				});

				resp.on('end', function() {
					fs.writeFileSync('out/' + config.CRITICAL_FILE, body);

					fs.unlink('./temp/all.css', function (err) {
						if (err) {
							console.log(err);
						}
					});
					console.log('Критический файл создан в папке out с названием ' + config.CRITICAL_FILE)
				})
			}
		);

		req.on('error', function(err) {
			throw err;
		});

		req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
		req.setHeader('Content-Length', query.length);
		req.end(query, 'utf8');
	} catch (err) {
		console.error(err);
	}

});