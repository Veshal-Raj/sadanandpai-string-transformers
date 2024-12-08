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
    modifyAllCases()
}

inputBox.addEventListener("input", modifyAllCases)

function modifyAllCases() {
    modifyText("lowercase");
    modifyText("uppercase");
    modifyText("camelcase");
    modifyText("pascalcase");
    modifyText("snakecase");
    modifyText("kebabcase");
    modifyText("trim");
}

function modifyText(format) {
    switch (format) {
        case "lowercase":
            pLowerCase.textContent = inputBox.value.toLowerCase();
            break;
        case "uppercase":
            pUpperCase.textContent = inputBox.value.toUpperCase()
            break;
        case "camelcase":
            const camelcaseStr = inputBox.value.split(" ").reduce((acc, curr, index) => {
                return index > 0 ? acc + curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase() : acc + curr;  
            })
            pCamelCase.textContent = camelcaseStr;
            break;
        case "pascalcase":
            const pascalcaseStr = inputBox.value.split(" ").reduce((acc, curr, index) => {
                return acc + curr.charAt(0) + curr.slice(1).toLowerCase();
            })
            pPascalCase.textContent = pascalcaseStr;
            break;
        case "snakecase":
            const snakecaseStr = inputBox.value.split(" ").reduce((acc, curr, index) => {
                return index > 0 ? acc + "_" + curr : acc + curr;
            })
            pSnakeCase.textContent = snakecaseStr;                                                           
            break;
        case "kebabcase":
            const kebabcaseStr = inputBox.value.split(" ").reduce((acc, curr, index) => {
                return index > 0 ? acc + "-" + curr : acc + curr;
            })
            pKebabCase.textContent = kebabcaseStr;
            break;
        case "trim":
            const trimStr = inputBox.value.split(" ").reduce((acc, curr, index) => {
                return acc + curr;
            })
            pTrim.textContent = trimStr;
            break;
        default:
            console.error("Unsupported format:", format);
            break;
    }
}