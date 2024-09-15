function calculateEllipseArea() {
    const ellipsoneA = getInputValueById('ellipsone-a');
    const ellipsoneB = getInputValueById('ellipse-b');


    const area = 3.14 * ellipsoneA * ellipsoneB;
    setInnerTextById('ellipse-area', area);
}


