const http = require('http');
const cfg = require('./config');


function requestHandler (req, res) {
	const respond = msg => {
		res.write(msg)
		res.end()
	}

	switch (req.url) {
		case '/':
			return respond('Welcome')
		default:
			return respond('404. Page not found')
	}
}

const server = http.createServer(requestHandler)


server.listen(cfg.port, cfg.host, () => {
	console.log(`Server is running at ${cfg.host}:${cfg.port}`)
})
