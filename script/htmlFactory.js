function			createDiv(hElem){
	elem = document.createElement("div");

	if ("height" in hElem)
    	elem.style.height = hElem['height'];
	if ("width" in hElem)
    	elem.style.width = hElem['width'];
	if ("margin" in hElem)
    	elem.style.margin = hElem['margin'];
	if ("display" in hElem)
    	elem.style.display = hElem['display'];
	if ("bgColor" in hElem)
    	elem.style.backgroundColor = hElem['bgColor'];
	if ("pos" in hElem)
    	elem.style.position = hElem['pos'];
	if ("margLeft" in hElem)
    	elem.style.marginLeft = hElem['margLeft'];
	if ("margTop" in hElem)
    	elem.style.marginTop = hElem['margTop'];
	if ("op" in hElem)
    	elem.style.opacity = hElem['op'];
	if ("float" in hElem)
		elem.style.cssFloat = hElem['float'];
	if ("left" in hElem)
		elem.style.left = hElem['left'];
	if ("top" in hElem)
		elem.style.top = hElem['top'];
	if ("border" in hElem)
		elem.style.border = hElem['border'];
	if ("zInd" in hElem)
		elem.style.zIndex = hElem['zInd'];
	return (elem);
}

function			createInput(hElem){
	elem = document.createElement("input");

	if ("holder" in hElem)
		elem.placeholder = hElem['holder'];
	if ("type" in hElem)
		elem.type = hElem['type'];
	if ("id" in hElem)
		elem.id = hElem['id'];
	if ("name" in hElem)
		elem.name = hElem['name'];
	if ("width" in hElem)
		elem.style.width = hElem['width'];
	if ("height" in hElem)
		elem.style.height = hElem['height'];
	if ("fSize" in hElem)
		elem.style.fontSize = hElem['fSize'];
	return (elem);
}