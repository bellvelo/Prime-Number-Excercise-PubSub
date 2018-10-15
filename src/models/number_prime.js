const PubSub = require('../helpers/pub_sub.js')

const PrimeChecker = function(){
};

PrimeChecker.prototype.bindEvents = function () {
// SUBSCRIBES TO FORM VIEW //
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail; // the detail is the payload.
    const result = this.numberIsPrime(inputtedNumber);
// PUBLISH TO RESULTS VIEW //
  PubSub.publish('PrimeChecker:number-checked', result);
  // console.log("hello from the primechecker");
});
};

// CHECK IF NUMBER IS PRIME //
PrimeChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false
    }
  }
  return true
};

module.exports = PrimeChecker;
