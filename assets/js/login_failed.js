// Author: Jonathan Harris

// https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters

// Include sweetalert script.
//https://stackoverflow.com/questions/43796705/how-to-include-cdn-in-javascript-file-js

var sweetalert = document.createElement('script');  
sweetalert.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
document.head.appendChild(sweetalert);

document.body.onload = loginFailed;

function loginFailed(){
	var url_string = window.location.href
	var url = new URL(url_string);
	var loginError = url.searchParams.get("loginError");

	if(loginError) {
	
		// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
	
		//var loginFailedDiv = document.createElement("div");
		
		// https://v4-alpha.getbootstrap.com/components/alerts/
		//loginFailedDiv.className = "alert alert-danger";
	  
		//var loginFailedContent = document.createTextNode("Login failed!"); 
	  
		//loginFailedDiv.appendChild(loginFailedContent);  

		//var addressTag = document.getElementById("address-tag"); 
	  
		//document.body.insertBefore(loginFailedDiv, addressTag);
		
		swal("Login failed!");
	}
	
}