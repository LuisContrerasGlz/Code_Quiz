// Assignment Code

var quest_text = document.querySelector("#quest_text");
var op1Btn = document.querySelector("#op1");
var op2Btn = document.querySelector("#op2");
var op3Btn = document.querySelector("#op3");
var op4Btn = document.querySelector("#op4");
var n_questText = document.querySelector("#n_quest");
var counterText = document.querySelector("#counter");
var count = 0;
const startingMinutes = 1;
let time = startingMinutes * 60;
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const      questions = [
        {
            id:0,
            question:'First SB champ',
            op1: 'Steelers',
            op2: 'Patriots',
            op3: 'Green Bay',
            op4: 'Dolphins',
            correct: "3"
        },
        {
            id:1,
            question:'Year of the first SB',
            op1: '1967',
            op2: '1966',
            op3: '1970',
            op4: '1950',
            correct: "1"
        },
        {
            id:2,
            question:'Winner of the super bowl IX',
            op1: 'Steelers',
            op2: 'Patriots',
            op3: 'Green Bay',
            op4: 'Dolphins',
            correct: "1"
        },
        {
            id:3,
            question:'Only unitented team in an NFK season',
            op1: 'Steelers',
            op2: 'Patriots',
            op3: 'Green Bay',
            op4: 'Dolphins',
            correct: "4"
        },
        {
            id:4,
            question:'Winner of the super bowl LV',
            op1: 'Steelers',
            op2: 'Patriots',
            op3: 'Green Bay',
            op4: 'Chiefs',
            correct: "4"
        },
    
    
           {
            id:5,
            question:'the highest score of a team in a super bowl',
            op1: '52',
            op2: '56',
            op3: '55',
            op4: '49',
            correct: "3"
        },
        {
            id:6,
            question:'which team has the highest score of a team in a super bowl',
            op1: 'Steelers',
            op2: 'Patriots',
            op3: 'Dolphins',
            op4: '49ers',
            correct: "4"
        },
        {
            id:7,
            question:'Fewer combined points from a super bowl',
            op1: '12',
            op2: '16',
            op3: '15',
            op4: '7',
            correct: "2"
        },
        {
            id:8,
            question:'super bowl with the highest amount of combined points',
            op1: 'LII',
            op2: 'XXIV',
            op3: 'VII',
            op4: 'XX',
            correct: "3"
        },
        {
            id:9,
            question:'In which stadium was the first super bowl held',
            op1: 'Los Angeles Memorial Coliseum',
            op2: 'Orange Bowl (Miami)',
            op3: 'ulane Stadium (New Orleans)',
            op4: 'Rose Bowl (Pasadena, Calif.)',
            correct: "1"
        }
   ];
    


function BeginPlay() {
    var nq=Math.floor((Math.random() * (9 - 0 + 1)) + 0);
    quest_text.innerText = questions[nq].question;
    op1Btn.innerText = questions[nq].op1;
    op2Btn.innerText = questions[nq].op2;
    op3Btn.innerText = questions[nq].op3;
    op4Btn.innerText = questions[nq].op4;
    n_questText.innerText =nq;
    count = count + 1;
    counterText.innerText= count
    
}

function check(){
    var run_game = true;
    if (count>3){
        op1Btn.disabled=true;
        op2Btn.disabled=true;
        op3Btn.disabled=true;
        op4Btn.disabled=true;  
        run_game= false;
        localStorage.setItem("time", time);
        document.location.target = "_blank";
        document.location.href="file:///C:/luis/bootcamp/quiz/03-Homework/Develop/reg.html";
    }
    return run_game;
}

function wrong(){
  var snd = new Audio("beep_beep.mp3");
  snd.play();
}
function op1Play(){
    if (check()==true){
        nquest= n_questText.innerText;
        if (questions[nquest].correct=="1"){
            BeginPlay();
        }else{
            wrong();
            time=time-10;
        } 
    }
    
}



function op2Play(){
    if (check()==true){
        nquest= n_questText.innerText;
        if (questions[nquest].correct=="2"){
            BeginPlay();
        }else{
            wrong();
            time=time-10;
        } 
    }
    
}

function op3Play(){
    if (check()==true){
        nquest= n_questText.innerText;
        if (questions[nquest].correct=="3"){
            BeginPlay();
        }else{
            wrong();
            time=time-10;
        } 
    }
    
}

function op4Play(){
    if (check()==true){
        nquest= n_questText.innerText;
        if (questions[nquest].correct=="4"){
            BeginPlay();
        }else{
            wrong();
            time=time-10;
        } 
    }
    
}

function updateCountdown(){
   
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    minutesEl.innerHTML=  minutes;
    secondsEl.innerHTML=  seconds;
    if (check()==true){
        time--;
    }

}





// Add event listener to generate button

op1Btn.addEventListener("click", op1Play);
op2Btn.addEventListener("click", op2Play);
op3Btn.addEventListener("click", op3Play);
op4Btn.addEventListener("click", op4Play);
setInterval(updateCountdown,1000);
