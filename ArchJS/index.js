let iconAlignJustify = document.querySelector('.icon-align-justify');
let menu = document.querySelector('.lista-container');
let containerMenu = document.querySelector('.menu');
let activador =  true;

iconAlignJustify.addEventListener('click', () => {

if(activador){
	menu.style.left = "0";
	menu.style.transition = "0.5s";

	activador = false;

} else{
	activador = false;

	menu.style.left = "-100%";
	menu.style.transition = "0.5s";

	activador = true;
}


});

// activar el boton dela lista (no funciona)

let enlaces = document.querySelectorAll('.lista li a');
enlaces.forEach( (element) => {
	element.addEventListener('click', (event) => {
			enlaces.forEach( (link) => {
				link.classList.remove('.activo');
			});

			event.target.classList.add('.activo');
	});
});

//efecto del scroll 

let prevScrollPos = window.pageYOffset;
let gotop = document.querySelector('.gotop');

window.onscroll = () => {

	let currenScrollPos = window.pageYOffset;

	if (prevScrollPos > currenScrollPos) {

		containerMenu.style.top = "0";
		containerMenu.style.transition = "0.5s";

	} else {
		containerMenu.style.top = "-60px";
		containerMenu.style.transition = "0.5s";

	}
	prevScrollPos = currenScrollPos;

	//scrol style

	let arriba = window.pageYOffset;

	if (arriba <= 600){

		containerMenu.style.borderBottom = "none";
		gotop.style.right = "-100%";

	}else{

	containerMenu.style.borderBottom = "5px solid #C2185B";
		gotop.style.right = "0";
		gotop.style.transition = "0.5s";
	}
}

gotop.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
let verAbajo = document.querySelector('#abajo');
 verAbajo.addEventListener('click', () => {

 	  document.body.scrollTop = 600;
	document.documentElement.scrollTop = 600;
 } );

 