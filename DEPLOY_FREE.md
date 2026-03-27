# Free deployment guide (Netlify + Render + TiDB)

This project has two parts:
- Angular frontend (`/`)
- Node.js backend (`Backend/salesMeeting`)

## 1. Create a free MySQL-compatible database (TiDB Serverless)

1. Create a free TiDB Cloud Serverless cluster.
2. Create a database named `salesmeeting`.
3. Import SQL files from `Backend/salesMeeting/DB/Dump20260325 (1)`.
4. Save connection values:
   - `host`
   - `port` (usually `4000`)
   - `user`
   - `password`

## 2. Deploy backend for free on Render

1. Push this project to GitHub.
2. In Render, create a new **Blueprint** and select this repository.
3. Render will detect `render.yaml` and create the `salesmeeting-api` service.
4. Set environment variables in Render service settings:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME=salesmeeting`
   - `DB_SSL=true`
   - `CORS_ORIGIN` (set this later to your Netlify URL)
5. Deploy and copy backend URL, for example:
   - `https://salesmeeting-api.onrender.com`

## 3. Point frontend to deployed backend

1. Open `src/environments/environment.prod.ts`.
2. Replace `apiBaseUrl` with your Render backend URL.

Example:

```ts
apiBaseUrl: 'https://salesmeeting-api.onrender.com'
```

## 4. Deploy frontend for free on Netlify

1. In Netlify, create a new site from your GitHub repository.
2. Build settings:
   - Build command: `npm install ; npm run build`
   - Publish directory: `dist/AdminPanel/browser`
3. Netlify also reads `netlify.toml` for SPA routing fallback.
4. Deploy and copy frontend URL.

## 5. Final CORS step

1. Go back to Render backend environment variables.
2. Set `CORS_ORIGIN` to your Netlify URL.

Example:

```text
https://your-site-name.netlify.app
```

3. Redeploy backend.

## Quick checks

- `GET /` on backend should return welcome text.
- Login and CRUD pages in frontend should call deployed backend URL.
- Dashboard counts should load from database.
