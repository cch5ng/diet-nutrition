// js/views/app.js

var app = app || {};

//create model view
app.AppView = Backbone.View.extend({
	tagName: 'li',
	el: $('body'),

	//foodsTemplate: _.template( $('#food-template').html() ),

	events: {
		'click .ion-search': 'searchQueryStr',
		'keypress #search': 'enterKeyPress',
		'click .foodContainer': 'createOnClick'
	},

	initialize: function() {
		this.queryTerm = '';

//TODO, not totally clear what this is listening for or what the trigger is
		this.listenTo(app.Foods, 'add', this.addOne);
		this.listenTo(app.Foods, 'reset', this.addAll);

	},

	//helper func
	cleanQueryStr: function(queryStr) {
	  var strAr = queryStr.split(' ');
	  return strAr.join('%20');
	},



//TODO parse the resulting object, maybe all of this logic should be merged into searchQueryTerm
	//given a query string, returns an object that would be used to populate the food models
	//the queryStr param should already have been cleaned up where spaces are replaced with %20
	searchQueryStr: function() {
		var queryStr = document.querySelector('#search').value;
		queryStr = this.cleanQueryStr(queryStr);
	  var url = 'https://api.nutritionix.com/v1_1/search/' + queryStr + '?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=6a998f38&appKey=349a62ce80525685d939c45cb5faf8ee';
	  var foodsAr = [];
	  
	  var jqxhr = $.ajax({
	    url: url,
	    dataType: 'json'
	  }).
	    done(function(results) {
	      //console.log('results: ' + results);
	      //console.log('results: ' + results.hits[0].fields.item_name + ' ' + results.hits[0].fields.nf_calories + ' calories ' + results.hits[0].fields.brand_name);

				//helper func
				//given an array of search results (objects), this function returns a foodList collection
				function genFoodList(searchAr) {
					//var foodsAr = [];
					_.each(searchAr, function(elem, idx) {
						app.food = new app.Food();
						app.food.set('id', elem.fields.item_id);
						app.food.set('name', elem.fields.item_name);
						app.food.set('brandName', elem.fields.brand_name);
						app.food.set('calories', elem.fields.nf_calories);
						//console.log(app.food);
						foodsAr.push(app.food);

						//console.log(app.Foods[idx]);
					});
					return foodsAr;

					//app.Foods.set(foodsAr);
					// console.log(app.Foods.length);
					// console.log(app.Foods[0].attributes.name);
				}

	      app.Foods.add(genFoodList(results.hits));
	      console.log(app.Foods);
	    }).
	    error(function(err) {
	      console.log('Houston we have a problem: ' + err);
	    }).
	    always(function() {
	      console.log('done');
	    });
	},

		//enter key press handler
		//if focus is on the input field and user presses enter (keyboard up event)
		//then the search should be triggered
	enterKeyPress: function(event) {
		var input = document.querySelector('input');

		if (event.key === 'Enter' || event.keyCode === 13 && input === document.activeElement) {
			this.searchQueryStr();
		}
	},

	addOne: function(food) {
		var view = new app.FoodView({ model: food});
//TODO don't totally understand the render() call, why .el needs to be at end
		$('#food-list').append( view.render().el );
	},

	addAll: function() {
		this.$('#food-list').html('');
		app.Foods.each(this.addOne, this);
//TODO
	},

	newAttributes: function() {
	  return {
	    id: this.$('.food-container').name,
	    name: this.$('.food-container').name,
	    brandName: this.$('.food-container').brandName,
	    calories: this.$('.food-container').calories
	  };
	},

	createOnClick: function(evt) {
		var strAr = evt.target.innerHTML.split(' from ');
		var name = strAr[0];

		app.Foods.models.forEach(function(food, idx) {
			if (food.attributes.name === name) {
				app.FoodsLocalStore.create( food.attributes );
			}
		})

		

	}
});