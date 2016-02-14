'use strict';

atlantic.controller('AboutUsController', ['$http', function($http) {
	var self = this;
  self.activeCompany = 1;
  self.companies = [
    {
      'number': 1,
      'name': 'Creative',
      'tagLine': "Brand Guru's",
      'description': 'For twenty five years, we have been thinking of new ways to build our client’s brands, create new marketing opportunities and achieve sales growth for them. Our in depth knowledge of the food and drink sector means that whether you are a fledgling business or national brand our expertise can give you a competitive edge.'
    },
    {
      'number': 2,
      'name': 'Graphics',
      'tagLine': "Print Innovation",
      'description': 'The key to our success is our innovation and reliability. The expertise and experience of utilising the latest print processes and materials and with a dedicated team communicating with you at every stage, you can rest assured that your projects are correct and on schedule.'
    },
    {
      'number': 3,
      'name': 'Digital',
      'tagLine': "Latest Technologies",
      'description': 'The key to our success is our innovation and reliability. The expertise and experience of utilising the latest print processes and materials and with a dedicated team communicating with you at every stage, you can rest assured that your projects are correct and on schedule.'
    },
    {
      'number': 4,
      'name': 'Shopfit',
      'tagLine': "Inspired Interiors",
      'description': 'The key to our success is our innovation and reliability. The expertise and experience of utilising the latest print processes and materials and with a dedicated team communicating with you at every stage, you can rest assured that your projects are correct and on schedule.'
    }
  ];

  self.setCompanyTab = function(num) {
    self.activeCompany = num;
  };

  self.activeCompanyTab = function(num) {
    return (self.activeCompany === num);
  };

}]);