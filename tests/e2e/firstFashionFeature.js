describe('First Fashion', function() {

  var basket = element(by.id('basketIcon'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('First Fashion');
  });
  describe('opening basket', function(){
  it('clicking on basket icon opens the basket', function() {
    basket.click();
    expect(element(by.id('basket'))).isDisplayed();
  });

  it('finds the last Spike', function() { 
    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spikeh'); 

});