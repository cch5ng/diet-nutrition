// js/views/calorie.js

var app = app || {};

//create model view
app.CalorieView = Backbone.View.extend({

	tagName: 'div', //should it be a div?
	className: 'foodContainer',

	//could reuse this because the model is the same...
	foodTemplate: _.template( document.querySelector('#foodTemplate').innerHTML ),

	// events: {
	// 	'click .foodContainer': 'add'
	// },

	initialize: function() {
		//listening for collection changes
		this.listenTo(app.Calories, 'add', this.addOneCal);
		this.listenTo(app.Calories, 'reset', this.addAllCal);
		this.listenTo(this.model, 'change', this.render);

//TODO, here need to get data out of local storage?
//feel like this might be better done at the collection level than at the model/obj level but fix later
		var keysStr = this.getKeys();
		this.keysAr = keysStr.split(',');
		//console.log(this.keysAr);

		this.populateModels();
	},

	render: function() {
		this.$el.html( this.localStoreTemplate( this.model.attributes ) );
		return this;
	},

	add: function() {
		this.model.add();
		//console.log('todo add function');
	},

	//get array of keys for local storage key/value pairs
	getKeys: function() {
		var keysStr = localStorage.getItem('foods-backbone'); //comma delimited string
		//console.log(keysStr);
		return keysStr;
	},

	//get array of objects for local storage key/value pairs
	populateModels: function() {
		var localStoreAr = [];

		this.keysAr.forEach(function(key) {
			var localStoreObj = localStorage.getItem('foods-backbone-' + key);
			console.log(localStoreObj);
			localStoreAr.push(localStoreObj);
//TODO this line is breaking
//			this.model.add();
		});

		app.Calories.add(localStoreAr);

	}

});