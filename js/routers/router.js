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
		this.view = new app.CalorieView();
	}

});

app.FoodRouter = new Workspace();
Backbone.history.start();