// js/views/food.js

var app = app || {};

//create model view
app.FoodView = Backbone.View.extend({

	tagName: 'div', //should it be a div?
	className: 'foodContainer',

	foodTemplate: _.template( document.querySelector('#foodTemplate').innerHTML ),

	events: {
		'click .foodContainer': 'add'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html( this.foodTemplate( this.model.attributes ) );
		return this;
	},

	add: function() {
		this.model.add();
		//console.log('todo add function');
	}

});