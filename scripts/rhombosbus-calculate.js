function calculateDiagonalArea() {
    const diagonaOne = getInputValueById('diagonal-1');
    const diagonaTow = getInputValueById('diagonal-2');
    

    const area = 0.5 * diagonaOne * diagonaTow;
    setInnerTextById('diagonal-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}