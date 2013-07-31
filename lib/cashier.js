var ArrayHelper = require('../lib/arrayhelper').ArrayHelper;

var Cashier = function () {
    this.bookCodes = [];
}

function getDistinctBooksFromCashier(Cashier) {
    var distinct = [];

    Cashier.forEach(function(bookCode){
        if(distinct.indexOf(bookCode) === -1)
            distinct.push(bookCode);
    });
    return distinct;
}

Cashier.prototype.getTotalPrice = function() {
    var total = 0;
    var booksToBeProcessed = this.bookCodes.slice(0);
    var helper = new ArrayHelper();
    while (booksToBeProcessed.length > 0) {
        var distinct = helper.distinct(booksToBeProcessed);
        total += distinct.length * 40 * getDiscount(distinct.length);
        booksToBeProcessed = helper.subtract(booksToBeProcessed, distinct);
    }  
    return total;
};

Cashier.prototype.addBook = function(bookCode) {
    this.bookCodes.push(bookCode);
};

function getDiscount (distinctBooksCount) {
    switch (distinctBooksCount) {
        case 2:
            return 0.95;
        case 3:
            return 0.9;
        case 4:
            return 0.8;
        case 5:
            return 0.75;
        default:
            return 1;
    }
}

exports.Cashier = Cashier;