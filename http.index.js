const http = require('http');

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

const [port, host] = [3000, '127.0.0.1'];
server.listen(port, host, () => {
	console.log(`Server is running at ${host}:${port}`)
})
