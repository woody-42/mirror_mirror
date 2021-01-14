/* Magic Mirror
 * Module: HelloWorld
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("helloworld", {
	// Default module config.
	defaults: {
		text: "This can be anything"
	},

	// getTemplate: function () {
	// 	return "helloworld.njk";
	// },

	// getTemplateData: function () {
	// 	return this.config;
	// },

	getDom: function () {
		let wrapper = document.createElement("div");
		wrapper.className = "container";
		wrapper.innerHTML = "Poop 💩";
		return wrapper;
	},

	getStyles: function () {
		return ["helloworld.css"];
	}
});
