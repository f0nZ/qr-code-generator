function generateQR() {
    // Get user input
    var data = document.getElementById("dataInput").value;
  
    // // Get QR code container element
    // var qrCodeContainer = document.getElementById("qr-code-container");
  
  //   // Clear previous QR code (optional)
  //   qrCodeContainer.innerHTML = "";
  
  //   // Create new QR code object with qrcode.js
  //   var qrcode = new QRCode(qrCodeContainer, {
  //     text: data,
  //     width: 256,
  //     height: 256,
  //     colorDark : "#000000",
  //     colorLight : "#ffffff",
  //     errorCorrectionLevel: "H",
  //   });
  // }

  const qrCode = new QRCodeStyling({
    width: 256,
    height: 256,
    type: "png",
    data: data,
    image: "https://www.marquesalmeida.com/cdn/shop/files/white.png",
    dotsOptions: {
        color: "#000",
    },
    backgroundOptions: {
        color: "#FF0000",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        imageSize: 0.5
       
    }
  });
  
  qrCode.append(document.getElementById("qr-code-container"));
  // qrCode.download({ name: "qr", extension: "svg" });
}