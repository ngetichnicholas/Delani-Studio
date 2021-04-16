$(document).ready(function() {
  $("button#light").hide();
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("button#dark").show();
    $("button#light").hide();
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("footer,.header").addClass("dark-theme");
    $("button#dark").hide();
    $("button#light").show();
  });
});