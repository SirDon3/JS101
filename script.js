function trySomething (a, b){
    let c = a + b;
    return c
} 

function getIteam (name) {

    let newClass = name;
    let viewIteam = document.querySelector("main").classList.add(newClass);
    return viewIteam

}

const newMathsTry = function (a, b){

    let c = a * b;

    return c;


}
console.log("Lets do simple Maths:", trySomething(6, 6))
getIteam("tryMe")
console.log("Lets do simple Maths again:", newMathsTry(2, 6))
console.log(document.querySelector("main"))

