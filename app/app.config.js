(function () {
    'use strict';

    angular.module('petfinder')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect back home
            $urlRouterProvider.otherwise("");
            //state for home page
            $stateProvider
                .state('petfinder', {
                    url: '',
                    abstract: true,
                    templateUrl: 'app/app.html'
                })
                .state('petfinder.index', {
                    url:'',
                    views:{
                        'filter': { templateUrl: 'app/filter/filter.html', controller: 'FilterController'}
                    }
                });
        }])
        //app contants definitions
        .constant('apiUrl', 'http://api.petfinder.com/')
        .constant('apiDefaultArgs', '?format=json&key=1f0c7f48315c13e63b7b7923cacc7959')
})();