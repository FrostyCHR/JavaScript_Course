const change = document.getElementById("JSchange");
change.addEventListener("click", changeInfo);

function changeInfo() {
    for (let i = 1; i < 5; i++) {
        const select = document.getElementById(`JSalumno${i}`);
        select.parentElement.innerHTML = select.options[select.selectedIndex].textContent;
    };
};