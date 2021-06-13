// const timer = document.querySelector('#timer');
// let count = 0;
// const interval = setInterval(() => {
// 	timer.textContent = ++count;
// 	if (count === 10) {
// 		this.clearInterval(interval);
// 		return;
// 	}
// 	if (count % 5 === 0) {
// 		setTimeout(() => {
// 			timer.textContent = count + ',5';
// 		}, 500);
// 	}
// }, 1000);

window.addEventListener('load', () => {
	console.log(fetch('https://api.github.com/users/felipelimarj84'));

	// fetch('https://api.github.com/users/felipelimarj84')
	// 	.then(res => {
	// 		res.json().then(dados => {
	// 			showDados(dados);
	// 		});
	// 	})
	// 	.catch(error => console.log(error));

	// execDivisionPromise();
	// execDivisionPromiseAsyncAwait();
});

// function showDados(dados) {
// 	const user = document.querySelector('#user');
// 	user.textContent = dados.login + ' - ' + dados.name;
// }

function execDivisionPromise() {
	divPromise(10, 0)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log('Falha na divisão: ' + error);
		});
}

async function execDivisionPromiseAsyncAwait() {
	const division = await divPromise(10, 2);
	console.log(division);
}

function divPromise(a, b) {
	return new Promise((resolve, reject) => {
		if (b === 0) {
			reject('Não é possível dividir por 0');
		}

		resolve(a / b);
	});
}
