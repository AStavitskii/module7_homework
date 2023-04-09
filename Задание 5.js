function Device(name){
    this.name = name,
    this.type = "electric"
    }

Device.prototype.plugin = function (plugIn){
    if (plugIn=="+"){
        console.log("I'am pluged in")
            }
    else{console.log("I'am not pluged in", )}
    
}

function DevicePower (name, power){
    this.name = name,
    this. power = power
}

DevicePower.prototype = new Device()

const lamp = new DevicePower("Lamp",12)
const comp = new Device("Comp")

lamp.plugin("+")
lamp.plugin("-")
console.log(lamp, comp)