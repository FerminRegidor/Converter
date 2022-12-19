/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const buttonEl = document.getElementById("convert-el")
let lenghtEl = document.getElementById("lenght-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let replaceEl = ""

buttonEl.addEventListener("click", function() {
    lenghtEl.innerHTML = ""
    volumeEl.innerHTML = ""
    massEl.innerHTML = ""
    console.log("sexo")
    const inputEl = document.getElementById("inpt-num").value
    
    let resultLenMeters = Number(inputEl) * 3.281
    let resultVolLiters = Number(inputEl) * 0.264
    let resultMasKilograms = Number(inputEl) * 2.204
    let resultLenFeet = Number(inputEl) * 0.304
    let resultVolGallons = Number(inputEl) * 3.785
    let resultMasPounds = Number(inputEl) * 0.453
    
    lenghtEl.innerText = `${inputEl} meters = ${resultLenMeters} feets | ${inputEl} feet = ${resultLenFeet} meters`
    
    volumeEl.innerText = `${inputEl} liters = ${resultVolLiters} gallons | ${inputEl} gallons = ${resultVolGallons} liters`
    
    massEl.innerText = `${inputEl} kilograms = ${resultMasKilograms} pounds | ${inputEl} pounds = ${resultMasPounds} kilograms`
})