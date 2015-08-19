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
	el: $('body'),
	//events: {
		
	//},
	initialize: function() {
		this.render();

		var queryTerm;

		//enter key press handler
		//if focus is on the input field and user presses enter (keyboard up event)
		//then the search should be triggered
		function enterKeyUp(event) {
			var input = document.querySelector('input');

			if (event.key === 'Enter' || event.keyCode === 13 && input === document.activeElement) {
				searchIconEventListener();
			}
		}

		function searchIconEventListener() {
			queryTerm = document.querySelector('#search').value;
			console.log(queryTerm);
		}

			//search icon click listener
		var searchIcon = document.querySelector('.ion-search');
		searchIcon.addEventListener('click', searchIconEventListener);

		//enter key press listener
		document.querySelector('form').onkeypress = enterKeyUp;
	},
	render: function() {
		$(this.el).append("<form><input type='text' id='search' size='70' onkeypress='return noEnter(event)'><i class='ion ion-search'></i></form>");
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

