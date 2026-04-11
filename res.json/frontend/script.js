console.log("JavsScript is running.....")

fetch("http://localhost:5000/")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("Data has been fetched")
    console.log(data)
})
.then((error)=>{
    console.log("error====>" , error)
})