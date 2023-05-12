const lampOn  = document.getElementById('ligada');
const lampOff = document.getElementById('desligada');
const lamp = document.getElementById('lamp');

function ligada() {

    lamp.src="img/ligada.jpeg"
}

function desligada() {

    lamp.src="img/desligada.jpeg"
}

 lampOn.addEventListener ('click', ligada);
 lampOff.addEventListener('click', desligada);