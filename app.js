
const selectedSeatEl=document.getElementById("selected-seat")
const seatBookedEl = document.getElementById("total-booked")
const availableSeatTotalEl = document.getElementById("available-seat")
const totalPriceEl=document.getElementById('total-price')
const couponInputEl= document.getElementById('coupon-input')
const couponBtnEl=document.getElementById("coupon-btn")
const hideSeatEl=document.getElementById("hide-seat")
const granTotalEl=document.getElementById("grand-total")

let selectedSeat =[]
let totalPrice =0;
function handleSelectSeat(event){
    const value = event.innerText
    if(selectedSeat.includes(value)){
      return alert("This seat is already booked")
    }
    if(selectedSeat.length>3 ){
      return alert("maximam seat booked")
    }
    console.log(event.innerText)
    event.classList.add("bg-green-400")
    event.classList.add("text-white")

    selectedSeat.push(event.innerText)
    console.log(selectedSeat)

    seatBookedEl.innerText= selectedSeat.length

    const availableSeatValue = parseFloat(availableSeatTotalEl.innerText)
    const newAvailableSeatValue= availableSeatValue-1;
    availableSeatTotalEl.innerText=newAvailableSeatValue
    console.log(typeof availableSeatValue)
    
    // hide selected seat 
    hideSeatEl.classList.add("hidden")



    selectedSeatEl.innerHTML += `
    <li class="text-base px-3 text-gray-700 flex justify-between font-normal">
      <span>${event.innerText}</span>
      <span>Economony</span>
      <span>550</span> 
    </li>
    `
    totalPrice += 550;
    totalPriceEl.innerText= totalPrice.toFixed(2);

    // active coupon
    if(selectedSeat.length>3){

      couponInputEl.removeAttribute('disabled')
      couponBtnEl.removeAttribute('disabled')
    }
}

// coupon button function
document.getElementById("coupon-btn").addEventListener("click", function (){
  const couponInputValue = couponBtnEl.value
  let couponSave= 0;
  console.log(couponSave)

  if(couponInputValue !=="new50" && couponInputValue !=="couple20"){
    alert("YOUR provided input is not valid")
    return
  }

  if(couponInputValue =="new50"){
    couponSave =  totalPrice* .15;
  }
  else if(couponInputValue =="couple20"){
    couponSave = totalPrice* .20;
  }
  
  const grandTotalValue = totalPrice - couponSave;
  granTotalEl.innerText = grandTotalValue.toFixed(2)


})