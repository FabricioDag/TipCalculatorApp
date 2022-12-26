const inputBill = document.getElementById("inputBill")
const inputPeople = document.getElementById("inputPeople")
const errorMsg = document.getElementById("error")
var tip = 5

inputBill.addEventListener("change",()=>{
    handleInputs()
})

inputPeople.addEventListener("change",()=>{
    handleInputs()
})

function handleInputs(){

    let bill = inputBill.value
    let people = inputPeople.value
    console.log("handle inputs tip:" + tip)
    

    if(people === "" || people ==="0"){
        inputPeople.classList.add("erro")
        errorMsg.classList.remove("hide")
    }
    else{
        inputPeople.classList.remove("erro")
        errorMsg.classList.add("hide")
        renderTexts(bill,people,tip)
    }
}

//loop adding click event listener and tip% changer
let tipBtns = document.querySelectorAll(".tip-btn")

tipBtns.forEach(tipBtn => {
    tipBtn.addEventListener("click",()=>{
        console.log(tipBtn.innerText)
        clearTipBtns()
        tipBtn.classList.add("selected")
        let tipText = tipBtn.innerText
        tip = tipText.replace("%", "")
        handleInputs(tip)

        return tip
    })
});

//custom input tip value
const customInputTip = document.getElementById("inputCustom")

customInputTip.addEventListener("change",()=>{
    tip = customInputTip.value
    handleInputs()
    console.log("fim custom input e tip = " + tip)
})

//clear the previous selected button
function clearTipBtns(){
    customInputTip.value = ""
    tipBtns.forEach(tipBtn =>{
        tipBtn.classList.remove("selected")
    })
}


//render texts in Tip amount and Total amount per person
function renderTexts(bill, people, tip){
    console.log("chegou em renderTexts: "+ bill +" "+ people +" "+ tip+"%")
    let tipAmount = document.getElementById("idTipAmount")
    tipPerPeople = bill*(tip/100)/people
    tipAmount.innerText = "$"+tipPerPeople.toFixed(2)

    let totalAmount = document.getElementById("idTotalAmount")
    totalAmount.innerText ="$"+ ((bill/people) + tipPerPeople).toFixed(2)
}

function reset(){
    inputBill.value = ""
    inputPeople.value = ""
    customInputTip.value = ""
    
    let tipAmount = document.getElementById("idTipAmount")
    let totalAmount = document.getElementById("idTotalAmount")

    tipAmount.innerText = "$0.00"
    totalAmount.innerText = "$0.00"
}
