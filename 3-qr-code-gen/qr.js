const inputQR = document.getElementById("inputQr");
const btnQR = document.getElementById("btnQr");
const imgQR = document.getElementById("qrImg");



btnQR.addEventListener("click" , ()=>{
    const inputValue = inputQR.value;
    console.log(inputValue);

    if(!inputValue){
      return  alert("please paste your URL");
    }
    
        imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        imgQR.alt = `QR code for ${inputValue}`;
    
})