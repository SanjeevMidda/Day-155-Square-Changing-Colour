

let randomColor = () => {
    return Math.floor(Math.random()*255);
}

let changingColor = () => {
    let block = document.querySelector(".block");
    let color = block.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    block.innerHTML = color;
}

let startInterval = setInterval(changingColor, 1000);