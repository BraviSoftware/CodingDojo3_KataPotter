var core = require('../lib/core');

describe('Basket', function() {                
  it("should cost 0 with an empty basket", function() {
    var book = 0;
    var basket = new core.Basket();
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it("should cost 40 bucks with one book", function() {
    var book = 1;
    var basket = new core.Basket();
    basket.addBook(book);
    expect(basket.getTotalPrice()).toEqual(40);
  });

  it("should receive 5% with two distinct books", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    expect(basket.getTotalPrice()).toEqual(80 * 0.95);
  });

  it("should not receive discount with two equal books", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(1);
    expect(basket.getTotalPrice()).toEqual(80);
  });

  it("should receive discount with 2 different books and 1 equal", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(1);
    basket.addBook(2);
    expect(basket.getTotalPrice()).toEqual((80*0.95) + 40);
  });

  it("should receive discount with 3 different books", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(3);
    expect(basket.getTotalPrice()).toEqual(120 * 0.9);
  });

  it("should receive discount with 4 different books", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(3);
    basket.addBook(4);
    expect(basket.getTotalPrice()).toEqual(160 * 0.80);
  });

  it("should receive discount with 5 different books", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(3);
    basket.addBook(4);
    basket.addBook(5);
    expect(basket.getTotalPrice()).toEqual(200 * 0.75);
  });

  it("should receive discount with more than 5 different books", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(3);
    basket.addBook(4);
    basket.addBook(5);
    basket.addBook(6);
    expect(basket.getTotalPrice()).toEqual(240 * 0.75);
  });

  it("should receive discount with 3 different books and 2 equal", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(3);
    basket.addBook(1);
    basket.addBook(2);
    expect(basket.getTotalPrice()).toEqual((120 * 0.9) + (80 * 0.95));
  });

  it("should receive discount with group of 3, 2 and 1", function() {
    var basket = new core.Basket();
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(3);
    basket.addBook(1);
    basket.addBook(2);
    basket.addBook(1);
    expect(basket.getTotalPrice()).toEqual((120 * 0.9) + (80 * 0.95) + 40);
  });

  it("should remove one array from another", function () {
    var array = [1,2,3,1,6,3,4,1];
    var toRemove = [1,3];
    expect(array.remove(toRemove)).toEqual([2,1,6,3,4,1]);
  });
});
