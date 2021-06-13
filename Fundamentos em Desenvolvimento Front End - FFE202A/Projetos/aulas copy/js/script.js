window.addEventListener('load', () => {
	doSpread();
	doRest();
	doDestructuring();
});

function doSpread() {
	const pH = people.results.filter(person => person.name.title === 'mr');
	const pM = people.results.filter(person => person.name.title === 'ms');

	console.log(pH);
	console.log(pM);

	const osDois = [...pM, ...pH, { msg: 'Oi' }];
	console.log(osDois);
}

function doRest() {
	console.log(infiniteSum(1, 2));
	console.log(infiniteSum(1, 2, 1000));
}

function infiniteSum(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring() {
	const first = people.results[0];

	// Repetitivo
	// const username = first.login.username;
	// const password = first.login.password;

	// Destructuring
	const { username, password } = first.login;

	console.log(username);
	console.log(password);
}
