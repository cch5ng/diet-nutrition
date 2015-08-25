// js/collections/calories.js

var app = app || {};

//food collection

var CalorieList = Backbone.Collection.extend({

	model: app.Calorie,

	//localStorage: new Backbone.LocalStorage('foods-backbone'),

	all: function() {
		return this;
	},

	//TODO need something like nextOrder, comparator
	//track order in which items added to list (db guid is unordered chronologically)
	//just unclear where the order prop is getting set
	nextOrder: function() {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	comparator: function(todo) {
		return todo.get('order');
	}
});

app.calorieList = new CalorieList();