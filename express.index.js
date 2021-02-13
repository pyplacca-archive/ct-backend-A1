const cfg = require('./config');

const server = require('express')();

server.listen(cfg.port, cfg.host, () => {
	console.log("Server is up and running...")
})
