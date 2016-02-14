'use strict';

var atlantic = angular.module('Atlantic', ['ngResource', 'ngRoute']);


	atlantic.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        redirectTo: '/aboutUs'
	      })
	     	.when('/aboutUs', {
	        templateUrl: 'app/partials/aboutUs/aboutUs.html',
					controller: 'AboutUsController',
	      	controllerAs: 'aboutCtrl'
	      })
	      .when('/ourWork', {
	        templateUrl: 'app/partials/ourWork/ourWork.html'
	      })
	      .when('/clients', {
	      	templateUrl: 'app/partials/clients/clients.html'
	      })
	     	.when('/news', {
	      	templateUrl: 'app/partials/news/news.html'
	      })
	      .when('/contactUs', {
	      	templateUrl: 'app/partials/contactUs/contactUs.html'
	      })
	      .otherwise({
        redirectTo: '/aboutUs'
      });
	}]);