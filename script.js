const calculator = document.querySelector(".calculator");
const [valueA, valueB, result] = document.querySelectorAll(".input__value")

function calculatePlus() {
    result.value = parseFloat(valueA.value) + parseFloat(valueB.value)
}

function calculateMinus() {
    result.value = parseFloat(valueA.value) - parseFloat(valueB.value)
}

function calculateMultiply() {
    result.value = parseFloat(valueA.value) * parseFloat(valueB.value)
}

function calculateDivision() {
    result.value = parseFloat(valueA.value) / parseFloat(valueB.value)
}

function calculateRemainderOfDivision() {
    result.value = parseFloat(valueA.value) % parseFloat(valueB.value)
}

let submitter = {}
calculator.addEventListener("click", (event) => {
    submitter = event.target
})

calculator.addEventListener("submit", (event) => {
    event.preventDefault()

    switch (submitter.dataset.action) {
        case "plus" : return calculatePlus()
        case "minus" : return calculateMinus()
        case "multiply" : return calculateMultiply()
        case "division" : return calculateDivision()
        case "remainder-of-division" : return calculateRemainderOfDivision()
    }
})
