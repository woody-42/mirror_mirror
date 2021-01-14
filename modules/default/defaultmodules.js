/* Magic Mirror
 * Default Modules List
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.

// original line
// var defaultModules = ["alert", "calendar", "clock", "compliments", "currentweather", "helloworld", "newsfeed", "weatherforecast", "updatenotification", "weather"];

// replaced with
let defaultModules = ["helloworld"];
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
