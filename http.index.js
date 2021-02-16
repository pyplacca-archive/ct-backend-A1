const http = require('http');
const cfg = require('./config');


function requestHandler (req, res) {
	res.setHeader('content-type', 'text/html');

	const respond = msg => {
		res.write(msg);
		res.end();
	}

	switch (req.url) {
		case '/':
			return respond('Welcome');
		case '/trends':
			return respond('See what\'s trending');
		case '/cart':
			return respond('Items you add to cart will appear here.');
		case '/about':
			return respond('About us');
		case '/contact':
			return respond('Contact us');
		default:
			return respond('404. Page not found');
	}
}

const server = http.createServer(requestHandler);

server.listen(cfg.port, cfg.host, () => {
	console.log(`Http server is running at ${cfg.host}:${cfg.port}`)
});
