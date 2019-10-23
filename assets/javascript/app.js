    $(document).ready(function () {
        // $(‘#’).hide();
       
// variables for initial time, and question count
var questionCount = 0;
var timer = 25;
// End game results and counters right and wrong
var correct = 0;
var incorrect = 0;


//Still need to create functions to start the game on button click.
// I would like the game to display the list of questions then give you a timer to choose the correct answer.



// question and answer array
var questions = [
    {// question 1
        questions: "What is the name of the ship in the picture?",
        choices: ["The Slaver", "Slave I", "Millennium Falcon", "X-Wing"],
        correctA: "Slave I"
        
    },
    {//question 2
        questions: "Who was the leader of the Empire?",
        choices: ["Darth Vader", "Leia Organa", "Grand Moff Tarkin", "Sheev Palpatine"],
        correctA: "Sheev Palpatine",
        
    },
    {//question 3
        questions: "Which was the second Star Wars film?",
        choices: ["A New Hope", "A Phantom Menace", "Empire Strikes Back", "Rise of Skywalker"],
        correctA: "Empire Strikes Back",
        
    },
    {//question 4
        questions: "Which order brought about the death of the Jedi?",
        choices: ["Order 55", "Order 66", "Order 33", "Order a burger"],
        correctA: "Order 66",
        
    },
    ]
    
    $("#Start").on("click", function() {
        for (i = 0; i < questions.length; i++) {
           var questionHtml = buildQuestion(questions[i])
            $("#gameUi").append(questionHtml)
          }
          $("#Start").hide();
    }) 
    
    function buildQuestion(question) {
        var questionContainer = $("<div></div>")
        questionContainer.append(`<div class="">${question.questions}</div>`)
        for (i = 0; i < question.choices.length; i++) {
            var choicesHtml = $(`<div >${question.choices[i]}</div>`)
            if (question.choices[i] === question.correctA) {
                choicesHtml.attr("correct", true)
            }
            questionContainer.append(choicesHtml)
        }
        return questionContainer
    }


});

//creating questions and question count


 
    

  

