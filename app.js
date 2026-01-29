
let selectedSeat = null;
let bookedSeats = [];

function go(screen){
  document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));
  document.getElementById(screen).classList.add("active");

  if(screen === "seat") loadSeats();
}

function loadSeats(){
  const box = document.getElementById("seats");
  box.innerHTML = "";

  for(let i=1;i<=9;i++){
    const b = document.createElement("div");
    b.className = "seat";
    b.innerText = i;

    if(bookedSeats.includes(i)){
      b.classList.add("booked");
    }

    b.onclick = () => {
      if(b.classList.contains("booked")) return;

      if(selectedSeat){
        selectedSeat.classList.remove("selected");
      }
      b.classList.add("selected");
      selectedSeat = b;

      const name = prompt("ใส่ชื่อเล่นผู้จอง");
      if(name){
        b.innerText = `${i}\n${name}`;
        b.classList.remove("selected");
        b.classList.add("booked");
        bookedSeats.push(i);
        selectedSeat = null;
      }
    };

    box.appendChild(b);
  }
}
