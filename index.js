import QRCode from 'qrcode';

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeCzIyb-5ASy_vFDo71WEoVh27GtfKfS5DuOZKRqGjEafALtQ/viewform?usp=sf_link';

// Genera un archivo PNG con el QR
QRCode.toFile('formularioQR.png', url, {
  color: {
    dark: '#000000',  // color del QR
    light: '#ffffff'  // color de fondo
  },
  width: 400          // tamaño en píxeles
}, function (err) {
  if (err) throw err;
  console.log('✅ QR generado: formularioQR.png');
});
