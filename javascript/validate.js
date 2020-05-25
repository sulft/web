
	document.getElementById('submit').onclick=function() {

		if(validateForm() == false) {
			return false;
		}
	}


	function validateForm() {

		var nameFirst = document.getElementById('nameFirst');
		var theValue = nameFirst.value;

		if(theValue != "Terry") {
			
			console.log("Will this fire?");

			var messageHolder = document.getElementById('target');
			messageHolder.style.color = "green";
			messageHolder.innerHTML = "Vous n'avez pas entré le nom attendu.";
			nameFirst.select();
		
			return false;

			console.log("Will this fire? (bis)"); //ce texte ne sera jamais lu dans la console
		}
		
}

