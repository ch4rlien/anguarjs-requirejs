define(['angular', 'angular-ui.router', 'uiBootstrap', 'angular-cookies'], function (ng) {
	'use strict';
	return ng.module('app', [
		'ui.router',
		'ui.bootstrap',
		'ngCookies'
	]);
});