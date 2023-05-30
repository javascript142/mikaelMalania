function usernameChecker() {
    let username = document.getElementById("username").value;
    console.log("hello")
    if (username === "keti") {
        document.getElementById('result').innerHTML = `Weclome ${username}!`
    }
    else {
        document.getElementById('result').innerHTML = "Invalid username!"
    }
}

function typeOne() {
    let mainInputValue = document.getElementById('mainInput').value;
    document.getElementById('mainInput').value = mainInputValue + "1";
}

function typeTwo() {
    let mainInputValue = document.getElementById('mainInput').value;
    document.getElementById('mainInput').value = mainInputValue + "2";
}

function typeThree() {
    let mainInputValue = document.getElementById('mainInput').value;
    document.getElementById('mainInput').value = mainInputValue + "3";
}

function plus() {
    let mainInputValue = document.getElementById('mainInput').value;
    if (mainInputValue.length > 0) {    
        document.getElementById('mainInput').value = mainInputValue + "+";
    }
}

function equal() {
    let mainInputValue = document.getElementById('mainInput').value;
    if (mainInputValue.includes("+")) {
        let numbers = mainInputValue.split("+");
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum = sum + parseInt(numbers[i]);
        }
        document.getElementById('mainInput').value = sum;
    }
}