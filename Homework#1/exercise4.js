$(document).ready(function(){
    let input1 = $(`#textInput`);

    let input2 = $(`#colorInput`);

    let input3 = $(`#fontInput`);

    let button = $(`#button`);


    let error = $(`#message`);

    button.click(function(){
        let text = input1[0].value;
        let color = input2[0].value.toLowerCase();
        let fontSize = input3[0].value.toLowerCase(); 
        if(text !== '' && fontSize !== '') {
            $(`<h1>${text}</h1>`).insertAfter("#Header").css("color",`${color}`).css("fontSize", `${fontSize}`);

        }
        else {
            error.text(`Invalid input`).css("color", "green");
        }
        input1[0].value = '';
        input2[0].value = '';
        input3[0].value = '';
    })
})
