function stuuppro() {

    let ftname = document.forms["stuppro"]["ftname"];
    let lname = document.forms["stuppro"]["lname"];
    let usname = document.forms["stuppro"]["usname"];
    let paswd = document.forms["stuppro"]["paswd"];
    let password1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
    let mbnum = document.stuppro.mbnum.value;
    let emai = document.stuppro.emai.value; 
    let stuadres = document.forms["stuppro"]["stuadres"];
    var sele = document.getElementById("clgse");
    var sele = clgse.options[clgse.selectedIndex].value;

    if (ftname.value == null || ftname.value == "" ) {
        document.getElementById("invfna").innerHTML = "Enter your firstname";
        ftname.focus();
        return false;
    }
    if (lname.value == null || lname.value == "") {
        document.getElementById("invlna").innerHTML = "Enter your lastname";
        lname.focus();
        return false;
    }
    if (usname.value == null || usname.value == "") {
        document.getElementById("invusna").innerHTML = "Enter your username";
        usname.focus();
        return false;
    }
    if (paswd.value == null || paswd.value == "") {
        document.getElementById("invpsw").innerHTML = "Password must contain 6 character and one numbers and one uppercase";
        paswd.focus();
        return false;
    }
    if (mbnum == "" || mbnum == null) {
        document.getElementById("invnum").innerHTML = "Enter your mobile number";
        mbnum.focus();
        return false;
    }
    if (isNaN(mbnum)) {
        document.getElementById("invnum").innerHTML = "Enter numeric only";
        mbnum.focus();
        return false;
    }
    if (emai == "" || emai == null) {
        document.getElementById("invema").innerHTML = "Enter your email id at correct format";
        emai.focus();
        return false;
    }
    if (stuadres.value == null || stuadres.value == "") {
        document.getElementById("invadd").innerHTML = "Enter your address";
        stuadres.focus();
        return false;
    }
    if (paswd.value.match(password1)) {
        document.getElementById("invpsw").innerHTML = "password is strength";
        return false;
    }
    if (!sele) {
        document.getElementById("invsel").innerHTML = "seleect the college";
        sele.focus();
        return false;
    }
    else {
        alert("submit successfully");
        window.location.reload();
    }
}