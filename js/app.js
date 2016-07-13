function toggle(){
	var table = document.querySelector("#slammertable");
	var points = document.querySelector("#points");
	
	if(table.hasAttribute("hidden") == true){
		table.removeAttribute("hidden");
		points.setAttribute("hidden", "");
	} else {
		points.removeAttribute("hidden");
		table.setAttribute("hidden", "");
	}	
}
