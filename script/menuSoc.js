function			menuSoc(){
	document.getElementById("menuSoc").style.display = "inline-block";
}

function			backHome(){
	document.getElementById("menuSoc").style.display = "none";
}

function			newSoc(){
	var		container = document.getElementById("contentSoc");
	var 	elem = createDiv({"height": "15%", "width": "98%", "margin": "1%", "bgColor": "red"});
	container.appendChild(elem);
}