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
	if ("op" in hElem)
    	elem.style.opacity = hElem['op'];
	if ("float" in hElem)
		elem.style.cssFloat = hElem['float'];
	if ("left" in hElem)
		elem.style.left = hElem['left'];
	if ("top" in hElem)
		elem.style.top = hElem['top'];
	return (elem);
}