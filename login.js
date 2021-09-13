// Login page
function log() {
    // Admin login -->
    if (document.getElementById('flexRadioDefault1').checked) {

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == null || username == "") {
            document.getElementById("invuname").innerHTML = "Please input your username";
        }
        else{
            document.getElementById("invuname").innerHTML = "";
        }
        if (password == null || password =="") {
            document.getElementById("invpsw").innerHTML = "Please input your password";
        }
        else {
            document.getElementById("invpsw").innerHTML = "";
        }
        if (username == "admin" && password == "admin") {
            alert("Login successfully");
            window.open("file:///D:/Naveen/HTML-code-with-CSS/adminlogin.html");
            location.reload();
        }
        else {
            document.getElementById("invuname").innerHTML = "invalid username";
            document.getElementById("invpsw").innerHTML = "invalid password";
        }
                
    }
    // College Login -->
    else if (document.getElementById('flexRadioDefault2').checked) {
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == null || username == "") {
        document.getElementById("invuname").innerHTML = "Please input your username";
        return false;
        }
        else{
            document.getElementById("invuname").innerHTML = "";
        }

        if (password == null || password =="") {
            document.getElementById("invpsw").innerHTML = "Please input your password";
            return false;
        }
        else {
            document.getElementById("invpsw").innerHTML = "";
        }

        if (username == "american" && password == "123456") {
            alert("Login successfully");
            window.open("file:///D:/Naveen/HTML-code-with-CSS/clglogin.html");
            location.reload();
            return true;
        }
        else {
            document.getElementById("invuname").innerHTML = "invalid username";
            document.getElementById("invpsw").innerHTML = "invalid password";
            return false;
        }
    }
    // Student Login -->
    else if (document.getElementById('flexRadioDefault3').checked) {
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == null || username == "") {
            document.getElementById("invuname").innerHTML = "Please input your username";
            return false;
        }
        else{
            document.getElementById("invuname").innerHTML = "";
        }
        if (password == null || password =="") {
            document.getElementById("invpsw").innerHTML = "Please input your password";
            return false;
        }
        else {
            document.getElementById("invpsw").innerHTML = "";
        }
        if (username == "Naveen" && password == "860865") {
            alert("Login successfully");
            window.open("file:///D:/Naveen/HTML-code-with-CSS/stulogin.html");
            location.reload();
            return true;
        }
        else {
            document.getElementById("invuname").innerHTML = "invalid username";
            document.getElementById("invpsw").innerHTML = "invalid password";
            return false;
        }
                
    }
    else{
        alert("Please login");
    }
}


function adlog() {
    document.getElementById('adminLogin').innerHTML = "Admin Login";
}

function cllog() {
    document.getElementById('adminLogin').innerHTML = "College Login";
}

function stlog() {
    document.getElementById('adminLogin').innerHTML = "Student Login";
}

function contactformvali() {
    let name = document.getElementById('conformname').value;
    let email = document.forms["conform"]["conformemail"];
    let mobnum = document.conform.conformnum.value;

    if (name.value == null || name.value =="") {
    }
    if (email.value == null || email.value == "") {
    }
    if (mobnum == null || mobnum == "") {
    }
    else {
        alert('submit successful');
        window.location.reload();
    }
}