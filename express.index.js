const server = require('express')();
const cfg = require('./config');
const html = new (require('./utils').HTML)();


server.listen(cfg.port, cfg.host, () => {
	console.log(`Express server is running at http://${cfg.host}:${cfg.port}`)
})

function handleRequest (msg) {
	return function (req, res) {
		res.send(msg)
	}
}


/*
	route: /library
*/
const route1 = '/library';
server.get(route1, handleRequest(html.h2('Here\'s what\'s in your library.' )))
server.post(route1, handleRequest(html.p('Great! Build your library an item at a time.')))
server.patch(route1, handleRequest(html.p('Let\'s update an item in your library')))
server.delete(route1, handleRequest(html.p('Item deleted! Be sure to not empty your library.')))

/*
	route: /contacts
*/
const route2 = '/contacts';
server.get(route2, handleRequest(html.h1('You\'ve got x contacts in your phonebook')))
server.post(route2, handleRequest(html.h3('Contact added successfully!')))
server.patch(route2, handleRequest(html.h3('Contact updated!')))
server.delete(route2, handleRequest(html.p('Deleting a contact? Sure. Don\'t delete them from your life though.')))

/*
	route: /notes
*/
const route3 = '/notes';
server.get(route3, handleRequest(html.h2('Notes you add will appear here.')))
server.post(route3, handleRequest(html.p('Create a note, refer later.')))
server.patch(route3, handleRequest(html.p('No harm in updating your note. We\'ll keep a history of your changes so you can rollback anytime')))
server.delete(route3, handleRequest(html.h3('Noted deleted! You can still recover it whenever you wish.')))

/*
	route: /blogs
*/
const route4 = '/blogs';
server.get(route4, handleRequest(html.h3('Blog! Blog! Blog! A great way to document history.')))
server.post(route4, handleRequest(html.p('Now that\'s new documentation for the younger generation.')))
server.patch(route4, handleRequest(html.h2('Sorry, you can\'t rewrite history')))
server.delete(route4, handleRequest(html.h1('Blog deleted, history erased.')))
