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
		'click .ion-search': 'searchQueryTerm',
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

	searchQueryTerm: function() {
		queryTerm = document.querySelector('#search').value;
		console.log(queryTerm);
	},

		//enter key press handler
		//if focus is on the input field and user presses enter (keyboard up event)
		//then the search should be triggered
	enterKeyPress: function(event) {
		var input = document.querySelector('input');

		if (event.key === 'Enter' || event.keyCode === 13 && input === document.activeElement) {
			this.searchQueryTerm();
		}
	}

});


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

