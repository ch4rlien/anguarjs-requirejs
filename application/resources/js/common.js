/**
 * Config file for setting up basic routes to javascript files and define their dependencies. This config is made using
 * RequireJs.
 */
requirejs.config({
	paths: {
		// External libraries for running locally (non-minified versions)
		'domReady': 'lib/requirejs-plugins/domReady',
		'text': 'lib/requirejs-plugins/text',
		'angular': 'lib/angular/angular',
		'angular-cookies': 'lib/angular/angular-cookies',
		'angular-ui.router': 'lib/angular-ui-router/angular-ui-router',
		'uiBootstrap': 'lib/ui-bootstrap/ui-bootstrap-tpls-0.12.1',
		'homeController': 'app/controller/home'
	},

	baseUrl: 'resources/js',

	shim: {
		'angular': {'exports': 'angular'},
		'angular-cookies': {deps: ['angular']},
		'angular-ui.router': {deps: ['angular']},
		'uiBootstrap': {deps: ['angular']},
		underscore: {
			exports: '_'
		}
	},
	deps: [
		// kick start application
		'config/bootstrap'
	]
});