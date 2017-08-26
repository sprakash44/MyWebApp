var username;
var password;
var repPassword;
var fname;
var lname;
var fullname;
var email;
var regex;

fullname = document.getElementById("fullname").value;// = fname + " " +
// lname;

function validateFields() {
	lname = document.getElementById("lname").value;
	fname = document.getElementById("fname").value;
	username = document.getElementById("uname").value;
	
	if (true) {
		validatePassword();
	}
	if(valForm.pwd.value != valForm.con_pwd.value){
		alert("Error: Password MISMATCH !");
	}
	
	if (fname.length <=8 ) {
		alert("Error: First Name must contain at least 8 characters!");
	}
	if (!validateEmail()) {
		alert("Not a valid e-mail address ..");
	}
}
function validatePassword() {
	 if(valForm.pwd.value != "" ) {
	      if(valForm.pwd.value.length < 6) {
	        alert("Error: Password must contain at least six characters!");
	        valForm.pwd.focus();
	        return false;
	      }
	      if(valForm.pwd.value == valForm.uname.value) {
	        alert("Error: Password must be different from Username!");
	        form.pwd1.focus();
	        return false;
	      }
	      re = /[0-9]/;
	      if(!re.test(valForm.pwd.value)) {
	        alert("Error: password must contain at least one number (0-9)!");
	        valForm.pwd.focus();
	        return false;
	      }
	      re = /[a-z]/;
	      if(!re.test(valForm.pwd.value)) {
	        alert("Error: password must contain at least one lowercase letter (a-z)!");
	        form.pwd.focus();
	        return false;
	      }
	      re = /[A-Z]/;
	      if(!re.test(valForm.pwd.value)) {
	        alert("Error: password must contain at least one uppercase letter (A-Z)!");
	        form.pwd1.focus();
	        return false;
	      }
	    } else {
	      alert("Error: Please check that you've entered and confirmed your password!");
	      valForm.pwd.focus();
	      return false;
	    }

	  //  alert("You entered a valid password: " + valForm.pwd.value);
	    return true;
	
}

function validateEmail() {

	email = document.forms["valForm"]["email"].value;
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
		return false;
	}
}
function cancelForm() {

	//alert("Im going to cancel ...");

}
