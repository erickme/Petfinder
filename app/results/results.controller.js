(function () {
    'use strict';

    angular
        .module('petfinder.results')
        .controller('ResultsController', resultsController);

    resultsController.$inject = ['$scope', '$state', 'ResultsService', '$stateParams'];

    function resultsController($scope, $state, ResultsService, $stateParams) {
        loadResults();

        $scope.onPetclick = onPetclick;

        $scope.noResults = false;

        function loadResults() {
            ResultsService.getPets($stateParams)
                .then(function (response) {
                    loadPets(response);
                })
                .catch(function (message) {
                    console.log(message);
                });
        }

        function loadPets(response) {
            if (response.data.petfinder.pets)
                $scope.petList = response.data.petfinder.pets.pet;
            else
                $scope.noResults = true;
        }

        function onPetclick(id) {
            $state.go('petfinder.details', { id: id });
        }
    }
})();
