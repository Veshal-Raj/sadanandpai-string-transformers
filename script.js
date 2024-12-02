let inputBox = document.getElementById("input-box");
let lowerCaseDiv = document.getElementById("lower-case");
let upperCaseDiv = document.getElementById("upper-case");
let camelCaseDiv = document.getElementById("camel-case");
let pascalCaseDiv = document.getElementById("pascal-case");
let snakeCaseDiv = document.getElementById("snake-case");
let kebabCaseDiv = document.getElementById("kebab-case");
let trimDiv = document.getElementById("trim");
let pLowerCase = document.getElementById("lower-case-p");
let pUpperCase = document.getElementById("upper-case-p");
let pCamelCase = document.getElementById("camel-case-p");
let pPascalCase = document.getElementById("pascal-case-p");
let pSnakeCase = document.getElementById("snake-case-p");
let pKebabCase = document.getElementById("kebab-case-p");
let pTrim = document.getElementById("trim-p");


window.onload = () => {
    lowerCase(inputBox.value)
    upperCase(inputBox.value)
    camelCase()
    pascalCase()
    snakeCase()
    kebabCase()
    trim()
}

inputBox.addEventListener("input", modifyAllCases)

function modifyAllCases() {
    lowerCase(inputBox.value)
    upperCase(inputBox.value)
    camelCase()
    pascalCase()
    snakeCase()
    kebabCase()
    trim()
}

function lowerCase(input) {
    pLowerCase.textContent = input.toLowerCase();
}

function upperCase(input) {
    pUpperCase.textContent = input.toUpperCase();
}

function camelCase() {
    let arr = inputBox.value.split(" ");
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            let fLetter = arr[i].charAt(0).toUpperCase();
            let letters = arr[i].slice(1).toLowerCase();
            let fullLetters = fLetter + letters;
            str += fullLetters;
        } else {
            str += arr[i];
        }
    }
    pCamelCase.textContent = str;
}

function pascalCase() {
    let arr = inputBox.value.split(" ");
    let str = "";
    for (const element of arr) {
        let fLetter = element.charAt(0).toUpperCase();
        let letters = element.slice(1).toLowerCase();
        let fullLetters = fLetter + letters;
        str += fullLetters;
    }
    pPascalCase.textContent = str;
}

function snakeCase() {
    let arr = inputBox.value.split(" ");
    let str3 = "";
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            let letters = "_" + arr[i];
            str3 += letters;
        } else {
            str3 += arr[i];
        }
    }
    pSnakeCase.textContent = str3;
}

function kebabCase() {
    let arr = inputBox.value.split(" ");
    let str4 = "";
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            let letters = "-" + arr[i];
            str4 += letters;
        } else {
            str4 += arr[i];
        }
    }
    pKebabCase.textContent = str4;
}

function trim() {
    let arr = inputBox.value.split(" ");
    let str5 = "";
    for (const element of arr) {
        str5 += element
    }
    pTrim.textContent = str5;
}