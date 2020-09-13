function printForm(e) {
    var keyBox = document.search.key;
    var val = keyBox.value;
    var divBlock = document.getElementById("divBlock");
    var pElement = document.createElement("p");
    pElement.textContent = val;
    divBlock.appendChild(pElement);
    keyBox.value = "";
}
var printButton = document.search.print;
printButton.addEventListener("click", printForm);