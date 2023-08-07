let screen = document.querySelector('.screen');
let textField = document.querySelector('#text-field');
let blueBtn = document.querySelector('.blue-btn');
let auxBtn = document.querySelector('.aux-toggle-bg-btn');


function changeBackgroundColor() {
    screen.classList.toggle("blue-bg")
}

function printNumbers() {
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
}

// printNumbers()

blueBtn.addEventListener('click', changeBackgroundColor);


function displayText(event) {
    if (event.keyCode === 13) {
        screen.innerText = textField.value;

    }
}

textField.addEventListener('keyup', displayText)

auxBtn.addEventListener('click', changeBackgroundColor)
auxBtn.addEventListener('click', printNumbers)



// define the function
function add(a, b) {
    let z = a + b; // z = 3 + 5
    console.log('The sum is', z);
}


// Classic for loop
for (let i = 10; i > 0; i -= 3) {
    console.log(i);
}
