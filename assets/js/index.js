const nameElement = document.querySelector("span.name")

let letterNameNum = 0;
const name = "Miguel Tibincoski!"
setInterval(() => {
  if (letterNameNum  == name.length) return;
    nameElement.insertAdjacentHTML("beforeend", `${name[letterNameNum]}`);
    console.log(nameElement.innerHTML || "" + name[letterNameNum])
    letterNameNum++;
}, 50)
