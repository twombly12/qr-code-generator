/--- Get Form Values ---/
const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

/--- Show Spinner ---/
const showSpinner = () => {
    document.querySelector('#spinner').style.display = 'block'
}

/--- Hide Spinner ---/
const hideSpinner = () => {
    document.querySelector('#spinner').style.display = 'none'
}

/--- Generate QR Code ---/
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    });
};

/--- Form Submission ---/
const onGenerateSubmit = (e) => {
    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

    console.log(url, size)

    if (url === '') {
        alert('Please enter a URL')
    } else {
        showSpinner()
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size)
        }, 1000);
    }
}

hideSpinner()

document.querySelector("#qrForm button").addEventListener('click', onGenerateSubmit)