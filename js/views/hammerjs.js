define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/model',
		'text!templates/hammerjs.html',
		'hammerjs',
		'jhammerjs'], 
function($, Backbone, _, model, template){
	
	App.View.Hammerjs = Backbone.View.extend({
		
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
			
			
			/*
			var element = document.getElementById('touchx');
			var hammertime = Hammer(element).on("tap", function(event) {
			        alert('hello!');
			});
			*/

			$('#touchx').hammer().on("tap doubletap hold drag swipe pinch rotat",  function(event) {
        		$('#touch-list').prepend('<p>'+event.type+'</p>');
    		});

		}
	});
	
	return new App.View.Hammerjs();
});
