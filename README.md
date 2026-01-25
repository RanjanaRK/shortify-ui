# 🔗 Shortify – Frontend

Frontend client for a production-grade Shortify built with **Next.js**, **React**, **Tailwind CSS**, **Shadcn**, and **JWT authentication**.

It integrates with the backend to provide secure URL shortening, anonymous usage support, analytics, and on-demand QR code generation.

---

## 🚀 Features

### 🔐 Authentication

- User registration & login
- JWT-based authentication (Access + Refresh Token)
- Secure logout
- Account deletion
- Protected routes with frontend route guards

### 🕵️ Anonymous User Support

- Users can generate up to **3 URLs** without signing up
- Anonymous usage tracked via **HTTP-only cookie**
- Cookie is cleared when the user registers or logs in
