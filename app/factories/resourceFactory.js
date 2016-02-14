'use strict';

fashionRetailer.factory('ResourceFactory', ['$http', function($http) {

  return {
    query: function(path) {
      return $http({
        url: path,
        method: 'GET'
      });
    },
  }
}]);


