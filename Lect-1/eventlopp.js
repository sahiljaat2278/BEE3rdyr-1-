const fs = require('fs')
console.log("start")
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set Immediate callback")
})
fs.readFile("demo.txt",(err,data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
})
console.log("end");
function dosometask(){
    return new Promise((res,rej)=>{
        res("promise chla")
    })
}

dosometask().then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("next tick")
})