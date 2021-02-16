class HTML {

	#createTag (tag, content) {
		return `<${tag}>${content}</${tag}>`
	}

	h1 (text) {
		return this.#createTag('h1', text)
	}

	h2 (text) {
		return this.#createTag('h2', text)
	}

	h3 (text) {
		return this.#createTag('h3', text)
	}

	div (text) {
		return this.#createTag('div', text)
	}

	p (text) {
		return this.#createTag('p', text)
	}
}


module.exports = {
	HTML
}
