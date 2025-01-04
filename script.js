const number0 = document.getElementById('number0');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const add = document.getElementById('addition');
const subtract = document.getElementById('subtraction');
const multiplicat = document.getElementById('Multiplication');
const divisie = document.getElementById('division');
const dell = document.getElementById('delete');
const reset = document.getElementById('reset');
const equal = document.getElementById('Equal');
const dot = document.getElementById('dot');
const equiations = document.getElementById('equiation');

const result=0;

let numbers = [];

number0.addEventListener('click', function() {
    equiations.value += 0; // Set the value of the input field
});
number1.addEventListener('click', function() {
    equiations.value += 1; 
});
number2.addEventListener('click', function() {
    equiations.value += 2; 
});
number3.addEventListener('click', function() {
    equiations.value += 3; 
});
number4.addEventListener('click', function() {
    equiations.value += 4; 
});
number5.addEventListener('click', function() {
    equiations.value += 5; 
});
number6.addEventListener('click', function() {
    equiations.value += 6; 
});
number7.addEventListener('click', function() {
    equiations.value += 7; 
});
number8.addEventListener('click', function() {
    equiations.value += 8; 
});
number9.addEventListener('click', function() {
    equiations.value += 9; 
});




multiplicat.addEventListener('click', function() {
    equiations.value +='x';
});
addition.addEventListener('click', function() {
    equiations.value += '+'; 
});
subtract.addEventListener('click', function() {
    equiations.value += '-'; 
});
divisie.addEventListener('click', function() {
    equiations.value += "/"; 
});
dot.addEventListener('click', function() {
    equiations.value += '.'; 
});
dell.addEventListener('click', function() {
    equiations.value = ""; 
});



reset.addEventListener('click', function() {
    equiations.value = ""; 
});

equal.addEventListener('click', function () {
    // Split numbers
    const sanitizedExpression = equiations.value.replace(/x/g, '*');

// Use eval to evaluate the expression
    const result = eval(sanitizedExpression);

    // Update the equiations input with the result
    equiations.value = result;

});


