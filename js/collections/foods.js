// js/collections/foods.js

var app = app || {};

//food collection

var FoodList = Backbone.Collection.extend({

	model: app.Food,

	localStorage: new Backbone.LocalStorage('foods-backbone') //,

	//TODO need something like nextOrder, comparator
	//track order in which items added to list (db guid is unordered chronologically)
	//just unclear where the order prop is getting set
	nextOrder: function() {

	},

	comparator: function() {

	}
});

app.Foods = new FoodList();