function ArrayHelper() {
}

ArrayHelper.prototype.distinct = function(original) {
	var distinct = [];
	original.forEach(function(x) {
		if (distinct.indexOf(x) < 0) {
			distinct.push(x);
		}		
	});
   return distinct;
};

ArrayHelper.prototype.subtract = function(original, other) {
	var clone = this.clone(original);
	other.forEach(function(item){
		var idx = clone.indexOf(item);
		if (idx > -1) {
			 clone.splice(idx, 1);
		}				
	});
	return clone;
};

ArrayHelper.prototype.clone = function(original) {
	return original.slice(0);	
};

exports.ArrayHelper = ArrayHelper;