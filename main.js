console.log( "its runniing");
for (let i = 0; i < document.querySelectorAll(".sqr").length; i++) {
    document.querySelectorAll(".sqr")[i].addEventListener("click", function (){
        console.log(i)
        
        var colorSquare = this.innerHTML;
        console.log(colorSquare);

        changeBackground(colorSquare);
        console.log(changeBackground(colorSquare));
    }); 
}

function changeBackground(key) {

    switch (key) {
        case "Red":
            document.body.style.backgroundColor = "red";
        break;

        case "Blue":
            document.body.style.backgroundColor = "deepskyblue";
        break;

        case "Green":
            document.body.style.backgroundColor = "green";
        break;

        case "Orange":
            document.body.style.backgroundColor = "orange";
        break;

        case "Purple":
            document.body.style.backgroundColor = "blueViolet";
        break;
    
        default: console.log(colorSquare);

            break;
    }
}


