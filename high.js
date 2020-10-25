var staBtn = document.querySelector("#b_start");

function pr_array(){
    let arr_users = JSON.parse(localStorage.getItem("users"));
    let arr_times = JSON.parse(localStorage.getItem("times"));
    long = arr_users.length;
    alert(long);
    document.write("<center><h1>")
    for (i=0; i<long; i++){
       
         document.write(arr_users[i]);
         document.write("------")
         document.write(arr_times[i]);
        document.write("<br>")
        
    }
    document.write("<center><h1>")
    document.write("<a href='file:///C:/luis/bootcamp/quiz/03-Homework/Develop/index.html'>Home</a>");
}

staBtn.EventListener("click", pr_array);
