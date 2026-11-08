# Student Management System 

A minimal full-stack starter with a React frontend and an Express.js API. The frontend reads its backend URL from configuration, so it can point to a local or deployed API.

## Technology and purpose

| Technology | Purpose |
| --- | --- |
| React.js | Develops the frontend user interface. |
| Express.js | Handles backend logic and API requests. |
| MongoDB Atlas | Cloud database option for storing student records (not connected in this minimal example). |
| Vercel | Suggested hosting for the frontend. |
| Render | Suggested hosting for the backend API. |

## Step 1: Prepare the application

- Complete the React frontend and Express.js backend.
- Check that all application features work correctly in the local environment.
- Organize the project into `frontend` and `backend` folders.
- Upload the project code to a GitHub repository.
- Ensure that frontend API requests use a configurable backend URL. This starter uses `VITE_API_URL`.

## Run locally

Requirements: Node.js 18 or newer and npm.

1. In `backend`, copy `.env.example` to `.env`, then set values as needed.
2. In `frontend`, copy `.env.example` to `.env` and set `VITE_API_URL=http://localhost:5000`.
3. Open a terminal in `backend`: run `npm install`, then `npm run dev`.
4. Open another terminal in `frontend`: run `npm install`, then `npm run dev`.
5. Open the Vite URL shown in the terminal (normally `http://localhost:5173`). The page should load the sample student list from the API.

The example API keeps sample records in memory; they reset when the server restarts. MongoDB Atlas is listed as a technology option but database connection and persistence are intentionally left for the next implementation step.

## Deployment configuration

- **Frontend (Vercel):** set `VITE_API_URL` to the deployed Express API base URL, for example `https://your-api.onrender.com`.
- **Backend (Render):** set `PORT` if required by the host (Render supplies it), and set `FRONTEND_ORIGIN` to the deployed frontend origin, for example `https://your-app.vercel.app`.
- Never commit `.env` files, database credentials, or other secrets. Add real values only in the hosting provider's environment settings.

## Verify the application

- With the backend running, open `http://localhost:5000/api/health`; expect JSON with `ok: true`.
- Open the frontend and confirm the sample student list appears.
- Confirm the browser console and network panel show no failed API request or CORS error.
- If the API URL changes, update `VITE_API_URL` and restart/rebuild the frontend.
