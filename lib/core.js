var Basket = function () {
  this.bookCodes = [];
};

var bookPrice = 40;
var discountsByCollection = {
  2: 0.95 ,
  3: 0.80 ,
  4: 0.75 
};

function organizeGroupBooksToDiscount(basket) {
  var groups = [];

  function getGroupAvailable (bookCode) {
    for (var i = groups.length - 1; i >= 0; i--) {
      if(groups[i].indexOf(bookCode) === -1) {
        return groups[i];
      }
    };

    return groups.push([]) && groups[groups.length - 1];
  };

  basket.forEach(function(bookCode){
    getGroupAvailable(bookCode).push(bookCode);
  });

  return groups;
};

function sumDiscount (groupsDiscount) {
  var discount = 0;

  groupsDiscount.forEach(function (group) {
    discount += getDiscount(group) * (bookPrice * group.length);
  });

  return discount;
}

function getDiscount (groupDiscount) {
  return discountsByCollection[groupDiscount.length] || 1;
}

Basket.prototype.getTotalPrice = function() {
  if(this.bookCodes.length === 0) { return 0 };
  return sumDiscount(organizeGroupBooksToDiscount(this.bookCodes));
};

Basket.prototype.addBook = function(bookCode) {
  this.bookCodes.push(bookCode);
};

exports.Basket = Basket;