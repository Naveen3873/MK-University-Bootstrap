function clgreg() {
    let clgname = document.forms["clgregi"]["clgname"];
    let username = document.forms["clgregi"]["username"];
    let password = document.forms["clgregi"]["password"];
    let password1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    let clgadd = document.forms["clgregi"]["clgadd"];
    let phnum = document.clgregi.phnum.value;

    if (clgname.value == null || clgname.value =="") {
        document.getElementById("invclna").innerHTML = "Enter college name";
        clgname.focus();
        return false;
    }
    else{
        document.getElementById("invclna").innerHTML = "";
    }
    if (username.value == null || username.value =="") {
        document.getElementById("invuna").innerHTML = "Enter username";
        username.focus();
        return false;
    }
    else{
        document.getElementById("invuna").innerHTML = "";
    }
    if (password.value == null || password.value == "") {
        document.getElementById("invpsw").innerHTML = "Password must contain 6 character and one numbers and one uppercase";
        password.focus();
        return false;
    }
    if (password.value.match(password1)) {
        document.getElementById("invpsw").innerHTML = "Your password strength is good";
        return false;
    }
    if (clgadd.value == null || clgadd.value == "") {
        document.getElementById("invadd").innerHTML = "Enter college address";
        clgadd.focus();
        return false;
    }
    if (phnum == null || phnum == "") {
        document.getElementById("invnum").innerHTML = "Enter mobile number";
        phnum.focus();
        return false;
    }
    if (isNaN(phnum)) {
        document.getElementById("invnum").innerHTML = "Enter numeric only";
        phnum.focus();
        return false;
    }
    else {
        alert("submit successfully");
        window.location.reload();
    }
}