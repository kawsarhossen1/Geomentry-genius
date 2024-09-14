function calculateRectangleArea() {
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleText = rectangleLengthInput.value;
    const length = parseFloat(rectangleText);
    console.log(length);

    //get width of the rectangle

    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);
     

    // calculate recangle area

    const area = length * width;
    console.log('area of the rectangle: ', area );


    //display the rectangle area

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}