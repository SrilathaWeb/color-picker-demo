window.onload = function(){
    initColorPicker();
}

function initColorPicker(){
        let colorBox = document.getElementById("color-box");
        let rgb ={
            red: document.getElementById("red"),
            green: document.getElementById("green"),
            blue: document.getElementById("blue"),

        }
        let colorPicker = document.getElementsByClassName("picker");
       // setColorPickerEventListener(colorBox,rgb)
    setCPickerEventList(colorBox,rgb,colorPicker)
}
function setCPickerEventList(element,colors, pickerElements) {
let pickerLen = pickerElements.length;
    for(let i=0;i<pickerLen ;i++){
        pickerElements[i].addEventListener("change", () => {
            console.log(" value: "+ pickerElements[i].value);
            let red= colors.red.value;
            let green= colors.green.value;
            let blue= colors.blue.value;
            setElementBGColor(element,red,green,blue);
            setDisplayValues(red, green, blue);
        })
    }
}
function setDisplayValues(red,green,blue){
    let redVal =document.getElementById("redVal");
    let greenVal =document.getElementById("greenVal");
    let blueVal =document.getElementById("blueVal");
    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}
function setColorPickerEventListener(colorBox,rgb) {
    rgb.red.addEventListener("change", () => {
        console.log("Red value"+ rgb.red.value);
        setElementBGColor(colorBox,rgb.red.value,rgb.green.value,rgb.blue.value);
    })
    rgb.green.addEventListener("change", () => {
        console.log("Green value"+ rgb.green.value);
        setElementBGColor(colorBox,rgb.red.value,rgb.green.value,rgb.blue.value);
    })
    rgb.blue.addEventListener("change", () => {
        console.log("Blue value"+ rgb.blue.value);
        setElementBGColor(colorBox,rgb.red.value,rgb.green.value,rgb.blue.value);
    })
    
}

function setElementBGColor(colorBox,red,green,blue) {
    rgbVal = [red, green, blue].join(',');
    colorBox.style.backgroundColor = "rgb("+rgbVal+")";

}