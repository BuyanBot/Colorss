const colorCode = document.querySelector(".colorCode");

function getTextColor(rgba){
    rgba = rgba.match(/\d+/g);
    if((rgba[0]*0.299)+(rgba[1]*0.587)+(rgba[2]*0.114)>186) {
      return 'black';
    } else {
      return 'white';
    }
}

function getColor() {
    const number = Math.floor(Math.random() * 16777215);
    const code = "#" + number.toString(16);
    document.body.style.backgroundColor = code;
    colorCode.innerHTML = code;
    colorCode.style.color = getTextColor(document.body.style.backgroundColor);
}

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode !== 32) {
      return;
    }
    getColor();
});