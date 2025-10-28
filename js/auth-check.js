// This script runs immediately

// Add a 'hidden' class to the body by default
document.documentElement.style.visibility = 'hidden';

const session = localStorage.getItem('ticketapp_session');
let sessionData = null;

try {
    sessionData = session ? JSON.parse(session) : null;
} catch (error) {
    localStorage.removeItem('ticketapp_session');
}

if (!sessionData || sessionData.expiresAt < new Date().getTime()) {
    localStorage.removeItem('ticketapp_session');
    // If not logged in, redirect immediately. The page content will never be shown.
    window.location.replace('login.html');
} else {
    // If logged in, make the page visible
    document.documentElement.style.visibility = 'visible';
}