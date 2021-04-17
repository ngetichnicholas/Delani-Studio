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
      $(this).addClass("fade-portfolio-image");
      $(this).children(".name").show();
    },
    function () {
      $(this).removeClass("fade-portfolio-image");
      $(this).children(".name").hide();

    }
  );
});