describe('farmbuild.nutrientCalculator module', function() {

  // instantiate service
  var collections;

  beforeEach(module('farmbuild.nutrientCalculator'));

  beforeEach(inject(function (_collections_) {
    collections = _collections_;
  }));

  describe('collections factory', function(){
    it('collections should be defined', inject(function() {
      expect(collections).toBeDefined();
    }));
  });

  var max = 1000000000,min=10;
  function create(name) {
    return {name:name, created: new Date(), rand: Math.random() * (max - min) + min};
  }

  describe('collections operation', function(){
    it('adding an item to an empty array will return the array with 1 item added', inject(function() {
      var result = collections.add([],create("hello"))
      expect(angular.isArray(result)).toBe(true)
      expect(result.length).toBe(1)
    }))

    it('at with index 0 should return the first', inject(function() {
      var item = create('hi'),
        items = [item],
        result = collections.at(items, 0)
      expect(angular.equals(item, result)).toBe(true)
    }))

    it('count with no param should return -1', inject(function() {
      var result = collections.size()
      expect(result).toBe(-1)
    }))

    it('count with an array with 2 elements should return 2', inject(function() {
      var items = [create('hello'), create('hello')],
        result = collections.size(items)
      expect(result).toBe(2)
    }))

    it('removeAt with index -1 should return the same array', inject(function() {
      var items = [create('hello'), create('hello')],
        result = collections.removeAt(items, -1),
        copied = angular.copy(items)
      expect(items.length).toBe(result.length)
      expect(angular.equals(copied, result)).toBe(true)
    }))

  });

});

