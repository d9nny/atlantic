'use strict';

atlantic.controller('HomeController', ['$http', 'ResourceFactory', function($http, ResourceFactory) {
	var self = this;

	self.resourceFactory = ResourceFactory;

 	self.resourceFactory.query("featuredProducts")
	  .then(function(response) {
	    self.featuredProducts = response.data;
	    self.showProducts();
	  });

  self.setGender = function(gender) {
    self.activeGender = gender;
  };

  self.setCategory = function(category) {
    self.activeCategory = category;
  };

  self.setBasketShow = function() {
  	self.basketShow === 0 ? self.basketShow = 1 : self.basketShow = 0;
  };

  self.basketSelected = function() {
    return (self.basketShow === 1);
  };

  self.showProducts = function() {
  	self.activeProducts = [];
  	for (var i = 0; i < self.featuredProducts.length; i++) {
  		if ((self.featuredProducts[i].category === self.activeCategory) 
  		  			&& (self.featuredProducts[i].gender === self.activeGender)) {
  			self.activeProducts.push(self.featuredProducts[i]);
  		}
  	}
  };
}]);