(function () {
    'use strict';

    angular.module('petfinder.details')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                //state for details page
                .state('petfinder.details', {
                    url: '/details/:id',
                    views: {
                        'filter': { templateUrl: 'app/filter/filter.html', controller: 'FilterController'},
                        'content': { templateUrl: 'app/details/details.html', controller: 'DetailsController' }
                    }
                });
        }]);
})();