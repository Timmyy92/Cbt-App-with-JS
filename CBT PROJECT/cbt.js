let questions = [
    {
        no: "1",
        question: 'Who is the president of Nigeria?',
        options: [
            "Buhari", "Osinbajo", "Tinubu", "Lai Mohammmed"
        ],
        answer: "Buhari"
    },
    {
        no: "2",
        question: 'Who is the president of America?',
        options: [
            "Buhari", "Osinbajo", "Tinubu", "Joe Biden"
        ],
        answer: "Joe Biden"
    },
    {
        no: "3",
        question: 'Who runs the world?',
        options: [
            "Buhari", "Osinbajo", "Tinubu", "Girls"
        ],
        answer: "Girls"
    },
    {
        no: "4",
        question: 'How many colors are there in Nigerian flag?',
        options: [
            "Two", "One", "Four", "Three"
        ],
        answer: "Two"
    },
    {
        no: "5",
        question: 'Who was the first lady to drive a car in Nigeria?',
        options: [
            "Mary Lazarus", "Fumilayo Ransome Kuti", "Joke Silver", "Funmi Ajao"
        ],
        answer: "Fumilayo Ransome Kuti"
    },
    {
        no: "6",
        question: 'What network has the slogan "EVERYWHERE YOU GO"?',
        options: [
            "MTN", "GLO", "AIRTEL", "9MOBILE"
        ],
        answer: "MTN"
    },
    {
        no: "7",
        question: 'Who discovered Electricity?',
        options: [
            "Benjamin Franklin", "Henshaw Samuel", "Damilare Kazeem", "Oluwatobi"
        ],
        answer: "Benjamin Franklin"
    },
    {
        no: "8",
        question: 'What is the most common surname in the United States?',
        options: [
            "Kasali", "Smith", "Tango", "Berry"
        ],
        answer: "Smith"
    },
    {
        no: "9",
        question: 'Who was the last Tsar of Russia?',
        options: [
            "Smith", "Terry", "Nichole", "Nicholas II"
        ],
        answer: "Nicholas II"
    },
    {
        no: "10",
        question: 'What is the max length of a TikTok video?',
        options: [
            "20 Seconds", "10 Seconds", "60 Seconds", "40 Seconds"
        ],
        answer: "60 Seconds"
    }
]
// function displayResult() {
//     document.querySelector('.question').innerHTML =
//     `
// <h3>${Questions[index].no}. ${Questions[index].question}</h3>
// `
// for (let i = 0; i < Questions[index].options.length; i++) {
//     document.querySelector('.option').innerHTML = " ";

//     document.querySelector('.option').innerHTML += `
//     <p class="luv"> ${Questions[index].options[i]}</p>
//     `
// }
// }



// document.querySelector('.question').innerHTML =
//     `
// <h3>1. Who is the president of Nigeria?</h3>
// `
// document.querySelector('.option').innerHTML = `
// <p class="luv">Buhari</p>
// <p class="luv">Osinbajo</p>
// <p class="luv">Tinubu</p>
// <p class="luv">Lai Mohammed</p>
// `
// let index = 0
// function next(params) {
//     if (index < Questions.length -1){
//         index++
//     }

//    displayResult()
// }
// function prev(params) {
//     if (index > 0){
//         index--
//     }

//   displayResult()
// }

//Questions array
let questionHTML = document.querySelector('.question')
let questionBox = document.querySelector('.div1')
let options = document.querySelector('.option')
let resultBox = document.querySelector('.Resultpage')
let sel_ans = [] //array to store any answers selected by the current (index see line 71)
let points = 0; //where t store your points
let index = 0
let start_btn = document.querySelector(".start_btn")

//let timer = null;
let counter = 60;


document.querySelector('.div1').hidden = true;
document.querySelector('.Resultpage').hidden = true;
document.querySelector('.info-page').hidden = true;

function startQuiz(){
    document.querySelector('.start-box').hidden = true
    document.querySelector('.div1').hidden = true
    document.querySelector('.info-page').hidden = false;
    document.querySelector('.Resultpage').hidden = true

    
    
}
function contQuiz() {
    document.querySelector('.div1').hidden = false;
    document.querySelector('.start-box').hidden = true;
    document.querySelector('.info-page').hidden = true;
    document.querySelector('.Resultpage').hidden = true;
    displayQuestion()
    timer = setInterval(function() {
        counter --
        if(counter == 0){
            clearInterval(timer)
            submit()
        }
        document.getElementById('sec').innerHTML = counter
    }, 1000);
}
/*
*used to display the questions and answers if the index (declared on line 37) changes
*/
function displayQuestion() {
    if (index==0) {
        document.getElementById("prev").hidden = true;
    }else{
        document.getElementById("prev").hidden = false;
    }
    if (index==questions.length-1) {
        document.getElementById("next").hidden = true;
    }else{
        document.getElementById("next").hidden = false;
        
    }

    questionHTML.innerText = `${questions[index].no}. ${questions[index].question} `; //gets the questions

    options.innerHTML = ""

    for (let i = 0; i < questions[index].options.length; i++) {

        let opt = questions[index].options[i];


        if (sel_ans[index] == opt) {
            options.innerHTML += `
            <p class="luv">
                <input type="radio" checked name="options" onchange="selectedAnswer('${opt}')">
                <label>${opt}</label>
            </p>
        `
        } else {
            options.innerHTML += `
            <p class="luv">
                <input type="radio"  name="options" onchange="selectedAnswer('${opt}')">
                <label>${opt}</label>
            </p>
        `
        }

    }

}
displayQuestion()
function selectedAnswer(opt) {
    sel_ans[index] = opt;
    console.log(sel_ans)
}


function submit() {

    clearInterval(timer)
document.querySelector('.div1').hidden = true
document.querySelector('.start-box').hidden = true
document.querySelector('.Resultpage').hidden = false
    //the loop runs accordiing to the number of questions (also the number of the sel_ans array)
    for (let i = 0; i < questions.length; i++) {
        //checks if the answer provided in the questions array is equall to the sel_ans based on  same index
        if (questions[i].answer == sel_ans[i]) {
            points = points + 10;
        }
    }
    if (points > 40 ) {
        resultBox.innerHTML = `
        <p>You have completed the quiz.</p>
        <p>Your score is <span>${points}</span></p> 
        <img src="./64248-checkmark.gif" alt="" width="200px">
        <button class="btn btn-danger" onclick="quit()">Quit</button>
        `
    }else{

    resultBox.innerHTML = `
    <p>You have completed the quiz.</p>
    <p>Your score is <span>${points}</span></p> 
    <img src="./76705-error-animation.gif" alt="" width="200px">
    <button class="btn btn-danger" onclick="quit()">Quit</button>
    `
    }

    console.log(points)
    
}



function next() {
    if (index < (questions.length - 1)) {
        index++;
    }
    displayQuestion()
}

function prev() {
    if (index > 0) index--;
    displayQuestion()
}

function quit(){
    window.location.reload();
}

