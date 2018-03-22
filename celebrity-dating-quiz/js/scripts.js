$(document).ready(function() {

  $(".btn").click(function(event) {


  var age = $("#age").val();

  var sex = $("#preference").val();


  var interests = $("#interests").val()



  if (age < 18) {
    $(".invalid-feedback").show();
  }


  if (sex == 'female' && interests == 'outdoors'){
    $(".female").hide();
    $(".outdoors").show();


  }

  if (sex == 'male' && interests == 'outdoors'){
      $(".male").hide();
      $(".outdoors").show();

  }

  if (sex == 'female' && interests == 'video-games'){
    $(".female").hide();
    $(".video-games").show();

  }

  if (sex == 'male' && interests == 'video-games'){
    $(".male").hide();
    $(".video-games").show();

  }

  if (sex == 'female' && interests == 'science'){
    $(".female").hide();
    $(".science").show();

  }

  if (sex == 'male' && interests == 'science'){
    $(".male").hide();
    $(".science").show();

  }

  if (sex == 'female' && interests == 'art'){
    $(".female").hide();
    $(".art").show();

  }

  if (sex == 'male' && interests == 'art'){
    $(".male").hide();
    $(".art").show();

  }



/*  if (sex == 'female' && interests == 'outdoors'){
    console.log(sex+","+interests);
    $(".female").hide();
    $(".male .outdoors").show();*/





    console.log("hello");
  }



  });


});
