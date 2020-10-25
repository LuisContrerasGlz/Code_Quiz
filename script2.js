const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const name_text = document.querySelector("name");

var regBtn = document.querySelector("#reg");
var v_usrs=[];
var v_time=[];


function rec_array(){
    let arr_users = JSON.parse(localStorage.getItem("users"));
    let arr_times = JSON.parse(localStorage.getItem("times"));
    long = arr_users.length;
    alert(long);
    for (i=0; i<long; i++){
         v_usrs.push(arr_users[i]);
         v_time.push(arr_times[i]);   
    }
}




function reg_usr(){
    let var_time = localStorage.getItem("time");
    v_usrs.push(document.querySelector("#name").value);
    long = v_usrs.length;
    v_time.push(var_time);
    localStorage.setItem("users", JSON.stringify(v_usrs));
    localStorage.setItem("times", JSON.stringify(v_time));
    document.location.target = "_blank";
    document.location.href="./index.html";
}


function get_localStorage(){
    let time = localStorage.getItem("time");
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    minutesEl.innerHTML=  minutes;
    secondsEl.innerHTML=  seconds; 
    rec_array();
}

regBtn.addEventListener("click", reg_usr);