(function () {
    'use strict';

    angular.module('petfinder', [
        //angular modules
        'ngMaterial',
        //'ngSanitize',
        'ui.router',
        'petfinder.filter',
        'petfinder.results',
        'petfinder.details'
    ]);
})();