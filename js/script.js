$(document).ready(function() {  
  $(".icon").click(function(){
    $(this).toggle();
    $(this).siblings().toggle();
  });
  $(".info").click(function(){
    $(this).siblings().toggle();
    $(this).toggle();
  });
});