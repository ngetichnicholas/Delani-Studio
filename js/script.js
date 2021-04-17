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

  if (userName.length === 0 ) {
    alert("Enter your name before submitting!");
    throw new Error;  //Abort javascript execution from here
  }
  else if (userEmail.length === 0) {
    alert("Enter your email address before submitting!");
    throw new Error;  //Abort javascript execution from here
  }
  else if (userMessage.length === 0) {
    alert("Enter your message or comment before submitting!");
    throw new Error;  //Abort javascript execution from here
  }
  else {
    alert("Hello " +userName +", we have received your message. Thank you for reaching out to us.")
  }
  let form = document.getElementsByName("message-form")[0]; 
  form.reset();  // Clear form fields
  return false; // Prevent page refresh 
}