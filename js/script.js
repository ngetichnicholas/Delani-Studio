$(document).ready(function() {  
  $(".icon").click(function(){
    $(this).toggle();
    $(this).siblings().toggle();
  });
  $(".info").click(function(){
    $(this).siblings().toggle();
    $(this).toggle();
  });
  $(".portfolio").hover(
    function () {
      $(this).addClass("box-hover");
      $(this).children(".name").show();
    },
    function () {
      $(this).removeClass("box-hover");
      $(this).children(".name").hide();

    }
  );
});