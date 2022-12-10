/* Select specific html tags to insert dynamic content into */
var contentEl1 = document.querySelector("#header");
var timeEl1 = document.querySelector("#time");

/* Initialize time limit */
time_limit = 100;


/* Create h1 tag and associated text */
h1_text = document.createElement("h1");
h1_text.textContent = "JavaScript Coding Challenge";
contentEl1 .appendChild(h1_text);

/* Create p tag and add text to it */
p1_text = document.createElement("p");
p1_text.textContent = "Try to answer the following code related questions within the time limit.\
                       Keep in mind that incorrect answers will be penalize your score/time by ten seconds!";
contentEl1 .appendChild(p1_text);

/* Create button to start coding quiz */
start_button = document.createElement("button");
start_button.textContent = "Start Quiz";
start_button.setAttribute("id", "start-quiz");
contentEl1 .appendChild(start_button);


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
   
    /* 
       This function loops through each question 
       and choices and displays it on the page. 
    */

/* Initialize array index for coding quesitons*/
idx = 0;

/* Select html element */
var contentEl1 = document.querySelector("#header");
var question = questions[idx];
contentEl1.textContent = question;

/* Create html elements */
OrderedListEl1 = document.createElement("ol");
listEl1 = document.createElement("li");
listEl2 = document.createElement("li");
listEl3 = document.createElement("li");
listEl4 = document.createElement("li");

/* Get choices */
var choice = choices[idx];

/* Set choices as content for list items */
listEl1.textContent = choice[3];
listEl2.textContent = choice[2];
listEl3.textContent = choice[0];
listEl4.textContent = choice[1];

/* Add list items to ordered list */
OrderedListEl1.appendChild(listEl1);
OrderedListEl1.appendChild(listEl2);
OrderedListEl1.appendChild(listEl3);
OrderedListEl1.appendChild(listEl4);

contentEl1.appendChild(OrderedListEl1);

}


start_button.addEventListener("click", start_quiz);