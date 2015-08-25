// js/models/calorie.js
// I think something is wrong because this is exactly the same as food.js 
// it is not DRY but I am not sure if it must be different b/c the data source
// is different, here it is the local storage (otherwise it is the api json results)

var app = app || {};

//model

app.Calorie = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		brandName: '',
		calories: 0
	},

	initialize: function() {
		//console.log('');
	}, 

	add: function(localStoreObj) {
		this.id = localStoreObj.id;
		this.name = localStoreObj.name;
		this.brandName = localStoreObj.brandName;
		this.calories = localStoreObj.calories;
		console.log('got here');
		//this.save({})
	}
});