/**
 * Kick-off for whole application. Here we load each config file and define domReady.
 */
define([
	'require',
	'angular',
	'../app/main',
	'config/routes'
], function (require, ng) {
	'use strict';

	/*
	 * place operations that need to initialize prior to app start here
	 * using the `run` function on the top-level module
	 */

	require(['domReady!'], function (document) {
		ng.bootstrap(document, ['app']);
	});
});