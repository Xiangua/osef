function		Groupe(){
	this.groupe = document.getElementById("groupe");

	this.showGroupe = function(){
		this.groupe.style.display = "inline-block";
	}

	this.hideGroupe = function(){
		this.groupe.style.display = "none";
	}

	this.groupe.addEventListener("click", function(){menuGeneral.hideMenuGeneral();});
}