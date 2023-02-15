let array = ["pera", "jaja", 666, "Rich"];

document.write (array[2], "<br> <br>")



let PC = {
    CPU: "I5 10400F",
    GPU: "RTX 3060",
    Ram: "16 GB",
    PSU: "750W",
};

//document.write (PC["CPU"]);

for(component in PC) {
    console.log(component);
    component = PC[component];
    console.log(component);
    document.write(component + "<br>")
}