/* Select specific html tags to insert dynamic content into */
var questionsEl1 = document.querySelector("#questions");
var choiceEl1 = document.querySelector("#choices");
var messageEl1 = document.querySelector("#message");
var headerEl1 = document.querySelector("#header");
var timeEl1 = document.querySelector("#time");

/* Initialize time limit */
time_limit = 100;

/* Initialize array index for coding quesitons*/
idx = 0;

/* Create h1 tag and associated text */
h1_text = document.createElement("h1");
h1_text.textContent = "JavaScript Coding Challenge";
headerEl1.appendChild(h1_text);

/* Create p tag and add text to it */
p1_text = document.createElement("p");
p1_text.textContent = "Try to answer the following code related questions within the time limit.\
                       Keep in mind that incorrect answers will be penalize your score/time by ten seconds!";
headerEl1.appendChild(p1_text);

/* Create button to start coding quiz */
start_button = document.createElement("button");
start_button.textContent = "Start Quiz";
start_button.setAttribute("id", "start-quiz");
headerEl1.appendChild(start_button);


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
correct_answer = [";", "0", "datatype", "iterate", "increment",
                  "decrement", "less than", "greater than", "declare a variable",
                  "length"];

/* Define list of wrong choices to coding questions */
wrong_choices = [
                 ["}", ";", "[", "?"],
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

function start_quiz() {
   
    /* This function loops through each question and choices and displays it on 
    on the page */

    /* Create html elements */
    OrderedListEl1 = document.createElement("ul");
    listEl1 = document.createElement("li");
    listEl2 = document.createElement("li");
    listEl3 = document.createElement("li");
    listEl4 = document.createElement("li");
    
    for (var i=0; i < questions.lenth; i++) {
          
    }
    
}

start_button.addEventListener("click", start_quiz);