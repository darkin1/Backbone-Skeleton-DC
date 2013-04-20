define([
	'jquery', 
	'backbone', 
	'underscore',
	'pageslider'], 
function($, Backbone, _){
	var Router = Backbone.Router.extend({

		initialize: function(){
			App.Slider = new PageSlider($("#content"));

			Backbone.history.start();

			Backbone.history.bind('route', function(router, route, params) {
			 	// console.log(router);
			});
		},
		routes: {
			''				: 'home',
			'iscroll'		: 'iscroll',
			'mustache'		: 'mustache',
			'hammerjs'		: 'hammerjs',
			'storejs'		: 'storejs'
		},
		'home': function() {
			var that = this;
			require(['views/home'], function(obj){
				obj.render();
			});
		},
		'iscroll': function() {
			var that = this;
			require(['views/iscroll'], function(obj){
				obj.render();
			});
		},
		'mustache': function() {
			var that = this;
			require(['views/mustache'], function(obj){
				obj.render();
			});
		},
		'hammerjs': function() {
			var that = this;
			require(['views/hammerjs'], function(obj){
				obj.render();
			});
		},
		'storejs': function() {
			var that = this;
			require(['views/storejs'], function(obj){
				obj.render();
			});
		}
	});

	return Router;
});
