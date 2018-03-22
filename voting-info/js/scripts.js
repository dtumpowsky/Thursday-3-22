$(document).ready(function() {

  var age = parseInt(prompt("what is your age?"));
  console.log(age);

  if (age < 18) {
    $("#tooYoung").show();
  } else {
    $("#oldEnough").show();
  }

});
