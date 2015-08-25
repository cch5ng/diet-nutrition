// js/routers/router.js

// Foods Router

var app = app || {};

var Workspace = Backbone.Router.extend({
	routes: {
		'*other': 'defaultRoute',
		'calories' : 'calories' //retrieves list of foods/calories from localStorage with calorie total
	},

	//had issue using *other for defaultRoute so this is temp placeholder
	home: function() {
		console.log('placeholder');
	},

	calories: function() {
//TODO, implement CaloriesView and figure out it releates to existing food.js model
//TODO need to clean up old view for food
		this.loadView(app.CalorieView);
	},

	//http://mikeygee.com/blog/backbone.html
	loadView: function(view) {
		//this is abbrev way to check if this.view exists, then do this
		this.view && this.view.remove();
		this.view = view;
	}

});

app.FoodRouter = new Workspace();
Backbone.history.start();