// Select specific html elements to insert dynamic content into
var contentEl1 = document.querySelector("#top");
var choicesEl1 = document.querySelector("#middle");
var messageEl1 = document.querySelector("#bottom");
var timeEl1 = document.querySelector("#time");

// Initialize time limit
var time_limit = 100;

var timer = null;

// Initialize array index for coding quesitons
var idx = 0;

//Create <h1> element and associated text
var h1_text = document.createElement("h1");
h1_text.textContent = "JavaScript Coding Challenge";
contentEl1 .appendChild(h1_text);

// Create <p> element and add text to it
var p1_text = document.createElement("p");
p1_text.textContent = "Try to answer the following code related questions within the time limit.\
                       Keep in mind that incorrect answers will be penalize your score/time by ten seconds!";
contentEl1.appendChild(p1_text);

// Create button to start coding quiz
var start_button = document.createElement("button");
start_button.textContent = "Start Quiz";
start_button.setAttribute("id", "start-quiz");
contentEl1.appendChild(start_button);


// initialize the quiz timer
timeEl1.textContent = time_limit;

// Define list of questions to present to the user
var questions = [
                  "Statements should end with a ____.",
                  "Array indices start at  ____.",
                  "A number is a ____ in Javascript.",
                  "A for loop is used to ____ through a collection.",
                  "++ is known as the  ____ operator.",
                  "-- is known as the ____ operator.",
                  "< is known as the ____ sign.",
                  "> is know as the ____ sign.",
                  "The var keyword is used to ___?",
                  "Which property is used to determine the size of an array?"
                ];

// Define list of answers to coding questions         
var correct_answers = [
                        "semi-colon", "0", "datatype", "iterate", "increment",
                        "decrement", "less than", "greater than", "declare a variable",
                        "length"
                      ];

// Define list of choices to coding questions
var choices = [
                ["curly brace", "semi-colon", "bracket", "question mark"],
                ["1", "0", "-1", "@"],
                ["datatype", "variable", "descriptor", "entity"],
                ["iterate", "remove", "save", "parse"],
                ["increment", "decrement", "subtract", "addition"],
                ["decrement", "subtration", "minus", "takeaway"],
                ["less than", "greater than", "add-on", "stop"],
                ["greater than", "less than", "peace", "yield"],
                ["declare a variable", "index an array", "define object key", "return a value"],
                ["size", "count", "num", "length"]
              ];

var clear_message = function () {
  messageEl1.textContent = "";
}

var check_selected_choice = function (e) {
  

    
    selected_choice = e.target.textContent.split(".")[1].trim();
    console.log(selected_choice);
    if (selected_choice === correct_answers[idx]){
      messageEl1.textContent = "CORRECT!";
    } else {
      messageEl1.textContent = "WRONG!";
    }

    idx++;
    buttonEl1.removeEventListener("click", check_selected_choice); 
    buttonEl2.removeEventListener("click", check_selected_choice);
    buttonEl3.removeEventListener("click", check_selected_choice);
    buttonEl4.removeEventListener("click", check_selected_choice);

    window.setTimeout( () => {
      show_question_and_choices();
      clear_message();
    }, 3000);

}


var display_results = function () {
    return;
}

var show_question_and_choices = function () {
   
    /* 
       This function loops through each question 
       and choices and displays it on the page. 
    */

// Create <button> elements
buttonEl1 = document.createElement("button");
buttonEl2 = document.createElement("button");
buttonEl3 = document.createElement("button");
buttonEl4 = document.createElement("button");

// Create <p> elements
var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var p4 = document.createElement("p");

// Select html element
if (idx < questions.length) {

    var question = questions[idx];    // Get next question
    var p0 = document.createElement("p");
    var choice = choices[idx];      // Get choices 

    contentEl1.textContent = "";
    choicesEl1.innerHTML = "";

    // Add question into <p> element
    p0.textContent =`${idx + 1}` + ". "  + question;

    //Add <p> element to page
    contentEl1.appendChild(p0);


    // Set choices as content for each <button> element
    buttonEl1.textContent = "1.   " + choice[3];
    buttonEl2.textContent = "2.   " + choice[2];
    buttonEl3.textContent = "3.   " + choice[1];
    buttonEl4.textContent = "4.   " + choice[0];

    // Add each button to a <p> element
    p1.appendChild(buttonEl1);
    p2.appendChild(buttonEl2);
    p3.appendChild(buttonEl3);
    p4.appendChild(buttonEl4);

    // Add <p> elements to div
    choicesEl1.appendChild(p1);
    choicesEl1.appendChild(p2);
    choicesEl1.appendChild(p3);
    choicesEl1.appendChild(p4);

    // Invoke check_selected_choice function when one of the choices is clicked
    buttonEl1.addEventListener("click", check_selected_choice);
    buttonEl2.addEventListener("click", check_selected_choice);
    buttonEl3.addEventListener("click", check_selected_choice);
    buttonEl4.addEventListener("click", check_selected_choice);

    
  } else {
   
    display_results();

  }

}

 var decrement_timer = function () {
 
  /*
   This function decrements the timer for the quiz
  */

  if (parseInt(time_limit) < 1 ) {
    window.clearInterval(timer);
  } else {
    time_limit--;
    timeEl1.textContent = time_limit;
 }
}


// Invoke start_quiz function when the start_quiz button is clicked
start_button.addEventListener("click", function() {
  show_question_and_choices();
  timer = window.setInterval(decrement_timer, 1000);
});


