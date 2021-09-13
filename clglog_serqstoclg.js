function serqst(){
    var stname = document.getElementById('stname').value;
    var restfr = document.getElementById("restfr").value;
    

    if (stname == null || stname == "") {
        document.getElementById("invname").innerHTML = "please enter your name";
        stname.focus();
        return false
    }
    if (restfr == null || restfr == "") {
        document.getElementById("invrq").innerHTML = "please enter your request";
        restfr.focus();
        return false
    }
    else {
        alert("submit successfully");
        location.reload();
    }
    
}