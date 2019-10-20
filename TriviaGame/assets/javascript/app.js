
let triviaQnA = [
    {
        question: "Who did All Might choose to pass his power to?",
        answers: ["Izuku Midoriya", "Shoto Todoroki", " Katsuki Bakugo", "Tenya Iida"],
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
        question: "Who won the Battle Tournamen in the Sports Festival?",
        answers: ["Shoto Todoroki", "Katsuki Bakugo", "Eijiro Kirishima", "Mezo Shoji"],
    },
    {
        question: "Who hospitalized Tenya Iidas older brother?",
        answers: ["Mario", "The Hero Killer", "Jason", "FIJI"],
    },
];
console.log(triviaQnA);


document.getElementById("starter").addEventListener("click", countDown())

    function countDown(seconds, display) {
        seconds = 25;
        var display = document.getElementById("display-time");
        display.innerHTML = +seconds + " seconds";
        if (seconds < 1) {
            console.log("times up");
            clearTimeout(timer);
        } else{
             seconds--;
        }; 
        var timer = setTimeout('countDown(' + seconds + ', "' + display + '")', 1000);

    };
    




// function countDown(seconds,"display-time") {
//     setTimeout(timeDisplayed, 1000 * 1)
///    setTimeout(timeDisplayed2, 1000 * 2)
// }

// }
// function timeDisplayed() {
//     document.getElementById("display-time").innerHTML = "25 seconds";
// }
// function timeDisplayed2(){
//     document.getElementById("display-time").innerHTML = "24 seconds";
// }


//document.getElementById("starter").addEventListener("click", countDown(25));




