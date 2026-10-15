# Antigravity & Gemini Project Rules - Logos Creative

1. **Token Efficiency**:
   - NEVER read `package-lock.json`, `.next/`, `out/`, or `node_modules/`.
   - Never read large image files in `public/images/`.
   - Use line slicing (`StartLine`, `EndLine`) when reading files.
   - Use small, targeted code replacements.

2. **Core Tech & Conventions**:
   - Framework: Next.js 16 with static HTML export (`out/`).
   - Primary Color: `#5e0919` (Maroon luxury).
   - WhatsApp Helper: `app/utils/whatsapp.js` (+62 896-9988-1323).
   - Linux Host Compatibility: All client logo images in `public/images/clients/` must use lowercase `client-*` naming to prevent 404 on case-sensitive Linux hosting.
   - Build & Deploy: `npm run build` then `node deploy.js`.
