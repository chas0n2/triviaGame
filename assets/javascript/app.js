    // $(document).ready(function () {
        // $(‘#’).hide();
       
// // letiables for initial time, and question count
// let questionCount = 0;
// let timer = 25;
// // End game results and counters right and wrong
// let correct = 0;
// let incorrect = 0;


//Still need to create functions to start the game on button click.
// I would like the game to display the list of questions then give you a timer to choose the correct answer.


//creating questions and question count
// question and answer array
let trivia = [
    {// question 1
        question: "What is the name of the Boba Fett's Ship?",
        answer0: "<h4><button class='btn'>The Slaver</button></h4>",
        answer1: "<h4><button class='btn correct'>Slave I</button></h4>",
        answer2: "<h4><button class='btn'>Millenium Falcon</button></h4>",
        answer3: "<h4><button class='btn'>X-Wing</button></h4>",
        correct: "Slave I"
        
    },
    {//question 2
        question: "Who was the leader of the Empire?",
        answer0: "<h4><button class='btn'>Darth Vader</button></h4>",
        answer1: "<h4><button class='btn'>Leia Organa</button></h4>",
        answer2: "<h4><button class='btn'>Grand Moff Tarkin</button></h4>",
        answer3: "<h4><button class='btn correct'>Sheev Palpatine</button></h4>",
        correct: "Sheev Palpatine"
        
    },
    {//question 3
        question: "Which was the second Star Wars film?",
        answer0: "<h4><button class='btn'>A New Hope</button></h4>",
        answer1: "<h4><button class='btn'>A Phantom Menace</button></h4>",
        answer2: "<h4><button class='btn correct'>Empire Strikes Back</button></h4>",
        answer3: "<h4><button class='btn'>Rise of Skywalker</button></h4>",
        correct: "Empire Strikes Back"
    },
    {//question 4
        question: "Which order brought about the death of the Jedi?",
        answer0: "<h4><button class='btn'>Order 55</button></h4>",
        answer1: "<h4><button class='btn'>Order Me Lunch</button></h4>",
        answer2: "<h4><button class='btn correct'>Order 66</button></h4>",
        answer3: "<h4><button class='btn'>Order 46</button></h4>",
        correct: "Order 66"
    },
    {//question 5
        question: "How many suns does Tatoonie have?",
        answer0: "<h4><button class='btn'>4</button></h4>",
        answer1: "<h4><button class='btn'>1</button></h4>",
        answer2: "<h4><button class='btn'>3</button></h4>",
        answer3: "<h4><button class='btn correct'>2</button></h4>",
        correct: "2"
    },
    {//question 6
        question: "What species is Jabba?",
        answer0: "<h4><button class='btn'>Ithorian</button></h4>",
        answer1: "<h4><button class='btn'>Jawa</button></h4>",
        answer2: "<h4><button class='btn'>Jenet</button></h4>",
        answer3: "<h4><button class='btn correct'>Hutt</button></h4>",
        correct: "Hutt"
    },
    {//question 7
        question: "Who played Princess Leia?",
        answer0: "<h4><button class='btn'>Gillian Anderson</button></h4>",
        answer1: "<h4><button class='btn'>Sigourney Weaver</button></h4>",
        answer2: "<h4><button class='btn'>Linda Hamilton</button></h4>",
        answer3: "<h4><button class='btn correct'>Carrie Fisher</button></h4>",
        correct: "Carrie Fisher"
    },
    {//question 8
        question: "Who are the only two characters who appear in every Star Wars movie?",
        answer0: "<h4><button class='btn correct'>C-3PO and R2-D2</button></h4>",
        answer1: "<h4><button class='btn'>Luke and Leia</button></h4>",
        answer2: "<h4><button class='btn'>Han and Chewbacca</button></h4>",
        answer3: "<h4><button class='btn'>Darth Vader and Emperor Palpatine</button></h4>",
        correct: "C-3PO and R2-D2"
    },
    {//question 9
        question: "On which planet do we first meet Rey in The Force Awakens?",
        answer0: "<h4><button class='btn'>Farlax</button></h4>",
        answer1: "<h4><button class='btn'>Tatoonie</button></h4>",
        answer2: "<h4><button class='btn'>Dantooine</button></h4>",
        answer3: "<h4><button class='btn correct'>Jakku</button></h4>",
        correct: "Jakku"
    },
    {//question 10
        question: "Who is Boba Fett’s father?",
        answer0: "<h4><button class='btn'>Bongo Fett</button></h4>",
        answer1: "<h4><button class='btn'>Dango Fett</button></h4>",
        answer2: "<h4><button class='btn correct'>Jango Fett</button></h4>",
        answer3: "<h4><button class='btn'>Django Fett</button></h4>",
        correct: "Jango Fett"
    }
    ];


    //global letiables
    let gameOver;
    let currentIndex;
    let correct;
    let incorrect;
    let alreadyAnswered;
    let seconds;
    let intervalId;
    let timerRunning = false;
    let interval;
    
    //unchanging variables
    const time = 10;
    const timerDiv = $('<div class="timer">');
    const questionDiv = $('<div class="question">');
    const answersDiv = $('<div class="answers">');
    const answerDiv = $('<div class="answer">');


    //start the game on button click.
    // $("#Start").on("click", function() {
    //     for (i = 0; i < questions.length; i++) {
    //        let questionHtml = buildQuestion(questions[i])
    //         $("#gameUi").append(questionHtml)
    //       }// hide start after onclick
    //       $("#Start").hide();
    // }) 

        // function buildQuestion(question) {
    //     let questionContainer = $("<div></div>")
    //     questionContainer.append(`<div class="">${question.questions}</div>`)
    //     for (i = 0; i < question.choices.length; i++) {
    //         let choicesHtml = $(`<div >${question.choices[i]}</div>`)
    //         if (question.choices[i] === question.correctA) {
    //             choicesHtml.attr("correct", true)
    //         }
    //         questionContainer.append(choicesHtml)
    //     }
    //     return questionContainer
    // }
    function startGame() {
        $(this).remove();

        init();
        console.log("Your first question awaits");

        askQuestions();
    }
    
    function init() {
        $('#game-content').empty();
        // $('#game-title').html("<strong>Star Wars Trivia!</strong>");

        $('#game-content').append(timerDiv);
        $('#game-content').append(questionDiv);
        $('#game-content').append(answersDiv);
        //global values
        gameOver = false;
        alreadyAnswered = false;
        currentIndex = 0;
        correct = 0;
        incorrect = 0;
        seconds = time;
    }

    function countDown() {
        seconds--;
        timerRunning = true;
        console.log("countDown");

        //timer
        let timeRemaining = $('<h3><strong>Time Remaining: ' + seconds + ' Seconds</strong></h3>');
        timerDiv.empty();
        timerDiv.append(timeRemaining);

        if (seconds <= 0) {
            timerDiv.empty();
            answersDiv.empty();
            $('#question').empty().append("You ran out of time... The correct answer is " + trivia[currentIndex].answer0);
            alreadyAnswered = true;
            clearInterval();
        }
    }

    function askQuestions() {

        //Check if game is over yet
        if (gameOver) {
            displayEnd();
        }
        else {
            //Get the current question and answer
            let currentQuestion = getCurrentQuestion();
            let correctAnswer = getCurrentCorrectAnswer();
            console.log(currentQuestion + " " + correctAnswer);
    
            // Clear any elements from previous questions
            $(answersDiv).empty();
            timerDiv.empty();
    
            //Display the timer
            seconds = time;
            let timeRemaining = $('<h3><strong>Time Remaining: ' + seconds + ' Seconds</strong></h3>');
            timerDiv.append(timeRemaining);
    
            //Display the current question
            questionDiv.empty().append('<h2><strong>' + currentQuestion);
    
            //Get the current answers
            $(answersDiv).append(trivia[currentIndex].answer0);
            $(answersDiv).append(trivia[currentIndex].answer1);
            $(answersDiv).append(trivia[currentIndex].answer2);
            $(answersDiv).append(trivia[currentIndex].answer3);
    
            intervalId = setInterval(countDown, 1000);
    
            // THe user clicked on an answer...
            $(document).on('click', '.btn', function () {
                console.log("askQuestion() click " + $(this).hasClass('correct'));
                //Make sure it's the correct answer and it hasn't already been answered
                if ($(this).hasClass('correct') && alreadyAnswered === false) {
    
                    // Clear the answers out of the way
                    $(answersDiv).empty();
    
                    console.log("askQuestion() correct");
                    //Display the message and the gif
                    $('#question').empty().append("Correct!");
    
                    correct++;
                }
                // User answwered a question incorrectly
                else if ($(this).hasClass('correct') === false && alreadyAnswered === false) {
    
                    // Clear the answers out of the way
                    $(answersDiv).empty();
                    
                    console.log("askQuestion() incorrect");
                    //Display the message
                    $('#question').empty().append("Trust your instincts...");
                    $('#game-content').append(answerDiv);
                    $('#answer').append("The correct answer is " + $(this).val());
    
                    incorrect++;
                }
                alreadyAnswered = true;
                stopTimer();
                nextQuestion();
                $('game-content').empty();
                currentIndex++;
    
                // Check if game is over...
                if (currentIndex === trivia.length) gameOver = true;
                else setTimeout(askQuestions, 5000);
            });
        }
    }
    
    function displayEnd() {
    
    }
    
    function getCurrentCorrectAnswer() {
        for (let i = 0; i < trivia[currentIndex].length; i++) {
            let answer = 'answer' + i;
            console.log('answer ' + answer);
            let hasAnswerClass = trivia[currentIndex][answer];
            if ($(hasAnswerClass).hasClass('correct')) {
                return trivia[currentIndex].correct;
            }
        }
    }
    
    function getCurrentQuestion() { return trivia[currentIndex].question; }
    
    function stopTimer() {
        timerRunning = false;
        clearInterval(intervalId);
    }
    
    function nextQuestion() { setTimeout(askQuestions, 1000); }
    
    $(document).ready(function () {
        $('#Start').on('click', startGame);
    });









 
    

  

