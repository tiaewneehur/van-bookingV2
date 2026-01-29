
let confirmationResult;
let selectedSeat = null;

function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

window.onload = ()=>{
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha',
    { size:'invisible' }
  );
};

function sendOTP(){
  let phone = document.getElementById('phone').value;
  auth.signInWithPhoneNumber("+66"+phone.substring(1), recaptchaVerifier)
    .then(res=>{
      confirmationResult = res;
      alert("ส่ง OTP แล้ว");
    });
}

function verifyOTP(){
  confirmationResult.confirm(document.getElementById('otp').value)
    .then(()=>{
      go('home');
      loadSeats();
    });
}

// ---------- SEATS ----------
function loadSeats(){
  const box = document.getElementById('seats');
  box.innerHTML='';
  for(let i=1;i<=10;i++){
    const d=document.createElement('div');
    d.className='seat';
    d.innerText='ที่นั่ง '+i;
    d.onclick=()=>selectSeat(i);
    box.appendChild(d);
  }

  db.collection("seats").onSnapshot(snap=>{
    snap.forEach(doc=>{
      const seat = doc.id;
      const el=[...box.children][seat-1];
      el.classList.add('booked');
      el.innerText=`ที่นั่ง ${seat}\n(${doc.data().nickname})`;
    });
  });
}

function selectSeat(no){
  selectedSeat=no;
  document.getElementById('form').style.display='block';
}

function confirmSeat(){
  const data={
    fullname:fullname.value,
    nickname:nickname.value,
    tel:tel.value,
    line:line.value,
    uid:auth.currentUser.uid
  };

  db.collection("seats").doc(String(selectedSeat)).set(data)
    .then(()=>{
      alert("จองสำเร็จ");
      document.getElementById('form').style.display='none';
    });
}
