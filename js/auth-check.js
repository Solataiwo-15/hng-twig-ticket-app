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
    window.location.replace('login.html');
} else {
    document.documentElement.style.visibility = 'visible';
}