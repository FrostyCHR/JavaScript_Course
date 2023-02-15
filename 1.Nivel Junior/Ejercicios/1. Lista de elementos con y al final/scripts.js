let elements = ["Pedro", "hola", "lala", 5, false, "sí"];

const showlist = list => {
    let listMod = list.slice(0, -1);
    for (element in listMod) {
        if (listMod[element] == listMod[listMod.length - 1]) {
            document.write(`${listMod[element]} `);
        } else {
            document.write(`${listMod[element]}, `);
        }
    }
    document.write(`and ${list.pop()}.`);
}

showlist (elements);