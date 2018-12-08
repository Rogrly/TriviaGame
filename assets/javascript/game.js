//Document ready funcition to load Javascript before anything else (html/images/etc)
$(document).ready(function() {
  //Setting variables for the Scores and Counter
    var correct = 0;
    var wrong = 0;
    //A variable boolean - the function is running value is true otherwise it is false
    var isRunning = false;
    //Declaing variable to generate "<p>" element dynamically
    var timer = $("<p></p>");
    var countdown = 40;
    //Defining the variable "answers" which contains an array list of all the correct ':checked' answers for each question
    var answers = {
      question1: "blacksabbath",
      question2: "deeppurple",
      question3: "false",
      question4: "dio",
      question5: "ozzy",
      question6: "nirvana",
      question7: "hendrix",
      question8: "bruce",
      question9: "sublime",
      question10: "ramones",
      question11: "pinkfloyd",
      question12: "wutangclan",
    }
      //Hides the score board from showing
      $("#scores").hide();
      //Hides the question form box
      $("#questionForm").hide();  
  //When the player clicks on "begin" button
  //Reveal the question form and slide it down from the top div
  $("#begin").click( function(){ 
  $("#questionForm").slideDown();
    //Setting an Interval function that will serve as a counter countdown
    setInterval(function() {
      //Setting value to the "countdown" variable
      countdown--;   
        //Placing counter to the div id "banner" within the HTML and attaching the variable "timer" to it
        $('#banner').append(timer);
        //Setting to insert the variable "countdown" within the <p> tag in the html
        $("p").html("<b>" + "Countdown: " + countdown + "</b>");
        //Adding a class to the <p> tag - so it can hold css style attributes
        $("p").addClass("counter");
          //Declaing an "if" condition / if "countdown" variable is equal to 0 value
          if (countdown === 0) {
            //Execute the "correctAnswers" function
            correctAnswers();
            //Hide the question form
            $("#questionForm").hide();
            //Display and reveal the Scores
            $("#scores").show();
            //Clearing the interval of "countdown" variable
            clearInterval(countdown);
              //Setting the time length
              }; }, 1000); 
    });
    //Declaring variable that serves a function to check through all the values in every question - to find the value of ":checked" buttons
      var correctAnswers = function(){
        //Check through all the "name / value" for each question and compare it with the variable "answers" array list
        $.each(answers, function(name, value) {
          //Setting an "if" condition - if the value of the checked button is equal to the "value" of the button
          if($('input:radio[name="' + name + '"]:checked').val() === value){ //value is found in the button <li> tag in html
            //Add an incremental value to the variable "correct"
            correct++;
            } 
          //Else if the value of the checked button is not equal - add incremental value to the variable "wrong"
          else{
            wrong++;                  
            }
              //Hide the display for the count down timer
              $("p").hide();
              //Implement and project the score board "Correct / Wrong" into the div id "scores" within the html
              $('#scores').html(" Correct: " + correct + "<br>");  
              $('#scores').append(" Wrong: " + wrong); 
            });
          }
  });
       
  