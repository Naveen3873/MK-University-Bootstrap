function forval(){
    var name = document.forms["addfac"]["facnam"];
    var qual = document.forms["addfac"]["quali"];
    var expe = document.forms["addfac"]["exper"];
    var ski = document.forms["addfac"]["skill"];
    

    if (name.value == "" || name.value == null) {
        document.getElementById("nameinv").innerHTML = "Enter faculty name";
        name.focus();
        return false;
    }
    if (qual.value == "" || qual.value == null){
        document.getElementById("quinv").innerHTML = "Enter faculty qualification";
        qual.focus();
        return false;
    }
    if (expe.value == "" || expe.value == null){
        document.getElementById("exinv").innerHTML = "Enter faculty experience or fresher";
        qual.focus();
        return false;
    }
    
    else{
        alert("submit successfully");
        return true;
        
    }
  
   
}