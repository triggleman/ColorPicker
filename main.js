console.log( "its runniing");


var blueBtn = document.querySelector(".bluebtn");

var redBtn = document.querySelector(".redbtn");



blueBtn.addEventListener("click", function () {
    var body = document.querySelector("body").style.backgroundColor = "blue";
});

redBtn.addEventListener("click", function () {
    var body = document.querySelector("body").style.backgroundColor = "red";
})



