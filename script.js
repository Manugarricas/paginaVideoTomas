let fotos = Array.from(document.getElementsByClassName("fotico"));

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

fotos.forEach(foto => {
    foto.addEventListener("mousemove", () => {
        foto.setAttribute("style", "background-color: "+generarNuevoColor+";");
    })
})
