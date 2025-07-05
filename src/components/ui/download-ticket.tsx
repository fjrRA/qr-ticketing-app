// Tombol download PDF di halaman transaksi
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const DownloadTicketButton = ({ transactionCode }: { transactionCode: string }) => {
  const handleDownload = async () => {
    const response = await fetch(`/api/ticket/pdf?id=${transactionCode}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "tiket.pdf";  // Nama file PDF yang diunduh
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      toast({ title: "Download Gagal", description: "Gagal mengunduh tiket", variant: "destructive" });
    }
  };


  return <Button onClick={handleDownload}>Unduh Tiket</Button>;
};

export default DownloadTicketButton;
