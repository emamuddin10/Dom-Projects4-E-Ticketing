/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  const value = event.innerText
    if(selectedSeat.includes(value)){
      return alert('Aready Booked')
    }