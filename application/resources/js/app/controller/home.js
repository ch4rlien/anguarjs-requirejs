define([
	'app/main',
	'app/component/home/HelloComponent'
], function (app) {
	app.controller('HomeCtrl', function ($scope) {
		$scope.showMe = function(message) {
			alert(message + " And I am in parent controller.");
		}
	});
});