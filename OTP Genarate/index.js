function sendOtp(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpvarify');
 

    let otp_val = Math.floor(Math.random() * 1000);

    let emailbody = `<h2> Your OTP </h2> ${otp_val}`;

    Email.send({
        SecureToken : "0c601f46-6484-4480-b340-fd2439626a17",
        To : email.value,
        From : "prabhatkumardas1992@gmail.com",
        Subject : "Email OTP",
        Body : emailbody,
    }).then(
      message =>{
        if(message === "OK"){
          alert("OTP send to your email" + email.value);
          
          otpverify.style.display = "flex";
          const otp_inp = document.getElementById('otp_inp');
          const otp_btn = document.getElementById('otp-btn');

          otp_btn.addEventListener('click', ()=>{
            if(otp_inp.value == otp_val){
              alert("Email address verified......")
            } 
            else{
              alert("Invalid OTP");
            }
          })
        }
      }
    );
}


