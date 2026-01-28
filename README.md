# 🔗 Shortify – Frontend

Frontend client for **Shortify**, a production-grade URL shortener built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **shadcn/ui**.

The frontend integrates with the Shortify backend to provide secure URL shortening, anonymous usage support, analytics dashboards, and on-demand QR code generation.
.

---

## 🚀 Features

### 🔐 Authentication (Overview)

- Authentication is handled by the backend
- JWTs are stored in **secure HTTP-only cookies**
- Frontend never stores or accesses tokens directly
- Frontend relies on browser-managed cookies for authenticated requests
- No sensitive tokens are stored or accessed on the client

### 🕵️ Anonymous User Support

- Users can generate up to **3 URLs** without signing up
- Anonymous usage tracked via **HTTP-only cookie**
- Cookie is cleared when the user registers or logs in

### 🔗 URL Shortening & QR Code

- Create short URLs easily
- QR code generation for authenticated users
- Click analytics dashboard for authenticated users

### 🎨 UI/UX

- Responsive and mobile-friendly
- Clean dashboard layout with Tailwind CSS

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Ky (API communication)

---

## 🧱 System Architecture

```
Frontend (Next.js / React)
↓
Calls backend APIs:

/auth/*

/api/user/*

/api/urlShort

/api/urls/analytics/:id

/api/qr/generate
↓
Backend (Express.js)
↓
MongoDB
```

---
