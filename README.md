# 🔗 Shortify – Frontend

Frontend client for **Shortify**, a production-grade URL shortener built with **Next.js (App Router)**, **React**, **Tailwind CSS**, and **shadcn/ui**.

The frontend integrates with the Shortify backend to provide secure URL shortening, anonymous usage support, analytics dashboards, and on-demand QR code generation.

---

## 🚀 Features

### 🔐 Authentication (Overview)

- Authentication is handled by the backend
- JWTs are stored in **secure HTTP-only cookies**
- Frontend never stores or accesses tokens directly
- Browser automatically sends cookies with requests
- Logout support

### 🕵️ Anonymous User Support

- Users can generate up to **3 URLs** without signing up
- Anonymous usage tracked via **HTTP-only cookies**
- Backend enforces anonymous usage limits
- Cookie is cleared after login or registration
- UI adapts based on authentication state

### 🌐 URL Shortening UI

- Generate short URLs instantly
- Supports both anonymous and authenticated users
- Clean display of generated short links

### 📎 QR Code Generation

- Generate QR codes for short URLs
- Available only for authenticated users
- QR codes generated on demand

### 📊 Analytics Dashboard

- View click analytics for created URLs
- Accessible only to authenticated users

### 🎨 Modern UI

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
- **Recharts** (data visualization)
- **Ky** (HTTP client for API communication)

---

## 🧱 System Architecture

```
Frontend (Next.js / React)
↓
Calls Backend APIs
↓
Backend (Express.js)
↓
MongoDB

```

---

## Backend APIs Used

```
/auth/*
/api/user/*
/api/urlShort
/api/urls/analytics/:id
/api/qr/generate

```

## 📁 Project Structure (Simplified)

```

src/app/
├── analytics/[slug]/page.tsx
├── auth/
│   ├── login/page.tsx
│   └── signup/page.tsx
├── layout.tsx
├── page.tsx


```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

## ▶️ Run Locally

1. Clone the repository

```
git clone https://github.com/RanjanaRK/shortify-ui.git

```

2.Install dependencies

```
npm install

```

3.Start the development server

```
npm run dev

```

4.Open in browser

```
http://localhost:3000

```

---

## 📡 API Communication

- Ky is used for all API requests

* Cookies are sent automatically with each request

- Centralized error handling for API failures

* No authentication tokens are stored on the client

---

## 🧪 Testing & Validation

- The application was tested during development to validate core user flows
- Key scenarios tested include:
  - Authentication-based route access
  - URL redirection and analytics views
- Test-related files were removed before deployment to keep the repository minimal

---

## 🌐 Backend Repository

https://github.com/RanjanaRK/shortify-backend

---

## 👨‍💻 Author

**Ranjana Kumari**  
Full-Stack Developer (Next.js · Node.js · MongoDB · Express)

🔗 LinkedIn: https://www.linkedin.com/in/ranjanark/

🐙 GitHub: https://github.com/RanjanaRK

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.
