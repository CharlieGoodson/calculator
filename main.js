// --- Определения переменных --- //

var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimal = document.getElementById('decimal'),
	clearBtns = document.querySelectorAll('.clear_btn'),
	display = document.getElementById('display'),
	memoryCurrentNumber = 0,
	memoryNewNumber = false,
	memoryPendingOperation = '';

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

// --- Определения функций --- //

function numberPress(number) {
	if (memoryNewNumber) {
		display.value = number;
		memoryNewNumber = false;
	} else {
		if (display.value === '0') {
			display.value = number;
		} else {
		display.value += number;
		};
	};
};

function operationPress(symbol) {
	memoryNewNumber = true;
};

function decimalPress() {
	console.log('Клик по кнопке с .');
};

function clearPress(id) {
	memoryNewNumber = false;
	memoryCurrentNumber = 0;
	display.value = '0';
	memoryPendingOperation = '';
};

// --- Конец кода --- //