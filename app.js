
let selectedSeat = null;

window.sendOTP = () => {
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {}, auth);
  signInWithPhoneNumber(auth, "+66"+phone.value.slice(1), window.recaptchaVerifier)
    .then(r => window.confirmationResult = r);
};

window.verifyOTP = () => {
  confirmationResult.confirm(otp.value).then(() => location.href="home.html");
};

window.selectSeat = n => {
  selectedSeat = n;
  alert("เลือกเบาะ "+n);
};

window.confirmSeat = () => {
  if(!selectedSeat) return alert("เลือกเบาะก่อน");
  alert("จองเบาะ "+selectedSeat+" เรียบร้อย");
};

window.logout = () => {
  auth.signOut().then(()=>location.href="index.html");
};
