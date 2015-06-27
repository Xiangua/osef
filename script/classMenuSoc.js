function			MenuSoc(){
	this.prod = document.getElementById("buttonProd");
	this.HV = document.getElementById("ButtonHV");
	this.RH = document.getElementById("ButtonRH");
	this.compta = document.getElementById("ButtonCompta");
	this.soc = {};

	this.showProd = function(){
		this.resetMenu();
		this.prod.style.backgroundColor = "red";
		pageProd.showProd(menuSoc.soc);
	}

	this.showHV = function(){
		this.resetMenu();
		this.HV.style.backgroundColor = "red";
	}

	this.showRH = function(){
		this.resetMenu();
		this.RH.style.backgroundColor = "red";
	}

	this.showCompta = function(){
		this.resetMenu();
		this.compta.style.backgroundColor = "red";
	}


	this.resetMenu = function(){
		this.prod.style.backgroundColor = "white";
		this.HV.style.backgroundColor = "white"; 
		this.RH.style.backgroundColor = "white"; 
		this.compta.style.backgroundColor = "white";
	}

	this.prod.addEventListener("click", function(){menuSoc.showProd();});
	this.HV.addEventListener("click", function(){menuSoc.showHV();});
	this.RH.addEventListener("click", function(){menuSoc.showRH();});
	this.compta.addEventListener("click", function(){menuSoc.showCompta();});
}