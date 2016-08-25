(function () {
    'use strict';

    angular
        .module('petfinder.results')
        .controller('ResultsController', resultsController);

    resultsController.$inject = ['$scope', '$state', 'ResultsService', '$stateParams'];

    function resultsController($scope, $state, ResultsService, $stateParams) {
        //intial load
        loadResults();

        //method declaration
        $scope.onPetclick = onPetclick;
        $scope.numberOfPages = numberOfPages;
        $scope.nextPage = nextPage;
        $scope.previousPage = previousPage;

        //scope variables initialization
        $scope.noResults = false;
        $scope.currentPage = 0;
        $scope.pageSize = 12;
        $scope.petList = [];

        //makes call to api to retrieve Pet list based in the parameters pased
        function loadResults() {
            ResultsService.getPets($stateParams)
                .then(function (response) {
                    loadPets(response);
                })
                .catch(function (message) {
                    console.log(message);
                });
        }

        //reads service response and loads it in the scope
        function loadPets(response) {
            if (response.data.petfinder.pets)
                $scope.petList = response.data.petfinder.pets.pet;
            else
                $scope.noResults = true;
        }

        //redirects user to the clicked pet details page
        function onPetclick(id) {
            $state.go('petfinder.details', { id: id });
        }

        //calculates the number of pages
        function numberOfPages() {
            return Math.ceil($scope.petList.length / $scope.pageSize);
        }

        function nextPage() {
            $scope.currentPage++;
        }

        function previousPage() {
            $scope.currentPage--;
        }
    }
})();
