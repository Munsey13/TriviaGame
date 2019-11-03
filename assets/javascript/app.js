$(document).ready(function () {

    let theQuestion = 0;
    let correctAnswers = 0;
    let incorrectAnswer = 0;
    let unanswered = 0;

    let triviaQnA = [
        {
            question: "Who did All Might choose to pass his power to?",
            answers: ["Izuku Midoriya", "Shoto Todoroki", " Katsuki Bakugo", "Tenya Iida"],
            answerIndex: 00,
        },
        {
            question: "Which student uses fire and ice as their power?",
            answers: ["Mashirao Ojiro", "Ochaco Uraraka", "Denki Kaminari", "Shoto Todoroki"],
        },
        {
            question: "What is Izuku Midoriyas hero name?",
            answers: ["Goku", "Deku", "One Punch Man", "Kirito"],
        },
        {
            question: "What is the name of the High School the students attend?",
            answers: ["Boone", "UA", "Hero's", "Wawa"],
        },
        {
            question: "How long did Izuku Midoriya train to gain his power?",
            answers: ["12 months", "9 months", "6 months", "3 months"],
        },
        {
            question: "Who won the Battle Tournament in the Sports Festival?",
            answers: ["Shoto Todoroki", "Katsuki Bakugo", "Eijiro Kirishima", "Mezo Shoji"],
        },
        {
            question: "Who hospitalized Tenya Iidas older brother?",
            answers: ["Mario", "The Hero Killer", "Jason", "FIJI"],
        },
    ];
    console.log(triviaQnA[0].answers[0]);
    // loops through the questions and will append each on the an html id, it will keep it hiden till I want it to show on screen 
    for (let i = 0; i < triviaQnA.length; i++) {

        hide();

        temp = theQuestion++;
        if (temp === 0) {
            $("#question1").html(triviaQnA[temp].question)
        };
        if (temp === 1) {
            $("#question2").html(triviaQnA[temp].question)
        };
        if (temp === 2) {
            $("#question3").html(triviaQnA[temp].question)
        };
        if (temp === 3) {
            $("#question4").html(triviaQnA[temp].question)
        };
        if (temp === 4) {
            $("#question5").html(triviaQnA[temp].question)
        };
        if (temp === 5) {
            $("#question6").html(triviaQnA[temp].question)
        };
        if (temp === 6) {
            $("#question7").html(triviaQnA[temp].question)
        };

    }
    //looking to make a function here that will put the answers on the html
    console.log(triviaQnA.answers);



    $("#starter").on("click", function () {
        console.log("you clicked this button.")
        countDown(5)
        $(".question").html(triviaQnA[temp].question)
        $("#starter").hide();
    })

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







}) // document ready end bracket




