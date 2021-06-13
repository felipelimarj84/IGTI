window.addEventListener('load', () => {
	console.log('start');
	inputName = document.querySelector('#inputName');

	preventFormSubmit();
	activateInput();
	render();
});

var globalNames = ['Felipe', 'Lene', 'Pedro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function preventFormSubmit() {
	function handleFormSubmit(event) {
		event.preventDefault();
	}

	var form = document.querySelector('form');
	form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
	function handleTyping(event) {
		if (event.key === 'Enter' && !!event.target.value && event.target.value.trim() !== '') {
			if (isEditing) {
				globalNames[currentIndex] = event.target.value;
			} else {
				globalNames = [...globalNames, event.target.value];
			}
			isEditing = false;
			render();
		}
	}

	inputName.focus();
	inputName.addEventListener('keyup', handleTyping);
}

function render() {
	function createDeleteButton(index) {
		function deleteName() {
			globalNames = globalNames.filter((name, i) => i !== index);
			// globalNames.splice(index, 1);
			render();
		}

		var button = document.createElement('button');
		button.textContent = 'X';
		button.addEventListener('click', deleteName);
		return button;
	}

	function createSpan(name, index) {
		function editItem() {
			isEditing = true;
			currentIndex = index;
			inputName.value = name;
			inputName.focus();
		}

		var span = document.createElement('span');
		span.textContent = name;
		span.addEventListener('click', editItem);
		return span;
	}

	var divNames = document.querySelector('#names');
	divNames.innerHTML = '';

	var ul = document.createElement('ul');

	for (var i = 0; i < globalNames.length; i++) {
		var element = globalNames[i];

		var li = document.createElement('li');
		var button = createDeleteButton(i);
		var span = createSpan(element, i);

		li.appendChild(button);
		li.appendChild(span);
		ul.appendChild(li);
	}

	divNames.appendChild(ul);
	inputName.value = '';
}
