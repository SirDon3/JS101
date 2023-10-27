const car = {
    brand: "BMW",
    colour: "White",
    type: "Sedan",
    headLighsOn: false,
    toggleHeadLight: function (headLighsStatus){
        this.headLighsOn = headLighsStatus;
    }, 
    ChangeBrand: function (brandName){
        this.brand = brandName;
    },
    ChangeColour: function (changedColour){
        this.colour = changedColour;
    },
    ChangeType: function (changedType){
        this.type = changedType;
    },

};

console.log(car);