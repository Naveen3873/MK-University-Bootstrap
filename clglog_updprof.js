function updprofi() {
    let clgname = document.forms["proupda"]["clgname"];
    let uname = document.forms["proupda"]["uname"];
    let paswd = document.forms["proupda"]["paswd"];
    var pnum = document.forms["proupda"]["pnum"].value;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let postadd = document.proupda.postadd.value;

    if (clgname.value == null || clgname.value == "" ) {
        document.getElementById("invnam").innerHTML = "Enter you college name";
        clgname.focus();
    }else{
        document.getElementById("invnam").innerHTML = "";
    }
    if (uname.value == null || uname.value == "") {
        document.getElementById("invuname").innerHTML = "Enter your username";
        uname.focus();
    }
    else{
        document.getElementById("invuname").innerHTML = "";
    }
    if (paswd.value == null || paswd.value == "") {
        document.getElementById("invpsw").innerHTML = "Password must contain 8 character and one numbers and one uppercase";
        password.focus();
    }
    else{
        document.getElementById("invpsw").innerHTML = "";
    }
    if (pnum == null || pnum == "") {
        document.getElementById("invnum").innerHTML = "Enter Mobile number";
        pnum.focus();
    }
    else if(pnum.value.match(phoneNum)){
        document.getElementById("invnum").innerHTML = "";
        alert("submit successfully");
        window.location.reload();
    }
    else{
        document.getElementById("invnum").innerHTML = "Enter Valid number";
    }
    
}