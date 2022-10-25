/--- Get Form Values ---/
const form = document.querySelector('#generate-form');
const qrContent = document.querySelector("#qr-content")
const qrGenerated = document.querySelector('#qrcode');

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

/--- Image Input ---/

const imageInput = document.querySelector("#image-input");
let imageUrl = ''
imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        imageUrl = uploaded_image
    });
    reader.readAsDataURL(this.files[0]);
});

/--- Form Submission ---/
const onGenerateSubmit = (e) => {

    e.preventDefault();

    clearUI()

    const url = document.querySelector('#url-input').value
    const size = document.querySelector('#size-input').value

    console.log(url, size)

    if (url === '') {
        alert('Please enter a URL')
    } else {
        showSpinner()
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size)
            setTimeout(() => {
                document.querySelector("#uploaded-img").style.backgroundImage = `url(${imageUrl})`;
                // /--- Add Logo to Canvas ---/
                // let canvas = document.querySelector("#qrcode canvas");
                // let ctx = canvas.getContext('2d');
                // ctx.drawImage(
                //     imageUrl, 50, 50
                // );

                /--- Save Button ---/
                const saveUrl = qrGenerated.querySelector('img').src
                createSaveBtn(saveUrl)
            }, 50)

        }, 1000);
    }
}

/--- Clear QR Code --- /
const clearUI = () => {
    qrGenerated.innerHTML = "";
}

/--- Save QR Image ---/
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'save-btn';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    qrGenerated.appendChild(link);
}

hideSpinner()


document.querySelector("#qrForm button").addEventListener('click', onGenerateSubmit)