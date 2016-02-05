exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['firstFashionFeature.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}


