const banana = {
    name: "banana",
    price: 100
}

const sweetBanana = Object.create(banana)
sweetBanana.taste = "sweet"

const showKeys = (arg) =>{
    for (let key in arg){
        if (arg.hasOwnProperty(key)){
            console.log(key)
        }

    }
}

showKeys(banana)
showKeys(sweetBanana)