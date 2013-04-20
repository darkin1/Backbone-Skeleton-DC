// This set's up the module paths for underscore and backbone
require.config({ 
    'paths': { 
		"underscore"	: "libs/underscore-min", 
		"backbone"		: "libs/backbone-min",
		"bootstrap"		: "libs/bootstrap.min",
		"pageslider"	: "libs/pageslider",
		"iscroll"		: "libs/iscroll-4",
		"hammerjs"		: "libs/hammer.min",
		"jhammerjs"		: "libs/jquery.hammer.min",
		"storejs"		: "libs/store_json2.min",
		'mustache'		: "libs/mustache"
	},
	'shim': 
	{
		backbone: {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		underscore: {
			'exports': '_'
		}
	}	
}); 

require([
	'underscore',
	'backbone',
	'app'
	], 
	function(_, Backbone, app){

	// stworzenie przestrzeni nazw
	App = _.extend(App, app);
	App.init();
	window.App = App;

});
