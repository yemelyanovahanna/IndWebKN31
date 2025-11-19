
const addresses = [
    {
        id: 1,
        title: 'Велика Васильківська 7',
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

function renderSidebarAddresses() {
    const container = document.getElementById('addressListSidebar');
    if (!container) return;

    container.innerHTML = addresses
        .map((addr, index) => `
            <button class="address-item-sidebar ${index === selectedAddressIndex ? 'active' : ''}" data-index="${index}">
                ${addr.title}
                ${addr.note ? `<small>${addr.note}</small>` : ''}
            </button>
        `)
        .join('');

    container.querySelectorAll('.address-item-sidebar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.index);
            selectedAddressIndex = idx;
            renderSidebarAddresses();
            renderMainAddresses();
        });
    });
}

function renderMainAddresses() {
    const container = document.getElementById('addressListMain');
    if (!container) return;

    container.innerHTML = addresses
        .map((addr, index) => `
            <div class="address-row ${index === selectedAddressIndex ? 'active' : ''}" data-index="${index}">
                <span>${addr.title}</span>
            </div>
        `)
        .join('');

    container.querySelectorAll('.address-row').forEach(row => {
        row.addEventListener('click', (e) => {
            const idx = Number(e.currentTarget.dataset.index);
            selectedAddressIndex = idx;
            renderSidebarAddresses();
            renderMainAddresses();
        });
    });
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
    renderSidebarAddresses();
    renderMainAddresses();

    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileMenu);
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileMenuOpen) {
            toggleMobileMenu();
        }
    });
});
