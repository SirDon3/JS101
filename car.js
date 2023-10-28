

class Car {
    constructor(
        // Parameters:
        brand,
        colour,
        type,
        headLightsOn
    ){
        // Properties:
        this.brand = brand;
        this.colour = colour;
        this.type = type;
        this.headLightsOn = headLightsOn;
    }

        //Methods:
    toggleLight(lightStatus) {
        this.headLightsOn = lightStatus;
    }

    changeName(newName) {
        this.name = newName;
    }

    changeColour(newColour) {
        this.colour = newColour;
    }

    changetype(newType) {
        this.type = newType;
    }

}

export default Car;
