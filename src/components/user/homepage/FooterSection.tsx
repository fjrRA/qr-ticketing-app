'use client'

import React from 'react'
import Link from 'next/link'

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Kolom “Tentang Kami” */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tentang Kami</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Baturraden Tourism adalah platform resmi untuk menemukan dan memesan tiket tempat wisata di Baturraden.
            Kami bertujuan memudahkan pengunjung agar bisa menjelajahi keindahan pegunungan dengan nyaman.
          </p>
        </div>

        {/* Kolom “Tautan Cepat” */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/user" className="text-gray-300 hover:text-white text-sm">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/user/destination" className="text-gray-300 hover:text-white text-sm">
                Destinasi
              </Link>
            </li>
            <li>
              <Link href="/user/payment" className="text-gray-300 hover:text-white text-sm">
                Riwayat Pembayaran
              </Link>
            </li>
            <li>
              <Link href="/user/login" className="text-gray-300 hover:text-white text-sm">
                Masuk / Daftar
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom “Kontak” */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Alamat: Jl. Raya Baturraden No.123, Banyumas, Jawa Tengah</li>
            <li>Telepon: (0281) 123-4567</li>
            <li>Email: <a href="mailto:info@baturradentourism.id" className="hover:underline">info@baturradentourism.id</a></li>
          </ul>
        </div>

        {/* Kolom “Ikuti Kami” */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 5.016 3.676 9.167 8.438 9.878v-6.99H7.897v-2.888h2.541v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.888H13.66v6.99C18.424 21.167 22 17.016 22 12z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.415a4.92 4.92 0 0 1 1.757 1.147 4.922 4.922 0 0 1 1.147 1.757c.175.457.36 1.257.415 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.415 2.427a4.92 4.92 0 0 1-1.147 1.757 4.922 4.922 0 0 1-1.757 1.147c-.457.175-1.257.36-2.427.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.415a4.92 4.92 0 0 1-1.757-1.147 4.922 4.922 0 0 1-1.147-1.757c-.175-.457-.36-1.257-.415-2.427C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.415-2.427a4.92 4.92 0 0 1 1.147-1.757A4.922 4.922 0 0 1 5.482 2.648c.457-.175 1.257-.36 2.427-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.772.132 4.82.355 4.07.675a7.07 7.07 0 0 0-2.56 1.662A7.073 7.073 0 0 0 .675 4.07c-.32.75-.543 1.702-.603 2.982C.013 8.332 0 8.736 0 12s.013 3.668.072 4.948c.06 1.28.283 2.232.603 2.982a7.07 7.07 0 0 0 1.662 2.56 7.073 7.073 0 0 0 2.56 1.662c.75.32 1.702.543 2.982.603 1.28.058 1.684.072 4.948.072s3.668-.013 4.948-.072c1.28-.06 2.232-.283 2.982-.603a7.07 7.07 0 0 0 2.56-1.662 7.073 7.073 0 0 0 1.662-2.56c.32-.75.543-1.702.603-2.982.058-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.06-1.28-.283-2.232-.603-2.982a7.07 7.07 0 0 0-1.662-2.56A7.073 7.073 0 0 0 19.93.675c-.75-.32-1.702-.543-2.982-.603C15.668.013 15.264 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-8 3.999 3.999 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569a10.14 10.14 0 0 1-2.825.775 4.93 4.93 0 0 0 2.163-2.723 9.865 9.865 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.384 4.482A13.962 13.962 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475 4.917 4.917 0 0 0 2.188 4.096 4.9 4.9 0 0 1-2.226-.616v.06a4.915 4.915 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.212.084 4.918 4.918 0 0 0 4.588 3.417A9.868 9.868 0 0 1 .978 19.54a13.945 13.945 0 0 0 7.548 2.212c9.056 0 14.01-7.508 14.01-14.01 0-.213-.004-.425-.013-.636A9.936 9.936 0 0 0 23.954 4.57z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Baturraden Tourism. Semua hak cipta dilindungi.
      </div>
    </footer>
  )
}
