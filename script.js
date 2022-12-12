/* Select specific html tags to insert dynamic content into */
var contentEl1 = document.querySelector("#top");
var choicesEl1 = document.querySelector("#middle");
var messageEl1 = document.querySelector("#bottom");
var timeEl1 = document.querySelector("#time");

/* Initialize time limit */
time_limit = 100;

/* Initialize array index for coding quesitons*/
idx = 0;

/* Create h1 tag and associated text */
h1_text = document.createElement("h1");
h1_text.textContent = "JavaScript Coding Challenge";
contentEl1 .appendChild(h1_text);

/* Create p tag and add text to it */
p1_text = document.createElement("p");
p1_text.textContent = "Try to answer the following code related questions within the time limit.\
                       Keep in mind that incorrect answers will be penalize your score/time by ten seconds!";
contentEl1.appendChild(p1_text);

/* Create button to start coding quiz */
start_button = document.createElement("button");
start_button.textContent = "Start Quiz";
start_button.setAttribute("id", "start-quiz");
contentEl1.appendChild(start_button);


/* Set the quiz timer */
timeEl1.textContent = time_limit;

/* Define list of questions to present to the user */
questions = ["Statements should end with a ____.",
             "Array indices start at  ____.",
             "A number is a ____ in Javascript.",
             "A for loop is used to ____ through a collection.",
             "++ is known as the  ____ operator.",
             "-- is known as the ____ operator.",
             "< is known as the ____ sign.",
             "> is know as the ____ sign.",
             "The var keyword is used to ___?",
             "Which property is used to determine the size of an array?"];

/* Define list of answers to coding questions */             
correct_answers = [";", "0", "datatype", "iterate", "increment",
                  "decrement", "less than", "greater than", "declare a variable",
                  "length"];

/* Define list of wrong choices to coding questions */
     choices = [
                 ["curly brace", "semi-colon", "bracket", "question mark"],
                 ["1", "0", "-1", "@"],
                 ["datatype", "variable", "descriptor", "entity"],
                 ["iterate", "remove", "save", "parse"],
                 ["increment", "decrement", "subtract", "addition"],
                 ["decrement", "subtration", "minus", "takeaway"],
                 ["less than", "greater than", "add-on", "stop"],
                 ["greater than", "less than", "peace", "yield"],
                 ["declare a variable", "index an array", "select a key in an object", "return a value"],
                 ["size", "count", "num", "length"]
                ];

/* Create html elements */
buttonEl1 = document.createElement("button");
buttonEl2 = document.createElement("button");
buttonEl3 = document.createElement("button");
buttonEl4 = document.createElement("button");



function increment_index() {
    idx++;
    start_quiz();
}

function start_quiz() {
   
    /* 
       This function loops through each question 
       and choices and displays it on the page. 
    */


p0 = document.createElement("p");

/* Select html element */

var question = questions[idx];
p0.textContent = question;

contentEl1.textContent = "";
choicesEl1.innerHTML = "";
contentEl1.appendChild(p0);



/* Get choices */
var choice = choices[idx];

/* Set choices as content for list items */
buttonEl1.textContent = "1.   " + choice[3];
buttonEl2.textContent = "2.   " + choice[2];
buttonEl3.textContent = "3.   " + choice[1];
buttonEl4.textContent = "4.   " + choice[0];

/* Create p tag and add elements to it */
p1 = document.createElement("p");
p2 = document.createElement("p");
p3 = document.createElement("p");
p4 = document.createElement("p");


p1.appendChild(buttonEl1);
p2.appendChild(buttonEl2);
p3.appendChild(buttonEl3);
p4.appendChild(buttonEl4);

choicesEl1.appendChild(p1);
choicesEl1.appendChild(p2);
choicesEl1.appendChild(p3);
choicesEl1.appendChild(p4);

}


start_button.addEventListener("click", start_quiz);
buttonEl1.addEventListener("click", increment_index);
buttonEl2.addEventListener("click", increment_index);
buttonEl3.addEventListener("click", increment_index);
buttonEl4.addEventListener("click", increment_index);