define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/model',
		'text!templates/home.html'], 
function($, Backbone, _, model, template){
	App.View.Home = Backbone.View.extend({
		el: '#content',
		initialize: function(){
			this.model = new model({
				message: 'Hello World'
			});
			this.template = _.template( template, { model: this.model.toJSON() } );
		},
		render: function(){
			// $(this.el).html( this.template );
			App.Slider.slidePage($(this.template));
		}
	});
	
	return new App.View.Home();
});
