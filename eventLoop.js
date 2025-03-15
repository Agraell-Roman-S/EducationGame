console.log("should be first");

let stt = setTimeout(()=>console.log("should be fourth"), 0);


Promise.resolve().then(()=>{
    console.log("should be second")
})

queueMicrotask(()=>{
    console.log ("should be treed")
})

