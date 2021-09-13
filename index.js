$(document).ready(function(){
  $("#hidden_show1").click(function(){
    $(".show1").toggle();
    $(".hide1").toggle();
  });
  $("#hidden_show2").click(function(){
    $(".show2").toggle();
    $(".hide2").toggle();
  });
  $("#hidden_show3").click(function(){
    $(".show3").toggle();
    $(".hide3").toggle();
  });
  $("#portfolio-img").mouseenter(function(){
    $("#work1").css("opacity", "0.5");
    $("#hidden1").show();
  }).mouseleave(function(){
    $("#work1").css("opacity", "0.8");
    $("#hidden1").hide();
  });
  $("#firebase-img").mouseenter(function(){
    $("#work2").css("opacity", "0.5");
    $("#hidden2").toggle();
  }).mouseleave(function(){
    $("#work2").css("opacity", "0.8");
    $("#hidden2").hide();
  });
  $("#security-img").mouseenter(function(){
    $("#work3").css("opacity", "0.5");
    $("#hidden3").toggle();
  }).mouseleave(function(){
    $("#work3").css("opacity", "1");
    $("#hidden3").hide();
  });
  $("#app-img").mouseenter(function(){
    $("#work4").css("opacity", "0.5");
    $("#hidden4").toggle();
  }).mouseleave(function(){
    $("#work4").css("opacity", "0.8");
    $("#hidden4").hide();
  });
  $("#admin-img").mouseenter(function(){
    $("#work5").css("opacity", "0.5");
    $("#hidden5").toggle();
  }).mouseleave(function(){
    $("#work5").css("opacity", "0.8");
    $("#hidden5").hide();
  });
  $("#blog-img").mouseenter(function(){
    $("#work6").css("opacity", "0.5");
    $("#hidden6").toggle();
  }).mouseleave(function(){
    $("#work6").css("opacity", "0.8");
    $("#hidden6").hide();
  });
  $("#bar-img").mouseenter(function(){
    $("#work7").css("opacity", "0.5");
    $("#hidden7").toggle();
  }).mouseleave(function(){
    $("#work7").css("opacity", "0.8");
    $("#hidden7").hide();
  });;
  $("#resturant-img").mouseenter(function(){
    $("#work8").css("opacity", "0.5");
    $("#hidden8").toggle();
  }).mouseleave(function(){
    $("#work8").css("opacity", "0.8");
    $("#hidden8").hide();
  }); 

  $('#mc-embedded-subscribe').click(function(){go(50)});
  $('#ok').click(function(){go(500)});

//setTimeout(function(){go(50)},700);
//setTimeout(function(){go(500)},2000);

function go(nr) {
  $('.message').toggleClass('comein');
  $('.check').toggleClass('scaledown');
  $('#go').fadeToggle(nr);
 
}
})
