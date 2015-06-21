function		showProd(elem){
	console.log(elem);
	var obj = {};
	document.getElementById("buttonProd").style.backgroundColor = "white";
	while (elem.firstChild) {
	  elem.removeChild(elem.firstChild);
	}
	elem.style.padding = "0";
	var ligneProd = createDiv({"height": "100%", "width": "45%", "margin": "0", "bgColor": "red", "margLeft": "10%", "pos": "absolute", "op": "0.5","display": "block"});
		var titleLigne = createDiv({"height": "8%", "width": "100%", "margin": "0%", "op":"1", "bgColor": "white", "pos": "absolute"});
			titleLigne.innerHTML = "Lignes de productions";
			ligneProd.appendChild(titleLigne);
		var contentLigne = createDiv({"width": "100%", "margin": "0", "pos":"absolute"});
			contentLigne.style.top = "8%"
			contentLigne.style.overflowY = "auto";
			contentLigne.style.height = "92%";
			var addLigne = createDiv({"height": "12%", "width":"100%", "margin":"0", "pos": "relative", "op":"1"});
				addLigne.style.zIndex = "20";
				addLigne.style.backgroundImage = "url(\"asset/plus.png\")";
				addLigne.style.backgroundRepeat = "no-repeat";
				addLigne.style.backgroundSize = "40%";
				addLigne.style.backgroundPosition = "center";
				addLigne.style.border = "1px solid black";
				addLigne.addEventListener("click", function(){
					newLigne(obj);
				});
			contentLigne.appendChild(addLigne);
		ligneProd.appendChild(contentLigne);
	elem.appendChild(ligneProd);

	var infoSoc = createDiv({"height": "100%", "width": "45%", "margin": "0", "bgColor": "blue", "pos": "absolute", "op": "0.5", "display": "inline-block"});
		infoSoc.style.marginLeft = "55%";
		var stockSoc = createDiv({"height": "55%", "width": "100%", "margin": "0", "bgColor": "gray", "pos": "relative", "op": "0.5"});
		infoSoc.appendChild(stockSoc);
		var	empSoc = createDiv({"height": "45%", "width": "100%", "margin": "0", "bgColor": "white", "pos": "relative", "op": "0.5"});
		infoSoc.appendChild(empSoc);
	elem.appendChild(infoSoc);
}

function		newLigne(elem){
	console.log(elem);
}