//Document ready funcition to load Javascript before anything else (html/images/etc)
$(document).ready(function() {
    //Setting variables for the Scores and Counter
    var correct = 0;
    var wrong = 0;
    //Declaing variable to generate "<p>" element dynamically (where the timer will be placed within HTML)
    var timer = $("<p></p>");
    //Setting how many seconds on countdown timer
    var countdown = 40;
    //Defining the variable "answers" which contains an array list of all the correct ':checked' (name) answers for each question
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
  //Setting event for "#reset" button - refresh page on click
  $("#reset").on("click", function (){
    location.reload(); // *Found "location.reload ();" from (https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button)
    })
  //When the player clicks on "begin" button
  //Reveal the question form and slide it down from the top div (#banner)
  $("#begin").click( function(){ 
    //Log "answers" array into console - for user to find the correct answers
    console.log (answers);
  $("#questionForm").slideDown(); // *Found ".slideDown()" from (https://www.w3schools.com/jquery/eff_slidedown.asp)
    //Setting an Interval function that will serve as a counter countdown
    setInterval(function() {
      //Setting value to the "countdown" variable
      countdown--;   
        //Placing counter to the div id "banner" within the HTML and attaching the variable "timer" to it
        $('#banner').append(timer);
        //Setting to insert the variable "countdown" within the <p> tag in the html
        $("p").html("<b>" + "Countdown: " + countdown + "</b>");
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
              //Set timer
              }; }, 900); 
    });
  //Declaring variable that serves a function to check through all the values in every question - to find the value of ":checked" buttons
  var correctAnswers = function(){
    //Check through all the "name / value" for each question and compare it with the variable "answers" array list
    $.each(answers, function(name, value) {
  // *Found function from (https://stackoverflow.com/questions/596351/how-can-i-know-which-radio-button-is-selected-via-jquery)
      //Setting an "if" condition - if the value of the checked button is equal to the "value" of the button
      if($('input:radio[name="' + name + '"]:checked').val() === value){ //value is defined in the <li> button tag in html
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