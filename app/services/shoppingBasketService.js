'use strict';

fashionRetailer.service('ShoppingBasketService', function() {
	var self = this;
	self.basketInfo = {"price": 0, "discount": 0, "totalPrice": 0}
	self.basket = [];

	self.addNewItem = function(item) { 
		item["quantity"] = 1;
		self.basket.push(item);
	};

	self.calculateLineTotal = function(item) {
		return (item.price * item.quantity);
	};

	self.addOne = function(item) {
		item.quantity += 1;
	};

	self.minusOne = function(item) {
		item.quantity -= 1;
		if (item.quantity === 0) {
			self.removeItem(item);
		} 
	};

	self.removeItem = function(item) {
		for (var i = 0; i < self.basket.length; i++) {
			if (self.basket[i] === item) {
				self.basket.splice(i);
			}
		}
	};

	self.addDiscount = function(usercode, code) {
		if ("spend" in code) {
			if ("category" in code) {
				if (self.basketInfo.totalPrice > code.spend) {
					for (var i = 0; i < self.basket.length; i++) {
						if (self.basket[i].category === code.category){
							self.basketInfo["discount"] = code.discount;
						}
					}
				}
			} else {
				if (self.basketInfo.totalPrice > code.spend) {
					self.basketInfo["discount"] = code.discount;
				}
			}
		} else {
			self.basketInfo["discount"] = code.discount;
		}
	};

	self.addPrice = function() {
		var total = 0;
		for(var i = 0; i < self.basket.length; i++) {
			total += self.calculateLineTotal(self.basket[i]);
		}
		self.basketInfo["price"] = total;
	};

	self.calcTotalPrice = function() {
		self.basketInfo["totalPrice"] = (self.basketInfo["price"] - self.basketInfo["discount"]);
	};
	
});
