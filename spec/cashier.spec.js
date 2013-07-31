var core = require('../lib/cashier');

describe('Cashier', function() {                
   it("should cost 0 with an empty Cashier", function() {
      var book = 0;
      var Cashier = new core.Cashier();
      expect(Cashier.getTotalPrice()).toEqual(0);
   });

   it("should cost 40 bucks with one book", function() {
      var book = 1;
      var Cashier = new core.Cashier();
      Cashier.addBook(book);
      expect(Cashier.getTotalPrice()).toEqual(40);
   });

   it("should receive 5% with two distinct books", function() {
      var Cashier = new core.Cashier();
      Cashier.addBook(1);
      Cashier.addBook(2);
      expect(Cashier.getTotalPrice()).toEqual(80 * 0.95);
   });

   it("should not receive discount with two equal books", function() {
      var Cashier = new core.Cashier();
      Cashier.addBook(1);
      Cashier.addBook(1);
      expect(Cashier.getTotalPrice()).toEqual(80);
   });

   it("should receive discount with 2 different books and 1 equal", function() {
      var Cashier = new core.Cashier();
      Cashier.addBook(1);
      Cashier.addBook(1);
      Cashier.addBook(2);
      expect(Cashier.getTotalPrice()).toEqual((80 * 0.95) + 40);
   });

   it("should receive discount with 3 different books", function() {
      var Cashier = new core.Cashier();
      Cashier.addBook(1);
      Cashier.addBook(4);
      Cashier.addBook(5);
      expect(Cashier.getTotalPrice()).toEqual(40 * 3 * 0.9);
   });

   it("should receive discount with 4 different books", function() {
      var Cashier = new core.Cashier();
      Cashier.addBook(1);
      Cashier.addBook(2);
      Cashier.addBook(3);
      Cashier.addBook(5);
      expect(Cashier.getTotalPrice()).toEqual(40 * 4 * 0.8);
   });

   it("should receive discount with 5 different books", function() {
      var Cashier = new core.Cashier();
      Cashier.addBook(1);
      Cashier.addBook(2);
      Cashier.addBook(3);
      Cashier.addBook(4);
      Cashier.addBook(5);
      expect(Cashier.getTotalPrice()).toEqual(40 * 5 * 0.75);
   });

});
