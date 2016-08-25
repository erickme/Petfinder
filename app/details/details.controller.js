(function () {
    'use strict';

    angular
        .module('petfinder.details')
        .controller('DetailsController', detailsController);

    detailsController.$inject = ['$scope', '$stateParams', 'DetailsService'];

    function detailsController($scope, $stateParams, DetailsService) {
        //initial load
        load();

        //gets pet details
        function load() {
            DetailsService.getPet($stateParams.id)
                .then(function (response) {
                    loadPet(response);
                })
                .catch(function (message) {
                    console.log(message);
                });
        }

        //reads API response and loads pet details into scope
        function loadPet(response) {
            $scope.pet = response.data.petfinder.pet;
        }
    }
})();
