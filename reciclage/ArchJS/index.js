type Dni = number;

interface Persona{
	altura:number
	adad: number;
	apellido: string;
	dni: Dni;

}





















// const  url = 'img/cov.jpg';

// const img = document.getElementById('huge-image');
// const loadButton = document.getElementById('load');
// const stopButton = document.getElementById('stop');

// let controller

// function startLoading() {
// 	loadButton.disabled = true;
// 	loadButton.innerText = 'loading...';
// 	stopButton.disabled = false;
// }

// function stopleading() {
// 	loadButton.disabled = false;
// 	loadButton.innerText = 'Load HUGE Image';
// 	stopButton.disabled = true;
// }


// loadButton.onclick = async function() {
// 	startLoading();

//   controller = new AbortController()

//  const response = await fetch(url, {signal: controller.signal });
//  const blob = await response.blob();
//  const imgUrl = URL.createObjectURL(blob);
//  img.src = imgUrl;


// 	stopLoading();
//  };

// stopButton.onclick = function() {
// 	controller.abort();
//   stopLoading();
// };