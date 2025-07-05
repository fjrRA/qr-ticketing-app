# 🎟️ QR Ticketing App

A full-featured tourism ticketing system built with **Next.js**, **MySQL via Prisma**, and **Midtrans** for secure payments. This system enables users to purchase tickets online and receive QR code-based tickets for validation at the tourism site.

## 🚀 Features

- ✅ Register/Login via Firebase (Gmail) or manual
- ✅ Purchase tourism tickets
- ✅ Midtrans Snap payment integration
- ✅ Unique QR Code for each ticket
- ✅ PDF ticket generation & download
- ✅ Admin dashboard (manage destinations, facilities, payments)
- ✅ Responsive design for desktop and mobile
- ✅ Modular Next.js folder structure

---

## 📦 Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API Routes (REST)
- **Database**: MySQL with Prisma ORM
- **Auth**: Firebase Authentication
- **Payment**: Midtrans (Snap)
- **QR Code**: `qrcode` package
- **PDF**: `pdf-lib`, `@react-pdf/renderer`

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/fjrRA/qr-ticketing-app.git
cd qr-ticketing-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup environment variables
Add in .env or .env.local

```bash
DATABASE_URL=mysql://user:password@localhost:3306/your_db_name
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=your-client-key
MIDTRANS_SERVER_KEY=your-server-key
FIREBASE_API_KEY=your-firebase-key
# Add other needed secrets...
```

### 4. Prisma setup

```bash
Add in .env
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 to view in your browser.
