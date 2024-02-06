function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  
  const num1 = 3;
  const num2 = 5;
  const operator = 'multiply';
  let result = false;
  
  function operate(num1, num2, operator) {
    if (operator === 'add') {
      return add(num1, num2);
    } else if (operator === 'subtract') {
      return subtract(num1, num2);
    } else if (operator === 'multiply') {
      return multiply(num1, num2);
    } else if (operator === 'divide') {
      return divide(num1, num2);
    }
  }
  
  function convertOperation(operation) {
    if (operation === 'add') {
      return '+';
    } else if (operation === 'subtract') {
      return '-';
    } else if (operation === 'multiply') {
      return '*';
    } else if (operation === 'divide') {
      return '/';
    } else if (operation === '+') {
      return 'add';
    } else if (operation === '-') {
      return 'subtract';
    } else if (operation === '*') {
      return 'multiply';
    } else if (operation === '/') {
      return 'divide';
    }
  }
  
  function evaluateOperation(str) {
    const splitStr = str.split(' ');
    const num1 = parseInt(splitStr[0]);
    const num2 = parseInt(splitStr[2]);
    const operation = convertOperation(splitStr[1]);
    if (splitStr.length === 3) {
      return Math.round(Math.round(operate(num1, num2, operation)));
    } else {
      return false;
    }
  }
  
  const numBtns = document.querySelectorAll('.num');
  const operationBtns = document.querySelectorAll('.operation');
  const equalBtn = document.querySelector('.equal');
  const clearBtn = document.querySelector('.clear');
  
  numBtns.forEach((num) => {
    num.addEventListener('click', function (e) {
      const calcDisplay = document.querySelector('.calculation');
      const calcText = calcDisplay.textContent;
      const lastChar = calcText.charAt(calcText.length - 1);
      if (calcDisplay.textContent === '0' || result === true) {
        calcDisplay.textContent = e.target.id;
        result = false;
      } else if (typeof parseInt(lastChar) === 'number') {
        calcDisplay.textContent += e.target.id;
      }
    });
  });
  
  operationBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const calcDisplay = document.querySelector('.calculation');
      const calcText = calcDisplay.textContent;
      const lastChar = calcText.charAt(calcText.length - 1);
      if (lastChar === ' ') {
        calcDisplay.textContent = calcText;
      } else if (!(typeof parseInt(lastChar) === 'number')) {
        calcDisplay.textContent = calcText;
      } else if (calcDisplay.textContent.split(' ').length === 3) {
        calcDisplay.textContent =
          evaluateOperation(calcDisplay.textContent) +
          ' ' +
          convertOperation(e.target.id) +
          ' ';
        result = false;
      } else {
        calcDisplay.textContent += ' ' + convertOperation(e.target.id) + ' ';
      }
    });
  });
  
  equalBtn.addEventListener('click', function (e) {
    const calcDisplay = document.querySelector('.calculation');
    const calcText = calcDisplay.textContent;
    const lastChar = calcText.charAt(calcText.length - 1);
    if (lastChar === ' ') {
      return calcText;
    } else if (!(calcDisplay.textContent.split(' ').length === 3)) {
      return calcText;
    } else {
      calcDisplay.textContent = evaluateOperation(calcDisplay.textContent);
      result = false;
    }
  });
  
  clearBtn.addEventListener('click', function () {
    const calcDisplay = document.querySelector('.calculation');
    calcDisplay.textContent = '0';
  });