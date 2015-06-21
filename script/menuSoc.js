var		countSoc = 1;

function			menuSoc(){
	document.getElementById("listSoc").style.display = "inline-block";
	document.getElementById("buttonMenuSoc").style.display = "none";
}

function			backHome(){
	document.getElementById("buttonMenuSoc").style.display = "inline-block";
	document.getElementById("listSoc").style.display = "none";
	document.getElementById("groupe").style.display = "inline-block";	
	document.getElementById("soc").style.display = "none";
	document.getElementById("menuSoc").style.display = "none";
}

function			newSoc(){
	var container = document.getElementById("contentSoc");
	var elem = createDiv({"height": "14%", "width": "98%", "margin": "1%", "bgColor": "red", "pos": "relative"});
		elem.id = "soc_"+countSoc;
		elem.innerHTML = "Societe "+countSoc;
		countSoc++;
		elem.addEventListener("click", function(){
			showSoc(this.id);
		});
		container.appendChild(elem);
}

function			hidelistSoc(){
	document.getElementById("listSoc").style.display = "none";
	document.getElementById("buttonMenuSoc").style.display = "inline-block";
}