import Car from "./car.js";


const myCar = new Car (
    "BMW",
    "Blue",
    "Sedan",
    true,
    
);

console.log(myCar);

console.log("My car's headlight is on:", myCar.headLightsOn);
myCar.toggleLight(false);
console.log("My car's headlight is on:", myCar.headLightsOn);
console.log("This is my Car:", myCar.colour);
myCar.changeColour("Black");
console.log("This is my Car:", myCar.colour);