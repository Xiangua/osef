var menuGeneral;
var menuSoc;
var pageGroupe;
var pageLogin;
var pageProd;
var	pageHV;
var pageRH;
var pageCompt;

document.addEventListener("DOMContentLoaded", function() {
	menuGeneral = new MenuGeneral();
	menuSoc = new MenuSoc();
	pageLogin = new Login();
	pageGroupe = new Groupe();
	pageProd = new MenuProd();
	pageHV = new HotelVente();
	pageRH = new PageRH();
	pageCompt = new PageCompta();
	pageLogin.showLogin();
});