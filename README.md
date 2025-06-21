Here's a **complete `README.md`** for your **Typing Race Game App** using **Bun, Next.js, Tailwind CSS, ShadCN UI, Prisma, PostgreSQL, BetterAuth, and Bun WebSockets**:

---

# ⌨️ Typing Race Game

Real-time multiplayer typing race game built with modern full-stack technologies.

## 🛠️ Tech Stack

| Layer      | Technology                                                                    |
| ---------- | ----------------------------------------------------------------------------- |
| Runtime    | [Bun](https://bun.sh)                                                         |
| Frontend   | [Next.js (App Router)](https://nextjs.org)                                    |
| Styling    | [Tailwind CSS](https://tailwindcss.com), [ShadCN UI](https://ui.shadcn.com)   |
| Backend    | [Bun WebSocket Server](https://bun.sh/docs/api/websocket)                     |
| Auth       | [BetterAuth](https://github.com/vriad/betterauth)                             |
| Database   | [PostgreSQL](https://www.postgresql.org), [Prisma ORM](https://www.prisma.io) |
| Deployment | Vercel + Coolify + Bun serve sockets                                          |

---

## 🚀 Features

- 🔑 User authentication via BetterAuth (OAuth & session handling)
- 🧠 Real-time multiplayer typing races via WebSockets (Bun native server)
- 🏁 Game rooms with live WPM tracking & leaderboard
- 📈 Persistent game history using PostgreSQL and Prisma
- 🎨 Fully responsive UI built with Tailwind CSS and ShadCN UI
- 💾 Player performance stats stored and visualized
- 📦 Powered by Bun for blazing-fast dev and production experience

---

## 📦 Getting Started

### 1. Prerequisites

- [Bun](https://bun.sh) installed
- PostgreSQL instance (local or cloud)
- Node 18+ (only if working with Next.js during local development)
- Optional: [BetterAuth credentials](https://github.com/vriad/betterauth)

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/typing-race-game.git
cd typing-race-game
```

### 3. Setup Environment

```bash
cp .env.example .env
```

Fill in values:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/typingrace
BETTERAUTH_SECRET=your-secret-key
BETTERAUTH_CLIENT_ID=your-client-id
BETTERAUTH_CLIENT_SECRET=your-client-secret
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

### 4. Install Dependencies

```bash
bun install
```

### 5. Setup Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

## 🖥️ Running the App

### Start the Next.js Frontend

```bash
bun dev
```

Runs on [http://localhost:3000](http://localhost:3000)

### Start the WebSocket Server (Bun)

```bash
bun ws-server.ts
```

Runs on [ws://localhost:3001](ws://localhost:3001)

---

## 🧩 Project Structure

```
/
├── app/                  # Next.js App Router
├── components/           # UI components using ShadCN
├── lib/                  # Utils, Prisma client, auth helpers
├── prisma/               # Prisma schema
├── public/               # Static assets
├── ws-server.ts          # WebSocket server with Bun
├── .env                  # Environment variables
├── tailwind.config.js    # TailwindCSS config
└── README.md
```

---

## 🔌 WebSocket Overview

The WebSocket server handles:

- Player connection and disconnection
- Room creation and joining
- Broadcasting typing progress
- Race start, end, and synchronization
- WPM calculation and leaderboard distribution

### Example WebSocket Message

```json
{
  "type": "progress",
  "roomId": "abc123",
  "playerId": "user-1",
  "charsTyped": 120,
  "timeElapsed": 15.2
}
```

### Error Handling Tips

- Handle dropped sockets: use heartbeats or ping-pong
- Validate all incoming messages with schema (e.g. Zod)
- Store room state server-side using in-memory objects or Redis (optional)
- Graceful shutdown via Bun’s `.stop()` handling

---

## ✅ Todos

- [ ] Typing replay system
- [ ] Spectator mode
- [ ] Game rematch and lobby chat
- [ ] Rate limiting and spam protection

---

## 🧪 Testing

- Use `bun test` for unit tests (WebSocket/game logic)
- Use Cypress or Playwright for E2E
- Manual WebSocket testing with [wscat](https://github.com/websockets/wscat)

```bash
bun test
```

---

## 🚀 Deployment Guide

### Frontend (Next.js)

- Deploy to [Vercel](https://vercel.com/)
- Set environment variables in Vercel dashboard

### Backend WebSocket (Bun)

- Use Coolify
- Deploy `ws-server.ts` as a Bun service
- Expose port 3001 and configure your frontend to use the correct `NEXT_PUBLIC_WS_URL`

### Database

- Using Prisma with PostgreSQL
- Use coolify to host PostgreSQL DB
- Explore Turso which is free

---

## 📚 Learn More

- [Bun Docs](https://bun.sh/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [ShadCN UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Prisma](https://www.prisma.io/docs)
- [BetterAuth](https://github.com/vriad/betterauth)

---

## 👥 Contributors

- **You!** PRs welcome 🙌

---

## 📄 License

MIT © 2025

---

HALL OF FAME:
Things that helped us build this:
https://github.com/sxyazi/yazi
Suggested by green333221

to check this animation package:
https://gsap.com/, it is also free
Suggested by Tanveer
