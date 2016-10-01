requirejs.config({
	'baseUrl':'js/lib',
	'paths':{
		'app':'../app',
		'jquery':'jquery.min',
		'jquery.bootstrap':'bootstrap/bootstrap.min'
	},
	'shim':{
		'jquery.bootstrap':{
			'deps':['jquery']
		}
	}
});
require(["jquery", "jquery.bootstrap"], function ($) {
});
