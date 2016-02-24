'use strict';

atlantic.controller('AboutUsController', [ 'ResourceFactory', function(ResourceFactory) {
	var self = this;
  self.resourceFactory = ResourceFactory;

    self.resourceFactory.query('companies')
      .then(function(response) {
        self.companies = response.data;
      });

    self.resourceFactory.query("teamMembers")
      .then(function(response) {
        self.teamMembers = response.data;
      });

    self.resourceFactory.query("clients")
      .then(function(response) {
        self.clients = response.data;
      });
}]);

