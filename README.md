# 🌸 Bloom — Nigerian Creative Brand Website

A full-stack Next.js website for **Bloom**, a Nigerian creative brand with three branches:
- 🎭 **Bloom Stage** — Theatre Arts
- 🌱 **Bloom Youth Hub** — Youth Empowerment (Ages 15–27)
- ✨ **Bloom Events** — Premium Event Planning

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
# Fill in your MongoDB, Cloudinary, Paystack, and NextAuth credentials
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
bloom/
├── app/
│   ├── page.tsx          ← Home Page
│   ├── drama/page.tsx    ← Drama Page
│   ├── youth/page.tsx    ← Youth Hub Page
│   ├── events/page.tsx   ← Events Page
│   ├── admin/page.tsx    ← Admin Dashboard (protected)
│   └── api/
│       ├── newsletter/   ← Newsletter subscribe
│       ├── contact/      ← Contact form
│       └── comments/     ← Community comments
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── FloatingBoxes.tsx
│       ├── WhatsAppButton.tsx
│       └── ScrollReveal.tsx
├── models/               ← MongoDB Mongoose models
│   ├── Subscriber.ts
│   ├── Comment.ts
│   └── Contact.ts
├── lib/
│   ├── mongodb.ts        ← DB connection
│   └── cloudinary.ts     ← Media upload utility
└── public/               ← Static assets / images
```

---

## 🔐 Admin Dashboard

- URL: `/admin`
- Default credentials: `admin` / `bloom2024`
- ⚠️ **Change these before deploying to production**
- Features: Edit page content, view newsletter subscribers, moderate comments, manage media via Cloudinary

---

## 💳 Paystack Integration

Add your Paystack public key to `.env.local`:
```
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_live_xxxxx
```
Then install the Paystack inline script in your drama donate section.

---

## 🗄️ Database (MongoDB Atlas)

1. Create a free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Add your connection string to `.env.local`
3. Collections created automatically: `subscribers`, `comments`, `contacts`

---

## 🖼️ Media (Cloudinary)

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Add credentials to `.env.local`
3. Upload images/videos from the Admin Dashboard → Media tab

---

## 🌐 Deployment (Vercel)

```bash
npm run build
vercel deploy
```
Add all `.env.local` variables to your Vercel project settings.

---

## 🇳🇬 Brand Colors

| Name | Hex |
|------|-----|
| Charcoal | `#1C1C1E` |
| Crimson | `#9B1B30` |
| Cream | `#F5ECD7` |
| Gold | `#C9A84C` |

---

## 📞 WhatsApp Integration
Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` with the owner's Nigerian number (format: `234XXXXXXXXXX`).
