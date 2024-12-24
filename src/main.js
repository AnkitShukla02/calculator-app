let result = document.getElementById('result');

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    result.value = '';
});

const delBtn = document.getElementById('delete');

delBtn.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
});


const percentBtn = document.getElementById('percent');

percentBtn.addEventListener('click', () => {
    result.value = result.value / 100;
})

const divideBtn = document.getElementById('divide');

divideBtn.addEventListener('click', () => {
    result.value += '/';
});

const sevenBtn = document.getElementById('seven');

sevenBtn.addEventListener('click', () => {
    result.value += '7';
});

const eightBtn = document.getElementById('eight');

eightBtn.addEventListener('click', () => {
    result.value += '8';
});

const nineBtn = document.getElementById('nine');
nineBtn.addEventListener('click', () => {
    result.value += '9';
});

const multiplyBtn = document.getElementById('multiply');

multiplyBtn.addEventListener('click', () => {
    result.value += '*';
});

const fourBtn = document.getElementById('four');

fourBtn.addEventListener('click', () => {
    result.value += '4';
});

const fiveBtn = document.getElementById('five');

fiveBtn.addEventListener('click', () => {
    result.value += '5';
});

const sixBtn = document.getElementById('six');

sixBtn.addEventListener('click', () => {
    result.value += '6';
}); 

const subtractBtn = document.getElementById('subtract');

subtractBtn.addEventListener('click', () => {
    result.value += '-';
}); 

const oneBtn = document.getElementById('one');

oneBtn.addEventListener('click', () => {
    result.value += '1';
});

const twoBtn = document.getElementById('two');

twoBtn.addEventListener('click', () => {
    result.value += '2';
}); 

const threeBtn = document.getElementById('three');  

threeBtn.addEventListener('click', () => {
    result.value += '3';
}); 

const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
    result.value += '+';
});

const zeroBtn = document.getElementById('zero');

zeroBtn.addEventListener('click', () => {   
    result.value += '0';
});

const dotBtn = document.getElementById('decimal');  
dotBtn.addEventListener('click', () => {
    result.value += '.';        

});

const doubleZeroBtn = document.getElementById('double-zero');

doubleZeroBtn.addEventListener('click', () => { 
    result.value += '00';
});

const equalBtn = document.getElementById('equal');

equalBtn.addEventListener('click', () => {  
    result.value = eval(result.value);

});

