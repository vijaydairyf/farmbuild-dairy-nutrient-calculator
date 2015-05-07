'use strict';

angular.module('farmbuild.nutrientCalculator.examples.concentratesPurchased', ['farmbuild.nutrientCalculator'])

	.run(function($rootScope){
		$rootScope.appVersion = farmbuild.examples.nutrientcalculator.version;
	})

	.filter('dryWet', function() {
		return function(input) {
			return input ? 'Dry' : 'Wet';
		}
	})

	.controller('ConcentratesPurchasedCtrl', function ($scope, $rootScope, nutrientCalculator, concentratesPurchased) {

		$rootScope.decimalPrecision = farmbuild.examples.nutrientcalculator.decimalPrecision;
		$scope.concentrates = [];
		$scope.noResult = false;
		$scope.concentrateTypes = concentratesPurchased.types.toArray();
    $scope.newConcentrate = {isDry:false};


		$scope.calculate = function (concentrates) {
			$scope.result = concentratesPurchased.calculate(concentrates);
			$scope.noResult = !$scope.result;
      saveInSessionStorage($scope.result);

		};

		$scope.addConcentrate = function (type, weight, isDry) {
			isDry = (isDry === 'true');
			$scope.concentrates = concentratesPurchased.add(type, weight, isDry).concentrates();
			$scope.result = '';
			$scope.newConcentrate = {};
			$scope.noResult = !$scope.concentrates;
		};

		$scope.removeConcentrate = function (index) {
			$scope.result = '';
			$scope.concentrates = concentratesPurchased.removeAt(index);
		};

		$scope.addConcentrateType = function (type) {
			$scope.concentrateTypes = concentratesPurchased.types.add(type.name, type.metabolisableEnergyInMJPerKg, type.dryMatterPercentage,
																									type.sulphurPercentage, type.potassiumPercentage,
																									type.phosphorusPercentage, type.nitrogenPercentage);
			$scope.result = '';
			$scope.type = {};
			$scope.noResult = !$scope.concentrates;
		};

		$scope.removeConcentrateType = function (index) {
			$scope.result = '';
			$scope.concentrateTypes = concentratesPurchased.types.removeAt(index);
		};

    function saveInSessionStorage(result) {
      nutrientCalculator.session.saveSection('concentratesPurchased', result);
    };

    if(nutrientCalculator.session.isLoadFlagSet(location)){
      var concentratesPurchasedData = nutrientCalculator.session.loadSection('concentratesPurchased');

      concentratesPurchased.load(concentratesPurchasedData.concentrates);
      $scope.calculate(concentratesPurchasedData.concentrates);
      $scope.concentrates =  concentratesPurchasedData.concentrates;
    }

	});