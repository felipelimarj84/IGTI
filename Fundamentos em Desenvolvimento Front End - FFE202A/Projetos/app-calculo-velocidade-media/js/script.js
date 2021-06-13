window.addEventListener('load', start);

var valorFinal = null;
var distancia = null;
var tempo = null;

function start() {
	// Inputs de entrada
	inputDistancia = document.querySelector('#inputDistancia');
	inputTempo = document.querySelector('#inputTempo');

	//Botões de ação
	btnCalcular = document.querySelector('#btnCalcular');
	btnLimpar = document.querySelector('#btnLimpar');

	//Resultado
	divResult = document.querySelector('#divResultado');
	spanResult = document.querySelector('#spanResultado');

	//Error
	divError = document.querySelector('#divError');

	preventFormSubmit();
	render();
}

function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	var form = document.querySelector('#formCalc');
	form.addEventListener('submit', handleFormSubmit);
}

function render() {
	inputDistancia.focus();
	btnLimpar.addEventListener('click', limparForm);
	btnCalcular.addEventListener('click', showResult);

	function limparForm() {
		inputDistancia.value = '';
		inputTempo.value = '';
		divError.classList.remove('block');
		divError.classList.add('none');
		divResult.classList.remove('block');
		divResult.classList.add('none');
		inputDistancia.focus();
	}

	function showResult() {
		if (inputDistancia.value.trim() !== '' && inputTempo.value.trim() !== '') {
			distancia = parseInt(inputDistancia.value.trim());
			tempo = parseInt(inputTempo.value.trim()) / 60; /* transforma para horas */
			valorFinal = distancia / tempo;

			// Verifica se está com casas decimais e limita em duas casas decimais
			if (valorFinal.toString().indexOf('.') !== -1) {
				valorFinal = valorFinal.toFixed(2);
			}

			divResult.classList.remove('none');
			divResult.classList.add('block');
			divError.classList.remove('block');
			divError.classList.add('none');

			spanResult.textContent = valorFinal + ' Km/h';
			inputDistancia.focus();
		} else {
			divError.classList.remove('none');
			divError.classList.add('block');
			divResult.classList.remove('block');
			divResult.classList.add('none');

			inputDistancia.focus();
		}
	}
}
