
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    loadUserInfo();
});


const PUBLIC_PAGES = ['index.html', 'login.html', ''];


function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    let currentPage = window.location.pathname.split('/').pop();

    
    if (!currentPage) {
        currentPage = 'index.html';
    }

    
    if (!isLoggedIn && !PUBLIC_PAGES.includes(currentPage)) {
        
        localStorage.setItem('redirectAfterLogin', currentPage);
       
        window.location.href = 'login.html';
        return;
    }
}


function goToPageRequiringLogin(targetPage) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        
        window.location.href = targetPage;
    } else {
        
        localStorage.setItem('redirectAfterLogin', targetPage);
        window.location.href = 'login.html';
    }
}


function loadUserInfo() {
    const userName = localStorage.getItem('userName') || 'Олег Сігма';
    const userNameElement = document.getElementById('userName');

    if (userNameElement) {
        userNameElement.textContent = userName;
    }
}


function logout() {
    if (confirm('Ви впевнені, що хочете вийти?')) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        localStorage.removeItem('redirectAfterLogin');
        window.location.href = 'index.html'; 
    }
}
