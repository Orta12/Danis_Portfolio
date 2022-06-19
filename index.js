//variables
var box = document.getElementById("box");
var a = document.getElementById("name").value;
var data = document.getElementById("inputbar").value;


//show a name system
function namm() {

    var a = document.getElementById("name").value;
    
    if (a == "") {
        alert("Input somthing");
    }
    else {

        document.getElementById("span-1").innerText = a;
        document.getElementById("name").value = "";
    }
}

//feedback system
function feedback(){
    
    var cool = confirm("Is this Website cool?");
    if(cool == true)
    {
        document.getElementById("bt-2").innerText="Cool";
    }
    else{
        document.getElementById("bt-2").innerText="Sick";
    }
}

//todo system
function add() {

    var data = document.getElementById("inputbar").value;

    if (data == "") {
        alert("Input something");   
    } 
    else {
        var data = document.getElementById("inputbar").value;
        var box = document.getElementById("box");

        var li = document.createElement("li");
        li.textContent=data;
        box.appendChild(li);
    }

    li.classList.add("item_list");
    document.getElementById('inputbar').value = "";
       
}

// todo remove system
function remove() {

    var rem = document.querySelector(".item_list");
    rem.remove();
}

//post system
function post(){
    document.getElementById("email").value = "";
    document.getElementById("nammm").value = "";
    document.getElementById("descrpition").value = "";
}

