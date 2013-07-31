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
});
