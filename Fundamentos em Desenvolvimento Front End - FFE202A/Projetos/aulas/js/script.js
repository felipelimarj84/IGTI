window.addEventListener('load', () => {
	doMap();
	doFilter();
	doForEach();
	doReduce();
	doFind();
	doSome();
	doEvery();
	doSort();
	relembrando();
});

function doMap() {
	const nameEmailArray = people.results.map(person => {
		return {
			nome: person.name,
			email: person.email,
		};
	});

	// console.log(nameEmailArray);

	return nameEmailArray;
}

function doFilter() {
	const maior18 = people.results.filter(person => {
		return person.dob.age > 18;
	});

	// console.log(maior18);
}

function doForEach() {
	const mapPeople = doMap();
	// console.log(mapPeople);

	mapPeople.forEach(person => {
		person.nameSize =
			person.nome.title.length + person.nome.first.length + person.nome.last.length;
	});

	// console.log(mapPeople);
}

function doReduce() {
	const totalAges = people.results.reduce((accumulator, current) => {
		return accumulator + current.dob.age;
	}, 0);

	// console.log(totalAges);
}

function doFind() {
	const found = people.results.find(person => {
		return person.location.state === 'waterford';
	});

	console.log('found: ', found);
}

function doSome() {
	const some = people.results.some(person => {
		return person.location.state === 'waterford';
	});

	console.log('some: ', some);
}

function doEvery() {
	//Se todos atendem essa regra
	const every = people.results.every(person => {
		return person.nat === 'IE';
	});

	console.log('every: ', every);
}

function doSort() {
	const mapPeople = people.results
		.map(person => {
			return {
				name: person.name.first,
			};
		})
		.filter(person => {
			return person.name.startsWith('b');
		})
		.sort((a, b) => {
			return a.name.length - b.name.length;
			// return a.name.localeCompare(b.name);
		});
	console.log(mapPeople);
}

function relembrando() {
	const array = ['Felipe', 'Pedro'];
	console.log(array);
	console.log('qtd', array.length);
	console.log(array[0]);

	// forEach
	array.forEach((a, i) => console.log(a, i));
	array.push('Lene');
	console.log(array);

	// map
	var teste1 = array.map(a => {
		return { a: 'teste', b: a };
	});
	console.log('map ', teste1);

	// filter
	var teste = array.filter(a => {
		return a === 'Felipe';
	});
	console.log('filter: ', teste);

	// Remover do Inicio - shift
	const array1 = ['Felipe', 'Pedro'];
	array1.shift();
	console.log(array1);

	// Adicionar ao Inicio - unshift
	const array2 = ['Felipe', 'Pedro'];
	array2.unshift('teste');
	console.log(array2);

	//procurar pelo index
	const array3 = ['Felipe', 'Pedro'];
	console.log(array3.indexOf('Pedro'));

	//remover pelo index
	const array4 = 'Felipe Augusto de Almeida Lima';
	console.log(array4.split(' ', 3).join(' '));
}
