
//Getting Full Name From Login Page

function startQuiz() {
    fname = document.getElementById('fname').value
    localStorage.setItem('fname',fname)
}

function quiz() {

    //Calling Options form Objects

    var q1Opt = {
        opt1: "Brazil",
        opt2: "Germany",
        opt3: "Argentina",
        opt4: "France"
    }
    var q1Options = Object.values(q1Opt)
    for (var i = 1; i <= q1Options.length; i++) {
        var a = document.getElementById("q1Opt" + i)
        a.innerHTML = q1Options[i - 1]
    }

    var q2Opt = {
        opt1: "Italy",
        opt2: "Brazil",
        opt3: "Germany",
        opt4: "France"
    }
    var q2Options = Object.values(q2Opt)
    for (var i = 1; i <= q2Options.length; i++) {
        var a = document.getElementById("q2Opt" + i)
        a.innerHTML = q2Options[i - 1]
    }

    var q3Opt = {
        opt1: "Pele",
        opt2: "Maradona",
        opt3: "Ronaldo",
        opt4: "Ronaldinho"
    }
    var q3Options = Object.values(q3Opt)
    for (var i = 1; i <= q3Options.length; i++) {
        var a = document.getElementById("q3Opt" + i)
        a.innerHTML = q3Options[i - 1]
    }

    var q4Opt = {
        opt1: "Ronaldinho",
        opt2: "Pele",
        opt3: "Maradona",
        opt4: "Ronaldo"
    }
    var q4Options = Object.values(q4Opt)
    for (var i = 1; i <= q4Options.length; i++) {
        var a = document.getElementById("q4Opt" + i)
        a.innerHTML = q4Options[i - 1]
    }

    var q5Opt = {
        opt1: "Luis Suarez",
        opt2: "Messi",
        opt3: "Ronaldo",
        opt4: "Maradona"
    }
    var q5Options = Object.values(q5Opt)
    for (var i = 1; i <= q5Options.length; i++) {
        var a = document.getElementById("q5Opt" + i)
        a.innerHTML = q5Options[i - 1]
    }

    //Timer Funtion

    var a;
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var sec = 300;
    minutes.innerHTML = 5;

    function timer() {
        a = setInterval(function () {
            sec--
            seconds.innerHTML = sec % 60
            minutes.innerHTML = Math.floor(sec / 60)
            if (sec <= 0) {
                end()
            }
        }, 1000)
    }
    //Calling Timer function
    timer()
}

//When Submit Button is Clicked Results will be loaded

function end() {
    window.location.href = "./result.html";
}

//Getiing Answers values from radio buttons

var userAns = []
function showAns() {
    for (var i = 1; i <= 5; i++) {
        var question = document.getElementsByName("ques" + i);
        var selectedOpt;

        for (var j = 0; j < question.length; j++) {
            if (question[j].checked)
                selectedOpt = question[j].value;
        }
        userAns[i - 1] = selectedOpt;
    }
    results()
}

//Checking Result

correctAns = ["germany", "france", "pele", "maradona", "suarez"];
var score = 0;
function results() {
    for (var i = 0; i <= 4; i++) {
        if (correctAns[i] === userAns[i]) {
            score++
        }
    }
    localStorage.setItem('score',score)
        end()
}

//Printing Results

function showResult() {
    para = document.getElementById('result')
    fname = localStorage.getItem('fname')
    score = localStorage.getItem('score')

    para.innerText = fname + "\n"  +"Your Score is " + score + " Out of 5"

    desc = document.getElementById('resultPara')
    if (score == 5) {
        desc.innerText = "Excellent"
    }
    else if (score == 4) {
        desc.innerText = "Good"
    }
    else if (score == 3) {
        desc.innerText = "Just passed"
    }
    else if (score == 2) {
        desc.innerText = "Failed"
    }
    else if (score == 1) {
        desc.innerText = "Very poor performance"
    }
    else if (score == 0) {
        desc.innerText = "You don't watch Football ?"
    }
}
