'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Farm web nutrient calculator', function() {

  describe('animals-purchased', function() {

    beforeEach(function() {
      browser.get('angularjs/animals-purchased/index.html');
    });

    it('should render sample when user navigates to angularjs/animals-purchased/index.html', function() {
      expect(element.all(by.css('body h3')).first().getText()).
        toContain('Farmbuild Diary Nutrient Calculator - Animals Purchased');
    });

    it('should add new animal', function() {
      expect(element(by.model('animalType')).sendKeys('Heavy adult cattle (650 Kg)').getAttribute('value')).
        toBe('0');
      expect(element(by.model('numberOfAnimals')).sendKeys('12').getAttribute('value')).
        toBe('12');
      element(by.buttonText('Add Animal')).click().then(function(){
        expect(element.all(by.css('table#animalsTbl tr')).count()).
          toMatch(3);
      });
    });

    it('should calculate nutrient', function() {
      expect(element(by.model('animalType')).sendKeys('Heavy adult cattle (650 Kg)').getAttribute('value')).
        toBe('0');
      expect(element(by.model('numberOfAnimals')).sendKeys('12').getAttribute('value')).
        toBe('12');
      element(by.buttonText('Add Animal')).click().then(function(){
        expect(element.all(by.css('table#animalsTbl tr')).count()).
          toMatch(3);
      })
      element(by.buttonText('Calculate nutrient')).click().then(function(){
        expect(element.all(by.css('summary .form-group')).first().getText()).
          toMatch(12);
      });
    });

    it('should add new animal type and use it for adding a new animal', function() {
      expect(element(by.model('type.name')).sendKeys('Test').getAttribute('value')).
        toBe('Test');
      expect(element(by.model('type.weight')).sendKeys('100').getAttribute('value')).
        toBe('100');
      element(by.buttonText('Add Type')).click().then(function(){
        expect(element.all(by.css('table#animalTypesTbl tr')).count()).
          toMatch(8);
      });

      expect(element(by.model('animalType')).sendKeys('Test (100)').getAttribute('value')).
        toBe('5');
      expect(element(by.model('numberOfAnimals')).sendKeys('2').getAttribute('value')).
        toBe('2');
      element(by.buttonText('Add Animal')).click().then(function(){
        expect(element.all(by.css('table#animalsTbl tr')).count()).
          toMatch(3);
      })

    });

  });

});