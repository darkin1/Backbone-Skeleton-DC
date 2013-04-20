define([
		'jquery', 
		'backbone',
		'underscore', 
		'models/model',
		'text!templates/storejs.html',
		'storejs'], 
function($, Backbone, _, model, template){
	
	App.View.Storejs = Backbone.View.extend({
		
		el: '#content',

		events: {
			'click .dc-btn-back' : 'back',
			'click #save' : 'save',
			'click #read' : 'read'
		},

		save: function() {
			var val = $('input[name="store"]').val();
			store.set('val', val);
		},

		read: function() {
			var val = store.get('val');
			$('p#value').text(val).show();
		},

		back: function() {
			App.Helpers.backBtn();
		},

		initialize: function(){
			if( store.enabled = !store.disabled ) store.enabled;


			this.model = new model({
				message: 'Hello World'
			});
			this.template = _.template( template, { model: this.model.toJSON() } );
			
		},
		render: function(){
			App.Slider.slidePage($(this.template));
		}
	});
	
	return new App.View.Storejs();
});
