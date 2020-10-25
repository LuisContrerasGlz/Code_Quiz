const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const name_text = document.querySelector("name");

var regBtn = document.querySelector("#reg");
var v_usrs=["uno","dos"];
var v_time=[0,1];



function reg_usr(){
    let var_time = localStorage.getItem("time");
    v_usrs.push(document.querySelector("#name").value);
    long = v_usrs.length;
    v_time.push(var_time);
    localStorage.setItem("users", JSON.stringify(v_usrs));
    localStorage.setItem("times", JSON.stringify(v_time));
    document.location.target = "_blank";
    document.location.href="file:///C:/luis/bootcamp/quiz/03-Homework/Develop/index.html";
}


function get_localStorage(){
    let time = localStorage.getItem("time");
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    minutesEl.innerHTML=  minutes;
    secondsEl.innerHTML=  seconds;    
}

regBtn.addEventListener("click", reg_usr);
