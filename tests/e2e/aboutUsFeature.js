describe('About Us', function() {

  var basket = element(by.id('basketIcon'))

  beforeEach(function() {
    browser.get('http://localhost:5000');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('atlantic');
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