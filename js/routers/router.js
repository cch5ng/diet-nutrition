// js/routers/router.js

// Foods Router

var app = app || {};

var Workspace = Backbone.Router.extend({
	routes: {
		*other: defaultRoute,
		calories: getFoodsLocalStore
	}//,

});

app.FoodRouter = new Workspace();
Backbone.history.start();