function			createDiv(hElem){
	var			elem = document.createElement("div");

	if ( "height" in hElem ) {
    	elem.style.height = hElem['height'];
	}
	if ( "width" in hElem ) {
    	elem.style.width = hElem['width'];
	}
	if ( "margin" in hElem ) {
    	elem.style.margin = hElem['margin'];
	}	
	if ( "display" in hElem ) {
    	elem.style.display = hElem['display'];
	}
	if ( "bgColor" in hElem ) {
    	elem.style.backgroundColor = hElem['bgColor'];
	}
	return (elem);
}