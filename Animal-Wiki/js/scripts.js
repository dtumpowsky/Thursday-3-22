$(document).ready(function() {
/*
  $("#turtle").click(function() {
    $("#turtleFacts").show();
    $("#sharkFacts").hide();
    $("#bearFacts").hide();
    console.log(this.id);
  });

  $("#bear").click(function() {
    $("#bearFacts").show();
    $("#sharkFacts").hide();
    $("#turtleFacts").hide();
    console.log(this.id);
  });

  $("#shark").click(function() {
    $("#sharkFacts").show();
    $("#turtleFacts").hide();
    $("#bearFacts").hide();
    console.log(this.id);
  });





    $("img").click(function() {
      console.log(this.id);
      if (this.id === "turtle") {
      $("#turtleFacts").show();
      $("#sharkFacts").hide();
      $("#bearFacts").hide();
      console.log("this class"+this.class);
    }

      if (this.id === "bear") {
      $("#bearFacts").show();
      $("#sharkFacts").hide();
      $("#turtleFacts").hide();
      console.log("this class"+this.class);
    }

      if (this.id === "shark") {
      $("#sharkFacts").show();
      $("#turtleFacts").hide();
      $("#bearFacts").hide();
      console.log("this class"+this.class);
    }

  });
*/
  $("img").click(function() {
console.log(this.id);
    $(".animalFacts").hide()
    if (true) {
      $("#turtleFacts").show();
    } else if ("#bear" === true) {
      $("#bearFacts").show();
    } else {
      $("#sharkFacts").show();
    }
  });


  $("img").click(function() {
    $(".animalFacts").hide();
    $("#"+this.id+"Facts").show();
  });



});
