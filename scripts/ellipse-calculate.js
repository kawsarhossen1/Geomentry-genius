function calculateEllipseArea() {
    const ellipsoneA = getInputValueById('ellipsone-a');
    const ellipsoneB= getInputValueById('ellipse-b');
    

    const area = 3.14 * ellipsoneA  * ellipsoneB;
    setInnerTextById('ellipse-area', area);
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