const mainLi = document.querySelector("main li");

console.log("This the main li:", mainLi);

document.querySelectorAll("main li").forEach(iteam => iteam.style.backgroundColor = "pink");

console.log("Color changed!");

document.querySelectorAll("main li:last-child").forEach(iteam => iteam.style.backgroundColor = "red");

console.log("Color changed for all last child!");