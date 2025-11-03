
# AptiCore_v3 - Offline Static Learning Platform (Final)

This package is a fully offline static website built with HTML, CSS, and JavaScript.
It includes user signup/login (stored in browser localStorage), an admin panel,
embedded view-only PDFs, and interactive 15-question quizzes per topic with detailed explanations.

## Admin credentials
- Username: admin
- Password: Mb@$veri2025
(Note: admin credentials are NOT displayed on the login page.)

## How to run locally (VS Code)
1. Download and unzip the file `AptiCore_v3_site.zip` (or open the `AptiCore_v3` folder directly in VS Code).
2. Open the folder in VS Code: `File -> Open Folder...` and select `AptiCore_v3`.
3. To preview the site, open `index.html` in your browser, or use the Live Server extension:
   - Install **Live Server** extension by Ritwick Dey.
   - Right-click `index.html` -> **Open with Live Server**.
4. Signup as a new user or login with admin credentials to see admin panel (`admin.html`).

## Admin Panel
- After logging in as admin, you can view the list of registered users.
- Each user row has a **Delete** button (admin cannot delete the admin account).
- Deleting a user removes their account and stored quiz history from localStorage.
- Admin can logout using the 'Logout' button on the admin page.

## Features
- Signup + Login (localStorage). No backend required.
- Admin can view and delete registered users on `admin.html`.
- PDFs are embedded in `resources.html` via iframe (view-only).
- Quizzes (15 Qs/topic) with score and detailed explanations. Attempts are stored per user in localStorage.
- All functionality works offline in the browser.

## Files of interest
- `index.html` - Login / Signup
- `dashboard.html` - User dashboard and attempt history
- `resources.html` - PDF viewer and practice links
- `quiz.html` - Interactive quiz page
- `admin.html` - Admin panel (list users + delete)
- `css/style.css` - Styling
- `js/auth.js` - Authentication & session management
- `js/quiz.js` - Quiz rendering and evaluation
- `js/quiz_data.json` - All quiz questions, options, answers, explanations
- `pdfs/` - Folder containing the PDF files (view-only)

## Notes & Limitations
- This is a client-side demo suitable for local/offline use or prototyping.
- Storing passwords in localStorage is insecure for production; use a real backend with authentication for real deployments.
- PDFs are view-only in the browser; users cannot download them via UI. However, someone with filesystem access could copy them if they have the folder.

If you'd like further enhancements (CSV export for admin, progress charts, print-friendly answer sheets), tell me which one and I will add it.
