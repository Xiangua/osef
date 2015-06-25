function			Soc(nb){
	this.id = 0 + nb;
	this.ligneCnt = 0;
	this.emp = {};
	this.ligneTab = [];

	this.newLigne = function () {
		this.ligneCnt++;
	}
}