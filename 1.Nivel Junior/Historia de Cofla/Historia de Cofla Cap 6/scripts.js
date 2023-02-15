const keys = document.querySelector(".keys");
const fragment = document.createDocumentFragment();
const parentFragment = document.createDocumentFragment();



for (let i=0; i<20; i++ ) {

    // Article
    const key = document.createElement("article");
    key.classList.add("keys__key");


    // Subtitle
    const random = Math.round(Math.random()*50 + 125);
    const subtitle = document.createElement("h3");
    subtitle.textContent = `Key ${random}`;
    fragment.appendChild(subtitle);

    // img container
    const imgContainer = document.createElement("div");
    imgContainer.className = "keys__imgContainer";


    // img
    const numKey = Math.round(Math.random()*7 +1);
    const img = document.createElement("img");
    img.src = `media/key_${numKey}.png`;
    img.alt = `key ${random}`;
    img.className = "keys__picture"

    imgContainer.appendChild(img);
    fragment.appendChild(imgContainer);

    // Price
    const price = document.createElement("span");
    price.textContent = `${random-100}$`;
    price.className = "keys__price";
    fragment.appendChild(price);

    // Button
    const button = document.createElement("button");
    button.className = "keys__button";
    button.textContent = "Buy Now";
    fragment.appendChild(button);

    // Add
    key.appendChild(fragment);
    parentFragment.appendChild(key);


}

keys.appendChild(parentFragment);


// Al hacer clic en el botón, debería pasar algo del estilo siguiente, pero no sé hacerlo por ahora.

/*

let dataToSend = button.previousSibling.previousSibling.previousSibling.textContent.substring(4,-1);

send(dataToSend);

*/