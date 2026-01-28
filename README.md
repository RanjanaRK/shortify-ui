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
- Anonymous usage is tracked using an **HTTP-only cookie**
- Cookie is automatically cleared after login or registration
- Ensures smooth transition from anonymous to authenticated usage

### 🔗 URL Shortening & QR Code

- Generate short URLs instantly
- Redirect users using short links
- QR code generation for authenticated users
- QR codes are generated on demand (not stored on the client)

### 🎨 UI/UX

- Responsive and mobile-friendly
- Clean dashboard layout
- Accessible UI components powered by **shadcn/ui**
- Styled using **Tailwind CSS**

---

## 🛠 Tech Stack

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **shadcn/ui**
- **Ky** (HTTP client for API communication)

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
