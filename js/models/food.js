var app = app || {};

//model

app.Food = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		brandName: '',
		calories: 0
	},

	initialize: function() {
		console.log('');
	}
	//add: function() {
		//this.save({})
	//}
});