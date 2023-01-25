let button = document.getElementsByTagName("button")[0];
let resultElement = document.getElementsByTagName("h1")[0];
let input1 = document.getElementById("fontSize");
let input2 = document.getElementById("textColor");


let changeFontSize = (element, fontSizeValue = 24)  => {
    fontSizeValue = input1.value;
    element.style.fontSize = `${fontSizeValue}px`;
}

let changeTextColor = (element, textColorValue = "black") => {
    textColorValue = input2.value.toLowerCase();
    element.style.color = textColorValue;
}
                                                       // default value for parameters wont work 

button.addEventListener("click", () => {
    if(!input1.value) {
        input1.value = 24;
    }
    if(!input2.value){
        input2.value = "black";
    }
    changeFontSize(resultElement,input1);
    changeTextColor(resultElement,input2);
})


