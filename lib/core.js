var Basket = function () {
    this.bookCodes = [];
}

function getDistinctBooksFromBasket(basket) {
    var distinct = [];

    basket.forEach(function(bookCode){
        if(distinct.indexOf(bookCode) === -1)
            distinct.push(bookCode);
    });
    return distinct;
}

Basket.prototype.getTotalPrice = function() {
    var distinct = getDistinctBooksFromBasket(this.bookCodes);
   
    var XIS = 0;

    distinct.forEach(function(bookCode){

    });


    var discount = getDiscount();
   
    return value;
};

Basket.prototype.addBook = function(bookCode) {
    this.bookCodes.push(bookCode);
};

function getDiscount (distinctBooksCount) {
    if (distinctBooksCount === 2) { return 0.95 };
    return 1;
}

exports.Basket = Basket;