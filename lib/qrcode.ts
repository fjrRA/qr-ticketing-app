import * as QRCode from 'qrcode';  // Tetap menggunakan import seperti yang direkomendasikan

export async function generateQRCode(data: string): Promise<string> {
  const options = {
    errorCorrectionLevel: 'H',  // Level koreksi error
    width: 300,                 // Ukuran QR code
  };

  try {
    // Menggunakan QRCode.toDataURL dengan dua argumen yang benar
    const qrCodeUrl = await QRCode.toDataURL(data, options); 
    console.log("Generated QR Code URL:", qrCodeUrl); // Debug QR Code yang dihasilkan

    return qrCodeUrl;
  } catch (err) {
    console.error("Error generating QR Code:", err); // Log jika terjadi error
    throw new Error(`Failed to generate QR code: ${err}`);
  }
}
