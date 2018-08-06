// JavaScript Document
window.addEventListener("load", init);
function init(){
	var button = document.querySelector("#button");
	var inputs = document.querySelectorAll(".input");
	var errors = document.querySelectorAll(".error");
	var labels = document.querySelectorAll(".label");
	var form = document.querySelector("form");
	var confirmation = document.querySelector("#confirmation");
	var info = document.querySelector("#info");

	button.addEventListener("click", validate);

	function validate(){
		var errorFound = false;
		info.textContent = "";

		for(var i = 0; i < inputs.length; i++){
			if(inputs[i].value == ""){
				errors[i].textContent = "*";
				errors[i].style.color = "red";
				labels[i].style.color = "red";
				errorFound = true;
			}
			else {
				errors[i].textContent = "";
				labels[i].style.color = "black";
				info.innerHTML += "<p>";
				info.innerHTML += inputs[i].value;
				info.innerHTML += "</p>";
			}
		}
		if(!errorFound){
			form.style.display = "none";
			confirmation.style.display = "block";
		}
	}
}