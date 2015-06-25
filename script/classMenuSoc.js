function			MenuSoc(){
	this.prod = document.getElementById("buttonProd");
	this.HV = document.getElementById("ButtonHV");
	this.RH = document.getElementById("ButtonRH");
	this.compta = document.getElementById("ButtonCompta");

	this.showProd = function(soc){
		this.resetMenu();
		this.prod.style.backgroundColor = "red";
		menuProd.showprod();
	}

	this.showHV = function(soc){
		this.resetMenu();
		this.prod.style.backgroundColor = "red";
	}

	this.showRH = function(soc){
		this.resetMenu();
		this.prod.style.backgroundColor = "red";
	}

	this.showCompta = function(soc){
		this.resetMenu();
		this.prod.style.backgroundColor = "red";
	}


	this.resetMenu = function(soc){
		this.prod.style.backgroundColor = "white";
		this.HV.style.backgroundColor = "white"; 
		this.RH.style.backgroundColor = "white"; 
		this.compta.style.backgroundColor = "white";
	}
	this.prod.addEventListener("click", function(){menuSoc.showProd();});
	this.HV.addEventListener("click", function(){menuSoc.showProdHV();});
	this.RH.addEventListener("click", function(){menuSoc.showRH();});
	this.compta.addEventListener("click", function(){menuSoc.showCompta();});
}