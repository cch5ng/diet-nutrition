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
  },
  render: function() {
    $(this.el).append("<form><input type='text' id='searchInp'></form>");
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

