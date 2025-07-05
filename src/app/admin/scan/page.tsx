'use client';

import { useState, useRef, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dynamic from "next/dynamic";
import { Html5Qrcode } from "html5-qrcode";

export default function ScanPage() {
  type ValidationResult = {
    visitor_name: string;
    transaction_code: string;
    destination: string; // 👈 tambahkan ini
    timestamp: string;
    used_at?: string | null;
  };


  const [result, setResult] = useState<ValidationResult | null>(null); // Menyimpan hasil validasi
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVerified, setIsVerified] = useState(false); // Menyimpan status verifikasi QR
  const [, setIsLoading] = useState(false); // Status loading saat memvalidasi QR
  const [isCameraActive, setIsCameraActive] = useState(false); // Menandakan apakah kamera aktif
  const qrRef = useRef<HTMLDivElement>(null);
  const [scanner, setScanner] = useState<Html5Qrcode | null>(null);

  // Fungsi untuk memvalidasi QR Code setelah scan
  const validateTicket = async (qrCode: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/validate/${qrCode}`);
      const json = await res.json();

      if (res.ok) {
        setResult(json); // Menampilkan hasil validasi
        setIsVerified(true); // Set status verifikasi
        toast({ title: "Validasi Berhasil", description: json.message });
      } else {
        setIsVerified(false); // Set status gagal
        toast({ title: "Validasi Gagal", description: json.error || "Kode tidak ditemukan", variant: "destructive" });
      }
    } catch {
      setIsVerified(false); // Set status gagal
      toast({ title: "Terjadi kesalahan", description: "Gagal melakukan validasi", variant: "destructive" });
    }
    setIsLoading(false);
  };


  // Fungsi untuk mengaktifkan kamera
  const startScanner = async () => {
    if (!qrRef.current) return;

    const qrScanner = new Html5Qrcode("qr-scanner");
    setScanner(qrScanner); // Set scanner

    try {
      const devices = await Html5Qrcode.getCameras();
      if (devices.length === 0) {
        toast({
          title: "Tidak ada kamera ditemukan",
          description: "Pastikan perangkat memiliki kamera dan izinkan aksesnya.",
          variant: "destructive",
        });
        return;
      }

      const cameraId = devices[0].id;

      // Mulai scanner dan tunggu QR Code berikutnya
      await qrScanner.start(
        cameraId,
        { fps: 10, qrbox: 250 }, // Konfigurasi fps dan ukuran qrbox
        (decodedText) => {
          if (decodedText) {
            validateTicket(decodedText); // Panggil fungsi yang diterima dari parent
            // Tidak menghentikan scanner, biarkan scanner terus berjalan
          }
        },
        () => { /* Tidak ada tindakan yang diperlukan untuk error */ }
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Akses kamera ditolak",
        description: "Izinkan akses kamera melalui ikon gembok di address bar.",
        variant: "destructive",
      });
    }
  };

  // Aktifkan kamera saat tombol ditekan
  const handleStartCamera = () => {
    setIsCameraActive(true); // Menandakan kamera aktif
    startScanner(); // Mulai scanner
  };

  useEffect(() => {
    if (isCameraActive && scanner === null) {
      startScanner(); // Mulai scanner hanya jika kamera diaktifkan dan scanner belum ada
    }

    return () => {
      if (scanner) {
        scanner.stop(); // Berhenti saat komponen dibersihkan
      }
    };
  }, [isCameraActive, scanner]); // Hanya jalankan sekali saat komponen dimuat

  // Pastikan result tidak null sebelum mengakses timestamp
  // const convertedTimestamp = result?.timestamp ? new Date(result.timestamp).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }) : null;

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Scan Tiket</h1>

      {/* Tombol "Aktifkan Kamera" hanya tampil jika kamera belum aktif */}
      {!isCameraActive && (
        <Button className="mb-4" onClick={handleStartCamera}>
          Aktifkan Kamera
        </Button>
      )}

      {/* Menampilkan kamera jika isCameraActive true */}
      {isCameraActive && (
        <div id="qr-scanner" ref={qrRef} className="w-full h-[300px] rounded border mb-20" />
      )}

      {/* Menampilkan hasil validasi jika ada */}
      {result && (
        <Card className="p-4 space-y-2 mt-30">
          <h2 className="text-xl font-semibold">Tiket Terverifikasi</h2>
          <p className="text-muted-foreground">Kode: <span className="font-mono">{result.transaction_code}</span></p>
          <p className="text-muted-foreground">
            Nama Pengunjung: <span className="font-semibold">{result.visitor_name}</span>
          </p>
          <p className="text-muted-foreground">
            Tiket: <span className="font-semibold">{result.destination}</span>
          </p>
          <p className="text-muted-foreground">
            Waktu: {new Date(result.timestamp).toLocaleString('id-ID', {
              dateStyle: 'full',
              timeStyle: 'short',
              timeZone: 'Asia/Jakarta',
            })}
          </p>

          <Badge className="mt-2" variant="default">✅ Valid</Badge>
        </Card>
      )}
    </div>
  );
}
