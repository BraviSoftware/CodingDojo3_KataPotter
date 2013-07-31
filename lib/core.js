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
    var auxBookCodes = this.bookCodes.slice(0);
    var totalValue = 0;
    var discount = 0;
    
    while(distinct.length > 0) {
        totalValue += (40 * distinct.length) * getDiscount(distinct.length);
        auxBookCodes = auxBookCodes.remove(distinct);
        distinct = getDistinctBooksFromBasket(auxBookCodes);
    }
    return totalValue;
};

Basket.prototype.addBook = function(bookCode) {
    this.bookCodes.push(bookCode);
};

function getDiscount (distinctBooksCount) {
    //5, 10, 20, 25
    if (distinctBooksCount === 2) { return 0.95 }
    else if (distinctBooksCount === 3) { return 0.90 }
    else if (distinctBooksCount === 4) { return 0.80 }
    else if (distinctBooksCount >= 5) { return 0.75 }
    return 1;
}

Array.prototype.remove = function (array) {
    var me = this;
    array.forEach(function (item) {
        var indexOf = me.indexOf(item);
        if (indexOf !== -1) {
            me.splice(indexOf, 1);
        }
    });
    return me;
};

exports.Basket = Basket;