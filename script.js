function generateQR() {
  // var text = "Device: LG Gram 17\nReference: MA-LT-001"
  var subject =
    "[MA-IT] Device # " +
    document.getElementById("dataInput").value;
  var to = "it@marquesalmeida.com";

  var data =
    "MATMSG:TO:" +
    to +
    ";" +
    "SUB:" +
    subject +
    ";;";

  var qrCodeContainer = document.getElementById("qr-code-container");
  qrCodeContainer.innerHTML = "";

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: data,
    errorCorrectionLevel: "M",
    image: "https://i.ibb.co/JkZpnsy/ma.png",
    dotsOptions: {
      color: "#000",
    },
    backgroundOptions: {
      color: "#fff",
    },
    imageOptions: {
      margin: 5,
      imageSize: 0.5,
    },
  });

  qrCode.append(document.getElementById("qr-code-container"));

  // Download functionality
  const downloadLink = document.getElementById("downloadLink");
  downloadLink.addEventListener("click", () => {
    qrCode.download({ name: "qr", extension: "png" });
  });
}
