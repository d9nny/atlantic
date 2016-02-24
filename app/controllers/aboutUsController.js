'use strict';

atlantic.controller('AboutUsController', [ 'ResourceFactory', function(ResourceFactory) {
	var self = this;
  self.resourceFactory = ResourceFactory;


    self.resourceFactory.query('aboutUs/intro')
      .then(function(response) {
        self.intro = response.data;
      });

    self.resourceFactory.query('aboutUs/companies')
      .then(function(response) {
        self.companies = response.data;
      });

    self.resourceFactory.query("aboutUs/teamMembers")
      .then(function(response) {
        self.teamMembers = response.data;
      });

    self.resourceFactory.query("aboutUs/clients")
      .then(function(response) {
        self.clients = response.data;
      });
}]);

