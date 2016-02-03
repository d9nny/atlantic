'use strict';

describe('Controller: BasketController', function() {
  beforeEach(module('FashionRetailer'));

  var shoppingBasketService,
      ctrl,
      item = {
          "name":"Gold Button Cardigan",
          "category": "Casual",
          "gender": "Female",
          "colour": "Black",
          "price": 167,
          "stockQuantity": 6,
          "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
        };

  beforeEach(inject(function($controller) {
    ctrl = $controller('BasketController');
      // shoppingBasketService = {
      //   totalPrice: 0,
      //   discount: 0, 
      //   basket: [  ],
      //   addNewItem : function() {},
      // };

      // spyOn(shoppingBasketService, 'addNewItem');
  }));

  // describe('On initialize', function() {
  //   it('assigns cart service to a variables', function() {
  //     expect(ctrl.shoppingBasketService).toEqual(shoppingBasketService);
  //   });
  //   it('assigns resouce factory to a variables', function() {
  //     expect(ctrl.resourceFactory).toEqual(ResourceFactory);
  //   });
  //   it("assigns shoppingBasketService's basket to variabe basket", function() {
  //     expect(ctrl.basket).toEqual(shoppingBasketService.basket);
  //   });
  //   it("assigns shoppingBasketService's discount to variabe discount", function() {
  //     expect(ctrl.discount).toEqual(shoppingBasketService.discount);
  //   });
  //   it("assigns shoppingBasketService's totalPrice to variabe totalPrice", function() {
  //     expect(ctrl.totalPrice).toEqual(shoppingBasketService.totalPrice);
  //   });
  // });

  // describe('Function: addItem', function() {
  // 	 it('calls shoppingBasketService.addNewItem()', function() {
  //     ctrl.addItem(item);
  //     expect(shoppingBasketService.addNewItem()).toHaveBeenCalled();
  //   });
  // }); 

  // describe('Function: addOne', function() {
  // 	 it('calls shoppingBasketService.addOne()if there is enough stock', function() {
  //     ctrl.addOne(item);
  //     expect(shoppingBasketService.addOne()).toHaveBeenCalled();
  //   });
  //   it('does not call shoppingBasketService.addOne(item)if there is not enough stock', function() {
  //     for (var i = 0; i < 6; i++) {
  //       ctrl.addOne(item);
  //     }
  //     ctrl.addOne(item);
  //     expect(shoppingBasketService.addOne(item)).toNotHaveBeenCalled();
  //   });
  // }); 

  // describe('Function: minusOne', function() {
	// 	 it('calls shoppingBasketService.minusOne()', function() {
	//     ctrl.minusOne(item);
	//     expect(shoppingBasketService.minusOne()).toHaveBeenCalled();
	//   });
  // }); 

  // describe('Function: addTotal', function() {
	// 	 it('calls shoppingBasketService.addTotal()', function() {
	//     ctrl.update();
	//     expect(shoppingBasketService.addTotal()).toHaveBeenCalled();
	//   });
	// 	 it('calls updateVariables()', function() {
	//     ctrl.update();
	//     expect(ctrl.updateVariables()).toHaveBeenCalled();
	//   });
  // }); 

});