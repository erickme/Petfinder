(function () {
    'use strict';

    angular.module('petfinder')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect back home
            $urlRouterProvider.otherwise("");

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
        }]);
})();