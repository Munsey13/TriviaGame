$(document).ready(function () {
    $(".container").hide();

    let theQuestion = null;
    let correctAnswers = 0;
    let incorrectAnswer = 0;
    let unanswered = 0;

    let triviaQnA = [
        {
            question: "Who did All Might choose to pass his power to?",
            answers: ["Izuku Midoriya", "Shoto Todoroki", " Katsuki Bakugo", "Tenya Iida"],
            answerIndex: 0,
        },
        {
            question: "Which student uses fire and ice as their power?",
            answers: ["Mashirao Ojiro", "Ochaco Uraraka", "Denki Kaminari", "Shoto Todoroki"],
            anwserIndex: 3,
        },
        {
            question: "What is Izuku Midoriyas hero name?",
            answers: ["Goku", "Deku", "One Punch Man", "Kirito"],
            answerIndex: 1,
        },
        {
            question: "What is the name of the High School the students attend?",
            answers: ["Boone", "UA", "Hero's", "Wawa"],
            answerIndex: 1,
        },
        {
            question: "How long did Izuku Midoriya train to gain his power?",
            answers: ["12 months", "9 months", "6 months", "3 months"],
            answerIndex: 2,
        },
        {
            question: "Who won the Battle Tournament in the Sports Festival?",
            answers: ["Shoto Todoroki", "Katsuki Bakugo", "Eijiro Kirishima", "Mezo Shoji"],
            answerIndex: 1,
        },
        {
            question: "Who hospitalized Tenya Iidas older brother?",
            answers: ["Mario", "The Hero Killer", "Jason", "FIJI"],
            answerIndex: 1,
        },
    ];
    console.log(triviaQnA[0].answers[0]);

    $("#starter").on("click", function () {
        console.log("you clicked this button.")
        countDown(5)
        $("#starter").hide();
        $(".container").show();
    })


    // loops through the questions and will append each on the an html id, it will keep it hiden till I want it to show on screen 
    for (let i = 0; i < triviaQnA.length; i++) {

        let nput = '<input type="radio" `checked`, true>';
        temp = theQuestion++;
        if (temp === 0) {
            $("#question0").html(triviaQnA[temp].question);
            $("#answer0").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer1").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer2").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer3").html(triviaQnA[temp].answers[3]).prepend(nput);

        };

        if (temp === 1) {
            $("#question1").html(triviaQnA[temp].question);
            $("#answer4").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer5").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer6").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer7").html(triviaQnA[temp].answers[3]).prepend(nput);

        };
        if (temp === 2) {
            $("#question2").html(triviaQnA[temp].question)
            $("#answer8").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer9").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer10").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer11").html(triviaQnA[temp].answers[3]).prepend(nput);

        };
        if (temp === 3) {
            $("#question3").html(triviaQnA[temp].question)
            $("#answer12").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer13").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer14").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer15").html(triviaQnA[temp].answers[3]).prepend(nput);

        };
        if (temp === 4) {
            $("#question4").html(triviaQnA[temp].question)
            $("#answer16").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer17").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer18").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer19").html(triviaQnA[temp].answers[3]).prepend(nput);

        };
        if (temp === 5) {
            $("#question5").html(triviaQnA[temp].question)
            $("#answer20").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer21").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer22").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer23").html(triviaQnA[temp].answers[3]).prepend(nput);

        };
        if (temp === 6) {
            $("#question6").html(triviaQnA[temp].question)
            $("#answer24").html(triviaQnA[temp].answers[0]).prepend(nput);
            $("#answer25").html(triviaQnA[temp].answers[1]).prepend(nput);
            $("#answer26").html(triviaQnA[temp].answers[2]).prepend(nput);
            $("#answer27").html(triviaQnA[temp].answers[3]).prepend(nput);

        };

    };
    

//looking to make a function here that will put the answers on the html
console.log(triviaQnA.answers);




    function countDown(seconds) {
        let theSeconds = seconds;
        let display = $("#display-time").html(seconds)
        
        // document.getElementById("display-time");
        
        interval = setInterval(function () {
            let currentNumber = seconds
            
            seconds--
            
            $("#display-time").html(currentNumber)
            
            if (currentNumber === 0) {
                clearInterval(interval)
            }
            
        }, 1000);
        
        
    };

    $("input").click(function() {
        console.log("Radio check")
        if (this === true) {
            $("input").prop(false);
        } else {
            $("input").prop(true);
        }
    });

    





}); // document ready end bracket




