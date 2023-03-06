const button = document.getElementById("JSmark");

button.addEventListener("click", (e) => {

    const pResults = document.querySelector(".results").firstElementChild.nextElementSibling;
    pResults.innerHTML = "Final mark: "
    const test = document.getElementById("JStest").value;
    const homework = document.getElementById("JShomework").value;
    const project = document.getElementById("JSproject").value;
    let finalMark;

    try {

        if (isNaN(test) || isNaN(homework) || isNaN(project)) {
            throw "One or more values are not numbers.";
        } else if (test > 10 || homework > 10 || project > 10) {
            throw "One or more values are greater than 10.";
        } else if (test == "" || homework == "" || project == "") {
            throw "One or more inputs are empty."
        } else if (test < 0 || homework < 0 || project < 0) {
            throw "One or more values are smaller than 0."
        } else {

            finalMark = (parseInt(test) + parseInt(homework) + parseInt(project)) / 3;
            pResults.innerHTML += Math.round(finalMark) + ".";

            if (Math.round(finalMark) >= 7) {
                pResults.innerHTML += `<span class="results__pass"> Pass. </span>`
            } else {
                pResults.innerHTML += `<span class="results__fail"> Fail. </span>`
            }
        };

    } catch (error) {

        alert(`There is an error: ${error}`);

    };

    e.preventDefault();

});