    $(document).ready(function () {
        // $(‘#’).hide();
       
// // variables for initial time, and question count
// var questionCount = 0;
// var timer = 25;
// // End game results and counters right and wrong
// var correct = 0;
// var incorrect = 0;


//Still need to create functions to start the game on button click.
// I would like the game to display the list of questions then give you a timer to choose the correct answer.


//creating questions and question count
// question and answer array
let questions = [
    {// question 1
        questions: "What is the name of the Boba Fett's Ship?",
        C0: "<h4><button class='btn'>The Slaver</button></h4>",
        C1: "<h4><button class='btn correct'>Slave I</button></h4>",
        C2: "<h4><button class='btn'>Millenium Falcon</button></h4>",
        C3: "<h4><button class='btn'>X-Wing</button></h4>",
        correctA: "Slave I"
        
    },
    {//question 2
        questions: "Who was the leader of the Empire?",
        C0: "<h4><button class='btn'>Darth Vader</button></h4>",
        C1: "<h4><button class='btn'>Leia Organa</button></h4>",
        C2: "<h4><button class='btn'>Grand Moff Tarkin</button></h4>",
        C3: "<h4><button class='btn correct'>XSheev Palpatine</button></h4>",
        correctA: "Sheev Palpatine"
        
    },
    {//question 3
        questions: "Which was the second Star Wars film?",
        C0: "<h4><button class='btn'>A New Hope</button></h4>",
        C1: "<h4><button class='btn'>A Phantom Menace</button></h4>",
        C2: "<h4><button class='btn correct'>Empire Strikes Back</button></h4>",
        C3: "<h4><button class='btn'>Rise of Skywalker</button></h4>",
        correctA: "Empire Strikes Back"
    },
    {//question 4
        questions: "Which order brought about the death of the Jedi?",
        C0: "<h4><button class='btn'>1</button></h4>",
        C1: "<h4><button class='btn'>10</button></h4>",
        C2: "<h4><button class='btn correct'>2</button></h4>",
        C3: "<h4><button class='btn'>6</button></h4>",
        correctA: "2"
    },
    {//question 5
        questions: "How many suns does Tatoonie have?",
        C0: "<h4><button class='btn'>Order 55</button></h4>",
        C1: "<h4><button class='btn correct'>Order 66</button></h4>",
        C2: "<h4><button class='btn'>Order 33</button></h4>",
        C3: "<h4><button class='btn'>Order a burger</button></h4>",
        correctA: "Order 66"
    },
    {//question 6
        questions: "What species is Jabba?",
        C0: "<h4><button class='btn'>Ithorian</button></h4>",
        C1: "<h4><button class='btn'>Jawa</button></h4>",
        C2: "<h4><button class='btn'>Jenet</button></h4>",
        C3: "<h4><button class='btn correct'>Hutt</button></h4>",
        correctA: "Hutt"
    },
    {//question 7
        questions: "Who played Princess Leia?",
        C0: "<h4><button class='btn'>Gillian Anderson</button></h4>",
        C1: "<h4><button class='btn'>Sigourney Weaver</button></h4>",
        C2: "<h4><button class='btn'>Linda Hamilton</button></h4>",
        C3: "<h4><button class='btn correct'>Carrie Fisher</button></h4>",
        correctA: "Carrie Fisher"
    },
    {//question 8
        questions: "Who are the only two characters who appear in every Star Wars movie?",
        C0: "<h4><button class='btn correct'>C-3PO and R2-D2</button></h4>",
        C1: "<h4><button class='btn'>Luke and Leia</button></h4>",
        C2: "<h4><button class='btn'>Han and Chewbacca</button></h4>",
        C3: "<h4><button class='btn'>Darth Vader and Emperor Palpatine</button></h4>",
        correctA: "C-3PO and R2-D2"
    },
    {//question 9
        questions: "On which planet do we first meet Rey in The Force Awakens?",
        C0: "<h4><button class='btn'>Farlax</button></h4>",
        C1: "<h4><button class='btn'>Tatoonie</button></h4>",
        C2: "<h4><button class='btn'>Dantooine</button></h4>",
        C3: "<h4><button class='btn correct'>Jakku</button></h4>",
        correctA: "Jakku"
    },
    {//question 10
        questions: "Who is Boba Fett’s father?",
        C0: "<h4><button class='btn'>Bongo Fett</button></h4>",
        C1: "<h4><button class='btn'>Dango Fett</button></h4>",
        C2: "<h4><button class='btn correct'>Jango Fett</button></h4>",
        C3: "<h4><button class='btn'>Django Fett</button></h4>",
        correctA: "Jango Fett"
    }
    ];


    //global variables
    let gameOver;
    let currentIndex;
    let correct;
    let incorrect;
    let alreadyAnswered;
    let startSong;
    let seconds;
    let intervalId;


    //start the game on button click.
    // $("#Start").on("click", function() {
    //     for (i = 0; i < questions.length; i++) {
    //        var questionHtml = buildQuestion(questions[i])
    //         $("#gameUi").append(questionHtml)
    //       }// hide start after onclick
    //       $("#Start").hide();
    // }) 
    
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




 
    

  

