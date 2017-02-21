// --- Определения переменных --- //

var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimal = document.getElementById('decimal'),
	clearBtns = document.querySelectorAll('.clear_btn'),
	result = document.getElementById('result');

// --- Описание событий --- //

for (var i=0; i<numbers.length; i++) {
	var number = numbers[i];
	number.addEventListener('click', function (e) {
		numberPress(e.target.textContent);
	});
};

for (var i=0; i<operations.length; i++) {
	var operation = operations[i];
	operation.addEventListener('click', function (e) {
		operationPress(e.target.textContent);
	});
};

for (var i=0; i<clearBtns.length; i++) {
	var clearBtn = clearBtns[i];
	clearBtn.addEventListener('click', function (e) {
		clearPress(e.srcElement.id)
	});
};

decimal.addEventListener('click', decimalPress);

result.addEventListener('click', resultPress);


// --- Определения функций --- //

function numberPress(symbol) {
	console.log('Клик по кнопке с цифрой ' + symbol + '!');
};

function operationPress(symbol) {
	console.log('Клик по кнопке ' + symbol + ' !');
};

function decimalPress() {
	console.log('Клик по кнопке с .');
};

function clearPress(id) {
	console.log('Клик по кнопке ' + id + '!');
};

function resultPress() {
	console.log('Клик по кнопке =');
};