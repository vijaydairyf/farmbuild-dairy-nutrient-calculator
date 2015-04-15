/**
 * @since 0.0.1
 * @copyright 2015 Spatial Vision, Inc. http://spatialvision.com.au
 * @license The MIT License
 * @author Spatial Vision
 * @version 0.0.1
 */

'use strict';

/**
 * nutrientCalculator
 * @module nutrientCalculator
 */
angular.module('farmbuild.nutrientCalculator', [])

	.factory('NutrientCalculator', function (MilkSold, GoogleAnalytic) {
		var NutrientCalculator = {};

		/**
		 * Adds nutrientCalculator block to farmData
		 * @method load
		 * @param {!object} farmData - Saved farm data or default in case of new
		 * @returns {object} updated farmData
		 * @public
		 * @static
		 */
		NutrientCalculator.load = function (farmData) {
			if (!farmData.name) {
				return undefined;
			}
			if (!farmData.nutrientCalculator) {
				farmData.nutrientCalculator = {
					milkSold: {}
				};
			}
			return farmData;
		};

		// Provide a shortcut for modules
		NutrientCalculator.milkSold = MilkSold;
		NutrientCalculator.googleAnalytic = GoogleAnalytic;

		window.farmbuild.nutrientcalculator = NutrientCalculator;

		return NutrientCalculator;
	});