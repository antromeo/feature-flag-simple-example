console.log("Hello from feature flag example")
console.log(`env are ${JSON.stringify(process.env)}`)

if(process.env.feature1 === "true"){
    console.log(`feature 1 enabled`)
    console.log(new Date())
}
if(process.env.feature2 === "true"){
    console.log(`feature 2 enabled`)

    console.log(new Date().toUTCString())
}
