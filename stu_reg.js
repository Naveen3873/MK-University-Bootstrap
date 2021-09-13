function studentreg() {
    let firstname = document.forms["stureg"]["firstname"];
    let lname = document.forms["stureg"]["lname"];
    let uname = document.forms["stureg"]["uname"];
    let password = document.forms["stureg"]["password"];
    let password1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    let mobnum = document.stureg.mobnum.value;
    let email = document.forms["stureg"]["email"];
    let address = document.forms["stureg"]["address"];
    var sele = document.getElementById("coleg");
    var sele = coleg.options[coleg.selectedIndex].value;

    if (firstname.value == null || firstname.value =="") {
        document.getElementById("invna").innerHTML = "Enter student firstname";
        firstname.focus();
        return false;
    }
    if (lname.value == null || lname.value =="") {
        document.getElementById("invnam").innerHTML = "Enter student lastname";
        lname.focus();
        return false;
    }
    if (uname.value == null || uname.value =="") {
        document.getElementById("unam").innerHTML = "Enter student username";
        uname.focus();
        return false;
    }
    if (password.value == null || password.value == "") {
        document.getElementById("invpsw").innerHTML = "Password must contain 6 character and one numbers and one uppercase";
        password.focus();
        return false;
    }
    if (password.value.match(password1)) {
        document.getElementById("invpsw").innerHTML = "";
        return false;
    }
    if (mobnum == null || mobnum == "") {
        document.getElementById("invnum").innerHTML = "Enter mobile number";
        return false;
    }
    if (isNaN(mobnum)) {
        document.getElementById("invnum").innerHTML = "Enter numeric only";
        mobnum.focus();
        return false;
    }
    if (email.value == null || email.value == "") {
        document.getElementById("invadd").innerHTML = "Enter student address";
        email.focus();
        return false;
    }
    if (address.value == null || address.value == "") {
        document.getElementById("invadd").innerHTML = "Enter student address";
        address.focus();
        return false;
    }
    if (!sele) {
        document.getElementById("invsele").innerHTML = "seleect the college";
        sele.focus();
        return false;
    }

    else {
        alert("submit successfully");
        window.location.reload();
    }
    
}