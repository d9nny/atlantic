'use strict';

fashionRetailer.controller('BasketController', ['$http', 'ResourceFactory', 'ShoppingBasketService', function($http, ResourceFactory, ShoppingBasketService) {
	var self = this;

	self.shoppingBasketService = ShoppingBasketService;
	self.resourceFactory = ResourceFactory;
	self.basket = self.shoppingBasketService.basket;
	self.basketInfo = self.shoppingBasketService.basketInfo;

	self.resourceFactory.query("discountCodes")
		.then(function(response) {
			self.discountCodes = response.data;
		});

	self.addItem = function(item) {
		if (!("quantity" in item) || (item.quantity === 0)) {
			self.shoppingBasketService.addNewItem(item);
		}
	};

	self.addOne = function(item) {
		if ((item.quantity + 1) <= item.stockQuantity) {
			self.shoppingBasketService.addOne(item);
		}
	};

	self.minusOne = function(item) {
		self.shoppingBasketService.minusOne(item);
	};

	self.minusOne = function(item) {
		self.discount = self.shoppingBasketService.minusOne(item);
	};

	self.checkDiscount = function(usercode) {
		for (var i = 0; i < self.discountCodes.length; i++) {
			if (usercode === self.discountCodes[i].code) {
				self.shoppingBasketService.addDiscount(usercode, self.discountCodes[i]);
			}
		}
	};

	self.update = function() {
		self.shoppingBasketService.addPrice();
		self.shoppingBasketService.calcTotalPrice(); 
	};

}]);





