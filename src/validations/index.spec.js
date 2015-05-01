'use strict';

describe('Service: validations', function () {

  // load the service's module
  beforeEach(module('farmbuild.nutrientCalculator'));

  // instantiate service
  var validations;
  beforeEach(inject(function (_validations_) {
    validations = _validations_;
  }));

  describe('Testing isAlphabet function with different inputs', function() {

    it('isNumber should return false for "P"', inject(function () {
      expect(validations.isAlphabet('P')).toBeTruthy();
    }));

    it('isNumber should return false for "P"', inject(function () {
      expect(validations.isAlphabet('SamplePage')).toBeTruthy();
    }));

    it('isNumber should return false for "P"', inject(function () {
      expect(validations.isAlphabet('samplePage')).toBeTruthy();
    }));

    it('isNumber should return false for "2"', inject(function () {
      expect(validations.isAlphabet('2')).toBeFalsy();
    }));

    it('isNumber should return false for "a "', inject(function () {
      expect(validations.isAlphabet('a ')).toBeFalsy();
    }));

    it('isNumber should return false for "a%"', inject(function () {
      expect(validations.isAlphabet('a%')).toBeFalsy();
    }));

    it('isNumber should return false for "a%a"', inject(function () {
      expect(validations.isAlphabet('a%a')).toBeFalsy();
    }));

    it('isNumber should return false for "a a"', inject(function () {
      expect(validations.isAlphabet('a a')).toBeFalsy();
    }));

    it('isNumber should return false for "#"', inject(function () {
      expect(validations.isAlphabet('#')).toBeFalsy();
    }));

  });

  describe('Testing isPositiveNumber function with different inputs', function() {

    it('isNumber should return false for "P"', inject(function () {
      expect(validations.isPositiveNumber('P')).toBeFalsy();
    }));

    it('isNumber should return true for "-2"', inject(function () {
      expect(validations.isPositiveNumber(-2)).toBeFalsy();
    }));

    it('isNumber should return true for "-2"', inject(function () {
      expect(validations.isPositiveNumber(-2.2322323)).toBeFalsy();
    }));

    it('isNumber should return true for "2"', inject(function () {
      expect(validations.isPositiveNumber(2)).toBeTruthy();
    }));

    it('isNumber should return true for "2.1"', inject(function () {
      expect(validations.isPositiveNumber(2.1)).toBeTruthy();
    }));

  });

});
