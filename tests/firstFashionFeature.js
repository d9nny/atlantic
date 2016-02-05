describe('First Fashion', function() {

  var basket = element(by.id('basketIcon'));


  beforeEach(function() {
    browser.get('http://localhost:5000/');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('First Fashion');
  });

  describe('opening basket', function(){
    it('clicking on basket icon opens the basket', function() {
      basket.click();
      expect(element(by.id('basket'))).isDisplayed();
    });
  });

  describe('adding promo code', function(){
    it('clicking on basket icon opens the basket', function() {
      basket.click();
      var promoInput = element(by.model('basketCtrl.code'));
      promoInput.sendKeys('5OFF');
      element(by.id('checkCodeBtn')).click();
      var text = elementby.binding('basketCtrl.basketInfo.discount');
      expect(text.getText()).toEqual("£5");
    });
  });

});


  // var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  //   expect(profiles.last().getText()).toEqual('spikeh'); 