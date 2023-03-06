const name = document.querySelector(".send__name");
const email = document.querySelector(".send__email");
const select = document.getElementsByTagName("select")[0];
const error = document.querySelector(".send__error");

const submit = document.querySelector(".send__submit");

/* console.log(select.options[select.selectedIndex].value); */

function comprobar(e) {

    let tryName;
    let tryEmail;
    error.innerHTML = "";


    // Name

    if (name.value.length < 4 || name.value.length > 40) {
        error.innerHTML += "El nombre debe tener entre 4 y 40 caracteres.<br>";
        e.preventDefault(); // Evita que se envie.
    } else {
        tryName = true;
    };


    // Email

    if (email.value.includes("@")) {
        tryEmail = true;
    } else {
        error.innerHTML += "El email debe contener el símbolo @.<br>";
        e.preventDefault(); // Evita que se envie.
    };


    // Selection

    if (select.options[select.selectedIndex].value == "placeholder") { // Así se mira la opción indicada en un select.
        error.innerHTML += "Escoge la materia que hayas suspendido.<br>";
        e.preventDefault(); // Evita que se envie.
    };

};

submit.addEventListener("click", comprobar); // Sin ().