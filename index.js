// Write your code here!
/*const main = document.getElementsByTagName("main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent("Abrar is the champion"); */

const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Abrar is the champion";