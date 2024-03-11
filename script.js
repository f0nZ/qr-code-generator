function generateQR() {
    // Get user input
    var data = document.getElementById("dataInput").value;
  
    // Get QR code container element
    var qrCodeContainer = document.getElementById("qr-code-container");
  
    // Clear previous QR code (optional)
    qrCodeContainer.innerHTML = "";
  
    // Create new QR code object with qrcode.js
    var qrcode = new QRCode(qrCodeContainer, {
      text: data,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
    });
  }
  