<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Agent Guidelines & Token Efficiency Rules (Logos Creative)

This repository is optimized for AI agent efficiency (Antigravity, Cursor, Claude Code, Copilot, ChatGPT). Follow these strict guidelines to prevent token waste and preserve context window.

---

## 🛑 Strict Restrictions (Never Read These Files)
1. **`package-lock.json`**: DO NOT read this file. It is ~250KB (>60,000 tokens). Check `package.json` for dependencies instead.
2. **`node_modules/`**, **`.next/`**, **`out/`**: Never index, grep, or read files from these directories. They contain build outputs and compiled bundles.
3. **`public/images/`**: Never read binary image files as text. Refer to them only by file path string.
4. **`.env`**: Never read or log secrets into chat.

---

## ⚡ Tool Usage & Efficiency Best Practices
* **Use Line Slicing (`StartLine`, `EndLine`)**: When viewing files, always view only the relevant lines (e.g. 20-50 lines) instead of loading whole files.
* **Targeted Edits**: Use targeted replace tools (`replace_file_content`) on small contiguous blocks instead of rewriting entire files.
* **Keep Explanations Concise**: Answer user requests directly with minimal preamble.

---

## 🗺️ Project Architecture & Component Map
* **Framework**: Next.js 16 (App Router, Static Export `output: 'export'`).
* **Design System**: Material Design 3 tokens in `app/globals.css`. Primary color is **Maroon `#5e0919`**.
* **Navigation & Header**: `app/components/Header.js` (Loading line hover animation, `#hero` link).
* **Hero Section**: `app/components/Hero.js` (Headline "HELLO BRAND OWNER!", WA button, baseline DPR zoom calibration).
* **Services**: `app/components/WhatWeDo.js` (4 clean white cards with maroon accents).
* **Clients**: `app/components/OurClients.js` (18 client logos; use lowercase `client-*` filenames for Linux compatibility).
* **Portfolio**: `app/components/Portfolio.js` (Brand cases, filter tags, detail modals).
* **Results / Testimonials**: `app/components/Results.js` (Collage of 5 TikTok Studio analytics screenshots).
* **Contact Us**: `app/components/ContactUs.js` (Interactive form + direct WA CTA).
* **WhatsApp Utility**: `app/utils/whatsapp.js` (Number `+62 896-9988-1323` + message generator).
* **Smooth Scroll**: `app/utils/smoothScroll.js` (Easing scroll to top or target).
* **Smart Deployment**: `node deploy.js` or `npm run deploy` (Smart incremental FTP deploy to Hostinger; only uploads added/modified files and skips unchanged videos/assets via `.deploy-manifest.json`).
* **Fast Git Sync**: `node sync-git.js` or `npm run push` (Fast 1-click Git stage, commit, and push with concise status).
* **Unified Ship**: `npm run ship` (Build + Smart FTP Deploy + Smart Git Push all-in-one).
