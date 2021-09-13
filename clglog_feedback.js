function submitfeed() {
    let fdbck = document.forms["fedbck"]["fdbck"];

    if (fdbck.value == "" || fdbck.value == null) {
        document.getElementById("invmsg").innerHTML = "please enter your feedback in the box";
        fdbck.focus();
        return false;
    }
    else {
        alert("Thanks for submitting your feedback");
        location.reload();
    }
}