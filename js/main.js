(function($) {

//create model
// var Food = Backbone.Model.extend({
	//name: '',
	//calories: 0,  
	//defaults: {
		
	//},
	
//   initialize: function() {
//     console.log('');
//   }
// });

//create collection
// var FoodList = Backbone.Collection.extend({
//   model: Food
// });

//create model view
var FoodView = Backbone.View.extend({
	tagName: 'li',
	el: $('body'),

	events: {
		'click .ion-search': 'searchQueryStr',
		'keypress #search': 'enterKeyPress' 
	},

	initialize: function() {
		this.render();

		this.queryTerm = '';

		//enter key press listener
		//document.querySelector('form').onkeypress = enterKeyUp;
	},

	render: function() {
		$(this.el).append("<form><input type='text' id='search' size='70' onkeypress='return noEnter(event)'><i class='ion ion-search'></i></form>");
		$(this.el).append("<ul></ul>");
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
		console.log(queryStr);
		var queryStr1 = cleanQueryStr(queryStr);
	  var url = 'https://api.nutritionix.com/v1_1/search/' + queryStr1 + '?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=6a998f38&appKey=349a62ce80525685d939c45cb5faf8ee';
	  
	  var jqxhr = $.ajax({
	    url: url,
	    dataType: 'json'
	  }).
	    done(function(results) {
	      console.log('results: ' + results);
	      console.log('results: ' + results.hits[0].fields.item_name + ' ' + results.hits[0].fields.nf_calories + ' calories ' + results.hits[0].fields.brand_name);
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

//create main view
// var FoodListView = Backbone.View.extend({
//   initialize: function() {
//     console.log('');    
//   },
//   render: function() {
//     console.log('');    
//   }  
// });  
	
var foodView = new FoodView();  
	
})(jQuery);

