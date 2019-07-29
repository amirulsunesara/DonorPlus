// Author: Jay Sharma (B00824331)

// Include sweetalert script.
//https://stackoverflow.com/questions/43796705/how-to-include-cdn-in-javascript-file-js

var sweetalert = document.createElement('script');  
sweetalert.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
document.head.appendChild(sweetalert);

function validate(){
	if (document.getElementById("org_password").value!=document.getElementById("confirmPassword").value){
		swal("Oops! Passwords do not match! Try again!");
	}
	else if (document.getElementById("org_password").value!=''&&document.getElementById("confirmPassword").value!=''&&document.getElementById("orgname").value!=''&&document.getElementById("email").value!=''&&document.getElementById("address").value!=''&&document.getElementById("phone_number").value!=''){
		swal("Thank you for your interest in being a regular donor. We have received your form and will get in touch with you soon. Please look out for an email from us.")
		document.getElementById("donorForm").submit();
	}
}