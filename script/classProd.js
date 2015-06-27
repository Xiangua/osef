function		MenuProd(){
	this.ligneProd = createDiv({"height": "100%", "width": "45%", "margin": "0", "bgColor": "red", "margLeft": "10%", "pos": "absolute", "op": "0.5","display": "block"});
	this.titleLigne = createDiv({"height": "8%", "width": "100%", "margin": "0%", "op":"1", "bgColor": "white", "pos": "absolute"});
	this.divLigne = createDiv({"height": "92%", "width": "100%", "margin": "0", "pos":"absolute", "top": "8%"});
	this.contentLigne = createDiv({"width": "100%", "margin": "0", "pos":"relative"});
	this.addLigne = createDiv({"height":"12%", "width":"98%", "margin":"1%", "pos":"relative", "op":"1", "border":"1px solid black", "zind": "20"});
	this.infoSoc = createDiv({"height": "100%", "width": "45%", "margin": "0", "bgColor": "blue", "pos": "absolute", "op": "0.5", "display": "inline-block"});
	this.stockSoc = createDiv({"height": "55%", "width": "100%", "margin": "0", "bgColor": "gray", "pos": "relative", "op": "0.5"});
	this.titleStock = createDiv({"height": "10%", "width": "100%", "margin": "0", "bgColor": "white", "pos": "relative", "op": "1"});
	this.contentStock = createDiv({"height": "90%", "width": "100%", "margin": "0", "bgColor": "Yellow", "pos": "relative", "op": "1"});
	this.empSoc = createDiv({"height": "45%", "width": "100%", "margin": "0", "bgColor": "white", "pos": "relative", "op": "0.5"});
	this.infoEmp = createDiv({"height": "80%", "width": "100%", "margin": "0", "bgColor": "red", "pos": "relative", "op": "1"});
	this.orgaEmp = createDiv({"height": "20%", "width": "100%", "margin": "0", "bgColor": "red", "pos": "relative", "op": "1"});
	this.soc = {};

	this.showProd = function(soc){
		this.soc = soc;
		/** vide la page societe **/
		this.cleanDivContent();

		/** creation de la partie ligne **/
		this.titleLigne.innerHTML = "Lignes de productions de la societe "+soc.id;
		this.ligneProd.appendChild(this.titleLigne);
		contentLigne = createDiv({"width": "100%", "margin": "0", "pos":"relative"});
		this.contentLigne.style.overflowY = "auto";
		this.contentLigne.style.overflowX = "none";
		this.contentLigne.style.maxHeight = "86%";
		for (var i = 1; i <= soc.ligne; i++){
			var ligne = createDiv({"height":"9.2em", "width":"98%", "margin":"1%", "pos":"relative", "op":"1", "border":"1px solid black", "zInd": "20"});
				ligne.innerHTML = "Ligne "+i;
			this.contentLigne.appendChild(ligne);		
		}
		this.divLigne.appendChild(this.contentLigne);
		this.addLigne.style.backgroundImage = "url(\"asset/plus.png\")";
		this.addLigne.style.backgroundRepeat = "no-repeat";
		this.addLigne.style.backgroundSize = "40%";
		this.addLigne.style.backgroundPosition = "center";	
		this.divLigne.appendChild(this.addLigne);
		this.ligneProd.appendChild(this.divLigne);
		menuGeneral.societe.appendChild(this.ligneProd);
		/** partie droite de la fenetre prod **/
		this.infoSoc.style.marginLeft = "55%";  
		/** gestion de la fenetre stock **/
		this.titleStock.innerHTML = "Espace societe "+soc.id;
		this.stockSoc.appendChild(this.titleStock);
		this.contentStock.innerHTML =  "ici le resume du contenu des stocks <br /><br />(dev en cours)";
		this.stockSoc.appendChild(this.contentStock);
		this.infoSoc.appendChild(this.stockSoc);
		/** gestion de la fenetre employer **/
		this.infoEmp.innerHTML = "ici le resume de l'etat des employes <br /><br />(dev en cours)";
		this.empSoc.appendChild(this.infoEmp);
		this.orgaEmp.innerHTML = "organiser";
		this.empSoc.appendChild(this.orgaEmp);
		this.infoSoc.appendChild(this.empSoc);
		menuGeneral.societe.appendChild(this.infoSoc);
	}

	this.newLigne = function(){
		this.soc.newLigne();
		var ligne = createDiv({"height":"9.2em", "width":"98%", "margin":"1%", "pos":"relative", "op":"1", "border":"1px solid black"});
			ligne.innerHTML = "Ligne "+this.soc.ligneCnt;
			ligne.zIndex = "20";
		this.contentLigne.appendChild(ligne);
	}

	this.cleanDivContent = function(){
		while (menuGeneral.societe.firstChild)
			menuGeneral.societe.removeChild(menuGeneral.societe.firstChild);
		while (this.contentLigne.firstChild)
			this.contentLigne.removeChild(this.contentLigne.firstChild);
	}

	this.menuOrgaEmp = function(){
		console.log("toto");
	}

	/** event de la page prod **/
	this.addLigne.addEventListener("click", function(){pageProd.newLigne();});
	this.orgaEmp.addEventListener("click", function(){pageProd.menuOrgaEmp();});
}
