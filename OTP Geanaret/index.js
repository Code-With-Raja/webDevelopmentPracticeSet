function sendOtp (){

    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName|('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h2> Your OTP is </h2> ${otp_val}`

    
    Email.send({
        SecureToken : "37cc9f0-90b3-42ec-9e8e-1884f832b2a8",
        To : email.value,
        From : "prabhatkumardas1992@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => {
            is(massage === "OK"){
                alert("OTP sent to your email" + email.value);

                otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp_inp')
            }
        }
       
    );
}