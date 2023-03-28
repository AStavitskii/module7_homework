const banana = {
    name: "banana",
    price: 100
}



const isAKey = (str, obj) =>{
    for (let key in obj){
        if (key==str ) return true
    }
    return false
}

console.log(isAKey("price",banana))
console.log(isAKey("taste",banana))

