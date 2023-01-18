
    let input1 = document.getElementById("color");
    let input2 = document.getElementById("fontsize");
    let input3 = document.getElementById("item");
    let result = document.getElementById("result");
    let button = document.getElementsByTagName("button")[0];



    button.addEventListener("click", function(){
        let colorValue = input1.value.toLowerCase();
        let fontsizeValue = input2.value;
        let items = input3.value.split(",");
        if(!colorValue || !fontsizeValue || !items){
            alert("You must enter all the values");
            return;
        }
        let ul = document.createElement("ul");
        ul.style.fontSize = `${fontsizeValue}px`
        ul.style.color = colorValue;
        for(let text of items) {
            let listItem  = document.createElement("li");
            listItem.innerText = text;
            ul.appendChild(listItem);
        }
        result.appendChild(ul);
        input1.value = '';
        input2.value = '';
        input3.value = '';
        
    })



