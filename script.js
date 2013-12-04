document.getElementById("btnSignIn").addEventListener("click", function(event) {

	
	var name = document.getElementById("inputName").value;
	var pwd = document.getElementById("inputPwd").value;
	
	console.log(name+" "+pwd);
	
	// document.location.href="welcome.html";
});

document.getElementById("btnSignUp").addEventListener("dblclick", function(event){
	alert("double clicked!");
});

