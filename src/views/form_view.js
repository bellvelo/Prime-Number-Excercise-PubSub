const PubSub = require('../helpers/pub_sub.js')
const FormView = function(){
};

// TAKES INPUT //
FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
// PUBLISHES OUTPUT TO NUMBER_PRIMER //
  PubSub.publish('FormView:number-submitted', inputtedNumber)
  // console.log("Hello from the form");
  })
};

module.exports = FormView;
