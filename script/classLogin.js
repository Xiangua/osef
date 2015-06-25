function		Login(){
	var loginPage = document.getElementById("login");
	var divConection = createDiv({"height": "40%", "width": "50%", "bgColor": "yellow", "pos": "absolute", "margin": "25%"});
	var divLogin = createDiv({"height": "18%", "width": "98%", "bgColor":"white", "margTop": "1%", "margLeft": "0.5%", "pos": "relative"});
	var divMdp = createDiv({"height": "18%", "width": "98%", "bgColor":"white", "margTop": "1%", "margLeft": "0.5%", "pos": "relative"});
	var divConect = createDiv({"height": "16%", "width": "98%", "bgColor":"white", "margLeft": "1%", "margTop": "5%", "pos": "relative", "border": "1px solid black"});
	var divInscription = createDiv({"height": "12%", "width": "90%", "bgColor":"white", "margTop": "5%", "margLeft": "5%", "pos": "relative"});
	var loginInput = createInput({"holder": "Login", "type": "text", "name": "loginName", "id": "loginInput", "height": "100%", "width": "100%", "fSize": "5vh"});
	var passwordInput = createInput({"holder": "Password", "type": "password", "name": "password", "id": "loginInput", "height": "100%", "width": "100%", "fSize": "5vh"});

	divLogin.appendChild(loginInput);
	divMdp.appendChild(passwordInput);
	divConect.innerHTML = "Sign In";
	divConect.style.paddingTop = "3%";
	divConect.style.textAlign = "center";
	divConect.style.fontSize = "5vh";
	divInscription.innerHTML = "Sign up";
	divInscription.style.paddingTop = "2%";
	divInscription.style.textAlign = "center";
	divInscription.style.fontSize = "3vh";
	divConection.appendChild(divLogin);
	divConection.appendChild(divMdp);
	divConection.appendChild(divConect);
	divConection.appendChild(divInscription);
	loginPage.appendChild(divConection);
	this.logName = "";
	var mdp = "";

	this.showLogin = function(){
		loginPage.style.display = "inline-block";

	}

	this.hideLogin = function(){
		loginPage.style.display = "none";
	}
	
	this.logIn = function(){
		if (loginInput.value == "" || passwordInput == "")
			return ;
		else{
			menuGeneral.hideMenuGeneral();
			pageLogin.hideLogin();
			pageGroupe.showGroupe();
		}
	}

	this.logOut = function(){

	}
	divConect.addEventListener("click", function(){pageLogin.logIn();});
}