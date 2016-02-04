'use strict';

describe('Controller: BasketController', function() {
  beforeEach(module('FashionRetailer'));

  var mockShoppingBasketService,
      mockResourceFactory,
      ctrl,
      item = {
        "name":"Gold Button Cardigan",
        "category": "Casual",
        "gender": "Female",
        "colour": "Black",
        "price": 167,
        "stockQuantity": 6,
        "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
      },
      addedItem = {
        "name":"Gold Button Cardigan",
        "category": "Casual",
        "gender": "Female",
        "colour": "Black",
        "price": 167,
        "stockQuantity": 6,
        "quantity": 1,
        "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
      },
      lowStockItem = {
        "name":"Gold Button Cardigan",
        "category": "Casual",
        "gender": "Female",
        "colour": "Black",
        "price": 167,
        "stockQuantity": 1,
        "quantity": 1,
        "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
      };


  module(function($provide) {
    $provide.factory('ResourceFactory', function() {
      this.query = jasmine.createSpy('query').andCallFake(function(string) {
        if (passPromise) {
          item = [ {
            "name":"Gold Button Cardigan",
            "category": "Casual",
            "gender": "Female",
            "colour": "Black",
            "price": 167,
            "stockQuantity": 6,
            "img": "https://cdnb.lystit.com/photos/3452-2014/09/12/versace-black-gold-button-cardigan-product-1-23517747-1-790845754-normal.jpeg" 
          }];
          return $q.when(item);
        }
        else {
          return $q.reject('something went wrong');
        }
        });
      return  item;
    });
  });

  module(function($provide) {
    $provide.service('ShoppingBasketService', function() {
      this.addNewItem = jasmine.createSpy('addNewItem').andCallFake(function(item) {
      }); 
      this.addOne = jasmine.createSpy('addOne').andCallFake(function(item) {
      }); 
      this.minusOne = jasmine.createSpy('minusOne').andCallFake(function(item) {
      }); 
      this.addDiscount = jasmine.createSpy('addDiscount').andCallFake(function(item) {
      }); 
      this.addPrice = jasmine.createSpy('addPrice').andCallFake(function(item) {
      }); 
      this.calcTotalPrice = jasmine.createSpy('calcTotalPrice').andCallFake(function(item) {
      }); 
    });
  });

  beforeEach(inject(function($controller, ResourceFactory, ShoppingBasketService) {
    ctrl = $controller('BasketController');
    mockResourceFactory = ResourceFactory;
    mockShoppingBasketService = ShoppingBasketService;
  }));

  describe('On initialize', function() {
    it('assigns cart service to a variables', function() {
      expect(ctrl.shoppingBasketService).toEqual(mockShoppingBasketService);
    });
    it('assigns resouce factory to a variables', function() {
      expect(ctrl.resourceFactory).toEqual(mockResourceFactory);
    });
    it("assigns shoppingBasketService's basket to variabe basket", function() {
      expect(ctrl.basket).toEqual(mockShoppingBasketService.basket);
    });
    it("assigns shoppingBasketService's basketInfo to variabe basketInfo", function() {
      expect(ctrl.basketInfo).toEqual(mockShoppingBasketService.basketInfo);
    });
    it("assigns 0 to variabe flashMessage", function() {
      expect(ctrl.flashMessage).toEqual(0);
    });
  });

  describe('Function: addItem', function() {
  	 it('calls shoppingBasketService.addNewItem() if item has not already been called', function() {
      spyOn(mockShoppingBasketService,'addNewItem');
      ctrl.addItem(item);
      expect(mockShoppingBasketService.addNewItem).toHaveBeenCalledWith(item);
    });
  }); 

  describe('Function: addOne', function() {
  	 it('calls shoppingBasketService.addOne()if there is enough stock', function() {
      spyOn(mockShoppingBasketService,'addOne');
      ctrl.addOne(addedItem);
      expect(mockShoppingBasketService.addOne).toHaveBeenCalledWith(addedItem);
    });
    it('does not call shoppingBasketService.addOne(item)if there is not enough stock', function() {
      spyOn(mockShoppingBasketService,'addOne');
      ctrl.addOne(lowStockItem);
      expect(mockShoppingBasketService.addOne).not.toHaveBeenCalledWith(lowStockItem);
    });
  }); 

  describe('Function: minusOne', function() {
		 it('calls shoppingBasketService.minusOne()', function() {
      spyOn(mockShoppingBasketService,'minusOne');
	    ctrl.minusOne(item);
	    expect(mockShoppingBasketService.minusOne).toHaveBeenCalledWith(item);
	  });
  }); 

  describe('Function: update', function() {
		 it('calls shoppingBasketService.addPrice()', function() {
      spyOn(mockShoppingBasketService,'addPrice');
	    ctrl.update();
	    expect(mockShoppingBasketService.addPrice).toHaveBeenCalled();
	  });
		 it('calls shoppingBasketService.calcTotalPrice()', function() {
      spyOn(mockShoppingBasketService,'calcTotalPrice');
	    ctrl.update();
	    expect(mockShoppingBasketService.calcTotalPrice).toHaveBeenCalled();
	  });
  }); 

  describe('Function: resetFlashMessage', function() {
     it('resets flashMessage back to 0', function() {
      ctrl.resetFlashMessage();
      expect(ctrl.flashMessage).toEqual(0);
    });
  }); 

  describe('Function: activeFlashMessage', function() {
    it('returns true if input value equals flashMessage variabe', function() {
      expect(ctrl.activeFlashMessage(0)).toEqual(true);
    });
    it('returns false if input value does not equal the flashMessage variabe', function() {
      expect(ctrl.activeFlashMessage(1)).toEqual(false);
    });
  }); 

});