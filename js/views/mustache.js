define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/model',
		'text!templates/mustache.html',
		'mustache'], 
function($, Backbone, _, model, template, Mustache){
	
	App.View.First = Backbone.View.extend({
		
		el: '#content',

		events: {
			'click .dc-btn-back' : 'back'
		},

		back: function() {
			App.Helpers.backBtn();
		},

		initialize: function(){
			this.model = new model({
				message: 'Hello World'
			});
			// this.template = _.template( template, { model: this.model.toJSON() } );
			this.template = Mustache.to_html(template, this.model.toJSON());
			
		},
		render: function(){
			App.Slider.slidePage($(this.template));


		}
	});
	
	return new App.View.First();
});
