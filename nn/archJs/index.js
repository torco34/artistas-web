// inicio//


window.onload = function () {
	canvas = document.getElementById("micanvas");
	if (canvas && canvas.getContext) {
		ctx = canvas.getContext('2d');
		if (ctx) {
			x = canvas.width / 2;
			mensaje("INVASORES");
			imgNave = new Image();
			imgOnv  = new Image();
			imgOnv.src = "img/onv.png";
			imgNave.src = "img/nave.png";
			imgNave.onload = function () {
				nove = new nave(0);
			}
			imgOnv.onload = function () {
				for (var i = 0; i < 5; i++) {
					for (var j = 0; j < 10; j++) {
						ovnis_array.push(new Enemigo (100 + 40 * j, 30 + 45 * i));
					}
				
		          }
		          setTimeout(anima, 1500);
		          disparoEnemigo = setTimeout(disparoEnemigo, tiempoDisparo);
			}

		}else {
			alert("error al cargar tu context");

		}
	}
}
/*listner*/
