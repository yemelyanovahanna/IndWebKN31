
const addresses = [
    {
        id: 1,
        title: 'вул. Шевченка, 45, кв. 12',
        note: ''
    },
    {
        id: 2,
        title: 'Адреса №2 тому що Олег не з простої сімʼї а з багатої',
        note: ''
    }
];

let selectedAddressIndex = 0;
let mobileMenuOpen = false;

function renderMainAddresses() {
    const container = document.getElementById('addressListMain');
    if (!container) return;

    container.innerHTML = addresses
        .map(addr => `
            <div class="address-row-static">
                ${addr.title}
            </div>
        `)
        .join('');
}


function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (!sidebar || !menuIcon || !closeIcon) return;

    if (mobileMenuOpen) {
        sidebar.classList.add('mobile-open');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        sidebar.classList.remove('mobile-open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderMainAddresses();
});
