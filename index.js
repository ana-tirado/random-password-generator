const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// DOM
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let copyEl = document.getElementById("copy-el")

// GENERATE PASSWORD
function generatePassword() {
    let passwordOne = ""
    let passwordTwo = ""
    
    for (let i = 0; i < 15; i++) {
        let generatePasswordOne = Math.floor(Math.random()*characters.length)
        let generatePasswordTwo = Math.floor(Math.random()*characters.length)
        
        passwordOne += characters[generatePasswordOne]
        passwordTwo += characters[generatePasswordTwo]
        
        firstPassword.textContent = passwordOne
        secondPassword.textContent = passwordTwo
    }
}

//COPY PASSWORDS
firstPassword.addEventListener("click", copyFirstPassword)
secondPassword.addEventListener("click", copySecondPassword)

function copyFirstPassword() {
    navigator.clipboard.writeText(firstPassword.innerText)
    copyEl.textContent = "First password copied to clipboard succesfully!"
}

function copySecondPassword() {
    navigator.clipboard.writeText(secondPassword.innerText)
    copyEl.textContent = "Second password copied to clipboard succesfully!"
}