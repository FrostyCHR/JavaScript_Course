const href = document.querySelector(".data__href");
const protocol = document.querySelector(".data__protocol");
const hostname = document.querySelector(".data__hostname");
const pathname = document.querySelector(".data__pathname");

const array = [href, protocol, hostname, pathname];
array.forEach(element => element.firstElementChild.style.fontWeight = "700");

href.appendChild(document.createTextNode(window.location.href));
protocol.appendChild(document.createTextNode(window.location.protocol));
hostname.appendChild(document.createTextNode(window.location.hostname));
pathname.appendChild(document.createTextNode(window.location.pathname));