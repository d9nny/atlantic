'use strict';

fashionRetailer.controller('BasketController', ['$http', 'ResourceFactory', 'ShoppingBasketService', '$timeout', function($http, ResourceFactory, ShoppingBasketService, $timeout) {
	var self = this;

	self.shoppingBasketService = ShoppingBasketService;
	self.resourceFactory = ResourceFactory;
	self.basket = self.shoppingBasketService.basket;
	self.basketInfo = self.shoppingBasketService.basketInfo;
	self.flashMessage = 0;
	self.timeout = $timeout

	self.resourceFactory.query("discountCodes")
		.then(function(response) {
			self.discountCodes = response.data;
		});

	self.timeout( function(){ self.resetFlashMessage(); }, 10000);

	self.addItem = function(item) {
		if (item.stockQuantity > 0) {
			if (!("quantity" in item) || (item.quantity === 0)) {
				self.shoppingBasketService.addNewItem(item);
			} 
		} else {
			self.flashMessage = 1;
		}

	};

	self.addOne = function(item) {
		if ((item.quantity + 1) <= item.stockQuantity) {
			self.shoppingBasketService.addOne(item);
		} else {
			self.flashMessage = 1;
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
			} else {
				self.flashMessage = 2;
			}
		}
	};

	self.update = function() {
		self.shoppingBasketService.addPrice();
		self.shoppingBasketService.calcTotalPrice(); 
	};

	self.resetFlashMessage = function() {
		self.flashMessage = 0;
	};

	self.activeFlashMessage = function(value) {
		return (self.flashMessage === value);
	};

}]);





