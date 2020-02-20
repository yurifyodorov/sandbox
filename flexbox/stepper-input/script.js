var $stepperInput = $('.stepperInput input');

function incrementStepperInput(amount) {
  $stepperInput.val((parseInt($stepperInput.val()) || 0) + amount);
}

var stepperInputDecrement = $('.stepperInput button')[0];
$(stepperInputDecrement).click(() => {
  incrementStepperInput(-1);
});

var stepperInputIncrement = $('.stepperInput button')[1];
$(stepperInputIncrement).click(() => {
  incrementStepperInput(1);
});
