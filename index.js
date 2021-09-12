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
  $("#portfolio-img").hover(function(){
    $("#work1").css("opacity", "0.5");
    $("#hidden1").show();
  });
  $("#firebase-img").hover(function(){
    $("#work2").css("opacity", "0.5",);
    $("#hidden2").toggle();
  });
  $("#security-img").hover(function(){
    $("#work3").css("opacity", "0.5");
    $("#hidden3").toggle();
  });
  $("#app-img").hover(function(){
    $("#work4").css("opacity", "0.5");
    $("#hidden4").toggle();
  });
  $("#admin-img").hover(function(){
    $("#work5").css("opacity", "0.5");
    $("#hidden5").toggle();
  });
  $("#blog-img").hover(function(){
    $("#work6").css("opacity", "0.5");
    $("#hidden6").toggle();
  });
  $("#bar-img").hover(function(){
    $("#work7").css("opacity", "0.5");
    $("#hidden7").toggle();
  });
  $("#resturant-img").hover(function(){
    $("#work8").css("opacity", "0.5");
    $("#hidden8").toggle();
  });
  $("#portfolio-img").hover(function(){
    $("#work1").css("opacity", "0.5");
    $("#hidden1").toggle();
  })
})