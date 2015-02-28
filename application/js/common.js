requirejs.config({
	paths: {
		// External libraries for running locally (non-minified versions)
		'domReady': 'lib/requirejs-domready/domReady',
		'angular': 'lib/angular/angular',
		'angular-cookies': 'lib/angular/angular-cookies',
		'angular-ui.router': 'lib/angular-ui-router/angular-ui-router',
		'uiBootstrap': 'lib/ui-bootstrap/ui-bootstrap-tpls-0.12.1'
	},

	baseUrl: 'js',

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
		'./bootstrap'
	]
});