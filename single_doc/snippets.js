// Random change color of an element

function changeColor() {
    let a = [];
    while (a.length < 3) {
        a.push(Math.floor(Math.random() * 256));
    }
    document.getElementById('').style.color = 'rgb(' + a + ')';
}

// A function to return random number from min to max

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to return sum of 2 numbers from min to max

function sum(num1, num2) {
    let total = 0;
    while (num1 <= num2) {
        total += num1;
        num1++;
    }
    return total;
}

// factorial of a number

function fac(num) {
    if (num == 0) {
        return 1;
    } else {
        return fac(num - 1) * num;
    }
}