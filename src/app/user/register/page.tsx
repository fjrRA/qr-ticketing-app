// src/app/user/register/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast({ title: 'Berhasil', description: data.message });
        router.push('/login'); // pastikan rute login kamu sesuai
      } else {
        toast({ title: 'Gagal', description: data.message, variant: 'destructive' });
      }
    } catch {
      toast({
        title: 'Terjadi kesalahan',
        description: 'Tidak dapat memproses permintaan saat ini',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Registrasi</h1>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Nama"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            autoComplete="off"
            className="mb-3"
          />
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            autoComplete="off"
            className="mb-3"
          />
          <Input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            autoComplete="off"
            className="mb-5"
          />
          <Button
            className="w-full bg-black hover:bg-gray-800 text-white font-medium rounded"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Memproses...' : 'Daftar'}
          </Button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-4">
          Sudah punya akun? <a href="/login" className="text-blue-600 hover:underline">Login di sini</a>
        </p>

      </div>
    </div>
  );
}
