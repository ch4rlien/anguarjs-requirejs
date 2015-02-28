define([
	'require',
	'angular',
	'app/main',
	'routes'
], function (require, ng) {
	'use strict';

	/*
	 * place operations that need to initialize prior to app start here
	 * using the `run` function on the top-level module
	 */

	require(['domReady!', 'uiBootstrap'], function (document) {
		ng.bootstrap(document, ['app']);
	});
});