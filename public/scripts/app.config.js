angular.module('domainApp').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/generator', {
        templateUrl: '/views/generator.html'
        controler:'GeneratorController as genCtrl'
    }).otherwise('/', {
        templateUrl: '/views/index.html'
    });
});
