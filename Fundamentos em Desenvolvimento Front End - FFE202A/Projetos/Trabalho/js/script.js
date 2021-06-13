function getGroupMembers() {
	const aMembers = [
		'Felipe Augusto de Almeida Lima',
		'Antônio Luiz de Carvalho Damous',
		'João Victor de Oliveira',
		'Fabricio Brandi',
	];
	return aMembers.sort();
}

function getFullName(...aName) {
	return aName.join(' ');
}

function transform(array) {
	return array.map(n => {
		return n / 10 + 1;
	});
}

function onlyNumbersFrom(value) {
	return value
		.split('')
		.filter(item => {
			return !isNaN(item) && item !== ' ';
		})
		.join('');
}

console.log(getGroupMembers());
console.log(getFullName('Felipe', 'Augusto', 'de', 'Almeida', 'Lima'));
console.log(transform([10, 20, 30, 40, 50]));
console.log(transform([61, 72, 83, 94]));
console.log(onlyNumbersFrom('1234.3423 2423.233'));
console.log(onlyNumbersFrom('1234.3423 dsadas ~~~~~~2423.233'));
