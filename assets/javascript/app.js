$(document).ready(function() {

// variables for initial time, and question count
var questionCount = 0;
var timer = 25;
// End game results and counters right and wrong
var correct = 0;
var incorrect = 0;


//Still need to create functions to start the game on button click.
//Need to create code for 

// question and answer array
var questions = [
    {// question 1
        question: "What is the name of the ship in the picture? ",
        choices: ["The Slaver", "Slave I", "Millennium Falcon", "X-Wing"],
        correctA: "Slave I",
        image: " "
    },
    {//question 2
        question: "Who was the leader of the Empire? ",
        choices: ["Darth Vader", "Leia Organa", "Grand Moff Tarkin", "Sheev Palpatine"],
        correctA: " ",
        image: " "
    },
    {//question 3
        question: "Which movie was the second Star Wars film? ",
        choices: ["A New Hope", "A Phantom Menace", "Empire Strikes Back", "Rise of Skywalker"],
        correctA: " ",
        image: " "
    },
    {//question 4
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
    {//question 5
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
    {//question 6
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
    {//question 7
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
    {//question 8
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
    {//question 9
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
    {//question 10
        question: " ",
        choices: [" "],
        correctA: " ",
        image: " "
    },
]
});

//creating questions and question count

function questionContent() {
    $("#gameUi").append("<p><strong>" +
        questions[questionsCount].question +
        //Confusing with double quotes on different elements, classes, and variables using single quotes.
        "</p><p class='choices'>" +
        questions[questionCount].choices[0] +
        "</p><p class='choices'>" + 
        questions[questionCount].choices[1] + 
        "</p><p class='choices'>" + 
        questions[questionCount].choices[2] +
        "</p><p class='choices'>" + 
        questions[questionCount].choices[3] + 
        "</strong></p>");
}
//<div class="jumbotron text-center" id="gameUi">
// This is to start the game using p-tags and how much time you have at start
function startGame() {
    $("#gameUi").html("<p>You have <span id='time'>" + time + "</span> Second left!</p>");
    $("#start")    
}
