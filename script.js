const car = {
    brand: "BMW",
    colour: "White",
    type: "Sedan",
    headLighsOn: false,
    toggleHeadLight: function (headLighsStatus){
        this.headLighsOn = headLighsStatus;
    }, 
};

console.log(car);