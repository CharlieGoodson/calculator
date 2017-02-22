// --- Определения переменных --- //

var numbers = document.querySelectorAll('.number'),
	operations = document.querySelectorAll('.operation'),
	decimal = document.getElementById('decimal'),
	clearBtns = document.querySelectorAll('.clear_btn'),
	display = document.getElementById('display'),
	result = 0,
	isNewNumber = false,
	isDecimal = false,
	symbolOper = '';

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
	if (result === 'error') {
		return;
	};
	if (isNewNumber) {
		display.value = number;
		isNewNumber = false;
	} else {
		if (display.value === '0') {
			display.value = number;
		} else {
		display.value += number;
		};
	};
};

function operationPress(symbol) {
	if (result === 'error') {
		return;
	};
	var current = parseFloat(display.value);
	if (isNewNumber) {
		symbolOper = symbol;
	} else {
		isNewNumber = true;
		isDecimal = false;
		if (symbolOper === '+') {
			result += current;
		} else if (symbolOper === '-') {
			result -= current;
		} else if (symbolOper === '*') {
			result *= current;
		} else if (symbolOper === '/') {
			if (current === 0) {
				result = 'error';
			} else {
				result /= current;
			};
		} else { 
			result = current;
		};
		display.value = result;
		symbolOper = symbol;
	};
};

function decimalPress() {
	if (result === 'error') {
		return;
	};
	if (isNewNumber) {
		display.value = '0.';
		isNewNumber = false;
		isDecimal = true;
	} else {
		if (!isDecimal) {
			display.value += '.';
			isDecimal = true;
		};
	};
};

function clearPress(id) {
	isNewNumber = false;
	result = 0;
	display.value = '0';
	symbolOper = '';
	isDecimal = false;
};

// --- Конец кода --- //