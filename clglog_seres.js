function sere() {
    let clgid = document.forms["seres"]["clgid"];
    let id = document.seres.clgid.value;
    let clgname = document.forms["seres"]["clgname"];
    let response = document.forms["seres"]["response"]; 
    
    if (clgid.value == "" || clgid.value == null) {
        document.getElementById("invid").innerHTML = "Enter your college id";
        clgid.focus();
        return false;
    }
    if (isNaN(id)) {
        document.getElementById("invid").innerHTML = "Enter numeric only";
        clgid.focus();
        return false;
    }
    if (clgname.value == "" || clgname.value == null) {
        document.getElementById("invname").innerHTML = "Enter your colllege name";
        clgid.focus();
        return false;
    }
    if (response.value == "" || response.value == null) {
        document.getElementById("invmsg").innerHTML = "Enter your messege";
        clgid.focus();
        return false;
    }
    else {
        alert("send successfully");
        location.reload();
    }
    
}