requirejs.config({
	'baseUrl':'js/lib',    /*以当前common.js文件为根路径. 后续均以baseUrl为根路径。*/
	'paths':{
		'app':'../app',    /* baseUrl路径的上一级为再/app*/
		'jquery':'jquery.min',/* baseUrl下的jquery.min.js */
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
