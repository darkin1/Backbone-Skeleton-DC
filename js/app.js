/**
szkielet:
https://github.com/jcreamer898/RequireJS-Backbone-Starter

ogolne info o aplikacjach:
http://coenraets.org/blog/2013/03/sociogram-mobile-a-starter-kit-application-for-phonegap-and-facebook-integration/

slider stron:
http://coenraets.org/blog/2013/03/hardware-accelerated-page-transitions-for-mobile-web-apps-phonegap-apps/

template mustache:
http://mustache.github.io/
http://coenraets.org/blog/2011/12/tutorial-html-templates-with-mustache-js/
http://pixelhandler.github.io/vertebrae/notes/backbone-views-using-mustache-templates/2012/01/08/

bootstrap 3:
https://github.com/twitter/bootstrap/pull/6342

natywny scroll:
http://outof.me/native-scrolling-in-jquery-mobilephonegap-applications/
https://github.com/cubiq/iscroll

gesty na mobile:
http://eightmedia.github.io/hammer.js/

localstorage:
https://github.com/marcuswestin/store.js

*/

// This is the main entry point for the App
define(['routers/home'], function(router){
	var init = function(){
		this.router = new router();
	};
	
	return { init: init};
});


var App = {
	Model: {},
	View : {},
	Collections : {},
	Config : {},
	Social : {},
	Data: {},
	Helpers : {
		backBtn: function() {
			window.history.back()
		}
	},
	Slider: {}
};