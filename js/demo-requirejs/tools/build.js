{
    appDir: '../',
    baseUrl:'js',   //just as "../js"
    dir: 'www-built',
    paths:{
	'jquery':'lib/jquery.min',     // just as "../js/lib/jquery.min.js"
	'jquery.bootstrap':'lib/bootstrap/bootstrap.min',  
    'common':'common',     // just as "../js/common.js"
	'app':'app'            // just as "../js/app"   
	},
    shim:{
	'jquery.bootstrap':{
			'deps':['jquery']
		}
    },
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'common',    
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
		      'jquery.bootstrap',
            ]
        },

        //Now set up a build layer for each page, but exclude
        //the common one. "exclude" will exclude
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //"include" the appropriate "app/main*" module since by default
        //it will not get added to the build since it is loaded by a nested
        //requirejs in the page*.js files.
        {
            //module names are relative to baseUrl/paths config
            name: 'app/controller/userCtrl',
            //include: ['app/model/user'],
            exclude: ['common']
        },

    ]
}
