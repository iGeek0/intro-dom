console.log("Entro index.js");


const btnBlue = document.getElementById("btnBlue");


// btnBlue.addEventListener("click", function () {
//     console.log("Click en el boton azul!!!!");
// });

function clickBotonAzul() {
    console.log("Click en el boton azul!!!!");
}

function overButtonAzul() {
    alert("Entro a over de boton Azul.");
}

function changeBackGroundColorPage(color) {
    document.body.style.backgroundColor = color;
}

btnBlue.addEventListener("click", ()=> {
    changeBackGroundColorPage("blue")
});

btnBlue.addEventListener("mouseover", overButtonAzul);