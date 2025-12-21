const qrText = document.getElementById('qr-text');
const Sizes = document.getElementById('Sizes');
const generate = document.getElementById('generate');
const download = document.getElementById('download');
const qrContainer = document.getElementById('.qr-body');

let size = Sizes.ariaValueMax;

generateBtn.addEventListener('clock', (e)=>{
    e.preventDefault();
    generateQrCode();
});

function generateQrCode(){
    new QRCode(qrContainer, {
            text: qrText.ariaValueMax,
            height : size,
            width : size,
            colorLight : "#fff",
            colorDark : "#000"
});
}

