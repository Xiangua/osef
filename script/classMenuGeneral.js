function			MenuGeneral() {
	this.soc = [];
	this.countSoc = 1;
	this.menuGeneral = document.getElementById("menuGeneral");
	this.groupe = document.getElementById("groupe");
	this.button = document.getElementById("buttonMenuSoc");
	this.menuSoc = document.getElementById("menuSoc");
	this.societe = document.getElementById("soc");
	this.contentSoc = document.getElementById("contentSoc");
	this.avatar = document.getElementById("avatar");
	this.newSocButton = document.getElementById("addSoc");

	this.showSoc = function(soc) {
		pageGroupe.hideGroupe();
		this.societe.style.display = "inline-block";
		this.hideMenuGeneral();
		this.showMenuSoc();
		this.showProd = pageProd.showProd(soc);	
	}

	this.showGroupe = function() {
		this.hideSoc();
		this.hideMenuSoc();
		this.hideMenuGeneral();
		pageGroupe.showGroupe();
	}

	this.newSoc = function() {
	var buttonSoc = createDiv({"height": "6em", "width": "98%", "margin": "1%", "bgColor": "red", "pos": "relative"});
		buttonSoc.id = "soc_"+this.countSoc;
		buttonSoc.innerHTML = "Societe "+this.countSoc;
		buttonSoc.soc = new Soc(this.countSoc);
		this.soc.push(buttonSoc.soc);
		buttonSoc.addEventListener("click", function(){menuGeneral.showSoc(this.soc);});
		this.countSoc++;
		this.contentSoc.appendChild(elem);
	}

	this.showMenuSoc = function() {
		this.menuSoc.style.display = "inline-block";
	}

	this.showMenuGeneral = function() {
		buttonMenuSoc.style.display = "none";
		this.menuGeneral.style.display = "inline-block";
	}

	this.hideMenuGeneral = function() {
		this.menuGeneral.style.display = "none";
		this.button.style.display = "inline-block";
	}



	this.hideSoc = function() {
		this.societe.style.display = "none";
	}

	this.hideMenuSoc = function() {
		this.menuSoc.style.display = "none";
	}

	this.button.addEventListener("click", function(){menuGeneral.showMenuGeneral();});
	this.avatar.addEventListener("click", function(){menuGeneral.showGroupe();});
	this.newSocButton.addEventListener("click", function(){menuGeneral.newSoc();});
	this.groupe.addEventListener("click", function(){menuGeneral.hideMenuGeneral();});
	this.societe.addEventListener("click", function(){menuGeneral.hideMenuGeneral();});
}
