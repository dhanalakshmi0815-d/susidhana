const mypromise = new Promise((resolve, reject) => {
    const age = true;
    if (age)
        resolve("Sending JSON")
    else
        reject("No json ")
    
})
mypromise.then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })
async function mname() {
    let name = await "Dharshini"
    console.log(name)
}
mname();
console.log("hello")
