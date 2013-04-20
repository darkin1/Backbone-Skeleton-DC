define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/model',
		'text!templates/iscroll.html',
		'iscroll'], 
function($, Backbone, _, model, template){
	
	App.View.Iscroll = Backbone.View.extend({
		
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
			this.template = _.template( template, { model: this.model.toJSON() } );
			
		},
		render: function(){
			
			App.Slider.slidePage($(this.template));
			var myScroll = new iScroll('wrapper-scroller');
		}
	});
	
	return new App.View.Iscroll();
});
