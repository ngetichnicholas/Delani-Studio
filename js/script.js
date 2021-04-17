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
function message() {
  let userName = document.getElementById("name").value;
  let userEmail =document.getElementById("email").value;
  let userMessage =document.getElementById("text-message").value;

  if (userName.lenght === 0 ) {
    alert("Enter your name before submitting!");
  }
  else if (userMessage.lenght === 0) {
    alert("Enter your email address before submitting!");
  }
  else if (userMessage.lenght === 0) {
    alert("Enter your message or comment before submitting!");
  }
  else {
    alert("Hello " +userName +", we have received your message. Thank you for reaching out to us.")
  }
}