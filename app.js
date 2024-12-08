
const selectedSeatEl=document.getElementById("selected-seat")
const seatBookedEl = document.getElementById("total-booked")
const availableSeatTotalEl = document.getElementById("available-seat")
const totalPriceEl=document.getElementById('total-price')

let selectedSeat = []
let totalPrice =0;
function handleSelectSeat(event){
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
    
    selectedSeatEl.innerHTML += `
    <li class="text-base px-3 text-gray-700 flex justify-between font-normal">
      <span>${event.innerText}</span>
      <span>Economony</span>
      <span>550</span> 
    </li>
    `
    totalPrice += 550;
    totalPriceEl.innerText= totalPrice.toFixed(2);
}