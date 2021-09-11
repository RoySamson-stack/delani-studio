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
    $("#portfolio-img").css("background-color", "white");
    $("#work1").toggle();
    $("#hidden1").toggle();
  });
  $("#firebase-img").hover(function(){
    $("#firebase-img").css("background-color", "white");
    $("#work2").toggle();
    $("#hidden2").toggle();
  });
  $("#security-img").hover(function(){
    $("#security-img").css("background-color", "white");
    $("#work3").toggle();
    $("#hidden3").toggle();
  });
  $("#app-img").hover(function(){
    $("#app-img").css("background-color", "white");
    $("#work4").toggle();
    $("#hidden4").toggle();
  });
  $("#admin-img").hover(function(){
    $("#admin-img").css("background-color", "white");
    $("#work5").toggle();
    $("#hidden5").toggle();
  });
  $("#blog-img").hover(function(){
    $("#blog-img").css("background-color", "white");
    $("#work6").toggle();
    $("#hidden6").toggle();
  });
  $("#bar-img").hover(function(){
    $("#bar-img").css("background-color", "white");
    $("#work7").toggle();
    $("#hidden7").toggle();
  });
  $("#resturant-img").hover(function(){
    $("#resturant-img").css("background-color", "white");
    $("#work8").toggle();
    $("#hidden8").toggle();
  });
  $("#portfolio-img").hover(function(){
    $("#portfolio-img").css("background-color", "white");
    $("#work1").toggle();
    $("#hidden1").toggle();
  })
})