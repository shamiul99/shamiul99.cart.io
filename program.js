let plusBtn = document.querySelector('.plusBtn');
let minusBtn = document.querySelector('.minusBtn');
let subButton = document.querySelector('.subButton');
let minusSubButton = document.querySelector('.minusSubButton');
let checkOut = document.querySelector('.checkOut');




plusBtn.addEventListener('click',addNew);
minusBtn.addEventListener('click',removeItem);
subButton.addEventListener('click', addSubNew);
minusSubButton.addEventListener('click',removeItemSub);
checkOut.addEventListener('click',function(){
    let totalCheckout = parseFloat(document.querySelector('.totalPrice').textContent);
    alert(`your total Price is ${totalCheckout}`);
});





function addNew(e){
    increaseItem('.plusBtn');

}
/*
--------------------------
subButton Function
----------------------------
*/
function addSubNew(){
    IncreaseSubItem('.subButton')
}

function IncreaseSubItem(SubItem){
    let inputItem = document.querySelector(SubItem).previousElementSibling.value;
    let inputItemSub = parseFloat(inputItem);
    let totalInputsub = inputItemSub + 1;
    increasePriceSub('.subTotalPrice', totalInputsub);
    totalValue()
    document.querySelector(SubItem).previousElementSibling.value = totalInputsub;
}

function increaseItem(id){
    let inputItem = document.querySelector(id).previousElementSibling.value;
    let inputNumber = parseFloat(inputItem);
    let totalNumber = inputNumber + 1;
    increasePrice('.latest_price',totalNumber);
    totalValue()
    document.querySelector(id).previousElementSibling.value = totalNumber;
}



function totalValue(){
    let mainPrice = parseFloat(document.querySelector('.latest_price').textContent);
    let SubPrice = parseFloat(document.querySelector('.subTotalPrice').textContent);
    let totalNowPrice = mainPrice + SubPrice;
    document.querySelector('.subTotal').textContent = totalNowPrice;
    document.querySelector('.totalPrice').textContent = totalNowPrice;
}





function increasePriceSub(IncreaseSub, totalInputsub){
    let fixedPriceSub = 59;
    let totalPrice = fixedPriceSub * totalInputsub;
    document.querySelector(IncreaseSub).textContent = totalPrice;
}



function increasePrice(Iprice,totalNumber){
    let fixedPrice = 1219;
    let totalPrice = fixedPrice * totalNumber;
    document.querySelector(Iprice).textContent = totalPrice;
}

//--------------------------------------------------
//remove number
//--------------------------------------------------

function removeItem(e){
    decreaseItem('.minusBtn')
}


function decreaseItem(decId){
    let decInput = document.querySelector(decId).nextElementSibling.value;
    let decNumber = parseFloat(decInput);
    let totalDec = decNumber - 1;
    decreasePrice('.latest_price')
    decreasePrice('.subTotal');
    decreasePrice('.totalPrice');
    document.querySelector(decId).nextElementSibling.value = totalDec;
}

function decreasePrice(decPriceId){
    let decreasePrice = parseFloat(document.querySelector(decPriceId).textContent);
    let totalNow = decreasePrice - 1219;
    document.querySelector(decPriceId).textContent = totalNow;
}

/*
-----------------------------------
REMOVE NUMBER SUB
-----------------------------------
*/

function removeItemSub(){
    decreaseSubItem('.minusSubButton')
}

function decreaseSubItem(decItemSub){
    let decreaseItemSubNow = document.querySelector(decItemSub).nextElementSibling.value;
    let decNumberSub = parseFloat(decreaseItemSubNow);
    let totalDecreaseItem = decNumberSub - 1;
    decreasePriceSub('.subTotalPrice');
    decreasePriceSub('.subTotal');
    decreasePriceSub('.totalPrice');
    document.querySelector(decItemSub).nextElementSibling.value = totalDecreaseItem;
}

function decreasePriceSub(decreasePriceSub){
    let decreasePriceSubItem = parseFloat(document.querySelector(decreasePriceSub).textContent);
    let totalDecItemNow = decreasePriceSubItem - 59;
    document.querySelector(decreasePriceSub).textContent = totalDecItemNow;
}