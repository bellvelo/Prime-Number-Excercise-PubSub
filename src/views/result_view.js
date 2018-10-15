const PubSub = require('../helpers/pub_sub.js')
const PrimeChecker = require('../models/number_prime.js')

const ResultView = function(){
};
// SUBSCRIBE TO NUMBER_PRIMER //
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:number-checked', (event) => {
    const numberPrime = event.detail;
    this.displayResult(numberPrime);
    // console.log("hello from the results page");
  })

};
// DISPLAY THE RESULT //
ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = this.resultText(result);
};
ResultView.prototype.resultText = function (result) {
  if (result === true) {
    return `Dude!, that number is so primo!`;
  } else {
    return `Nope, that is not a prime number`;
  }
};


module.exports = ResultView;
