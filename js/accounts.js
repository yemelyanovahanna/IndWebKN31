

const accounts = [
    {
        id: 1,
        type: 'Тепло',
        status: 'active',
        number: '123456',
        address: 'вул. Шевченка, 45, кв. 12',
        balance: -356.20,
        icon: '🔥'
    },
    {
        id: 2,
        type: 'Вода/Каналізація',
        status: 'debt',
        number: '789012',
        address: 'вул. Шевченка, 45, кв. 12',
        balance: -125.50,
        icon: '💧'
    },
    {
        id: 3,
        type: 'Електрика',
        status: 'pending',
        number: '345678',
        address: 'вул. Шевченка, 45, кв. 12',
        balance: 0,
        icon: '⚡'
    }
];

const meterQueryMap = {
    "Тепло": "heat",
    "Вода/Каналізація": "water",
    "Електрика": "electricity"
};


let selectedAccountIndex = 0;
let activeTab = 'overview';
let mobileMenuOpen = false;

const statusBadges = {
    active: {
        text: 'Активний',
        color: 'active',
        icon: `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>`
    },
    debt: {
        text: 'Борг',
        color: 'debt',
        icon: `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>`
    },
    pending: {
        text: 'Очікує',
        color: 'pending',
        icon: `
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>`
    }
};

function getStatusBadge(status) {
    const badge = statusBadges[status];
    return `<span class="status-badge ${badge.color}">${badge.icon}${badge.text}</span>`;
}


function renderAccounts() {
    const accountsList = document.getElementById('accountsList');
    accountsList.innerHTML = accounts.map((account, index) => `
        <button class="account-card ${selectedAccountIndex === index ? 'active' : ''}" data-index="${index}">
            <div class="account-card-content">
                <span class="account-icon">${account.icon}</span>
                <div class="account-details">
                    <div class="account-header">
                        <p class="account-type">${account.type}</p>
                        ${getStatusBadge(account.status)}
                    </div>
                    <p class="account-number">№ ${account.number}</p>
                    <p class="account-address">${account.address}</p>
                </div>
            </div>
        </button>
    `).join('');

    document.querySelectorAll('.account-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.dataset.index, 10);
            selectedAccountIndex = index;
            renderAccounts();
            renderHeader();
            renderContent();
            if (window.innerWidth < 1024) {
                toggleMobileMenu();
            }
        });
    });
}

/* ==== Шапка вмісту (назва рахунку, статус) ==== */
function renderHeader() {
    const currentAccount = accounts[selectedAccountIndex];
    document.getElementById('accountTitle').textContent = currentAccount.type;
    document.getElementById('accountMeta').innerHTML = `
        ${getStatusBadge(currentAccount.status)}
        <span class="account-number-display">№ ${currentAccount.number}</span>
    `;
}


function renderOverview() {
    const currentAccount = accounts[selectedAccountIndex];
    return `
        <div class="tab-content-inner">
            <div class="card">
                <h3 class="card-title">Паспорт рахунку</h3>
                <div class="card-grid">
                    <div class="card-field">
                        <p class="field-label">Тип послуги</p>
                        <p class="field-value">${currentAccount.type}</p>
                    </div>
                    <div class="card-field">
                        <p class="field-label">№ особового рахунку</p>
                        <p class="field-value">${currentAccount.number}</p>
                    </div>
                    <div class="card-field">
                        <p class="field-label">Адреса</p>
                        <p class="field-value">${currentAccount.address}</p>
                    </div>
                    <div class="card-field">
                        <p class="field-label">Постачальник</p>
                        <p class="field-value">КП "Київтеплоенерго"</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">Лічильники</h3>
                <div class="card-actions">
                    <div>
                        <p class="field-value">1 лічильник</p>
                        <p class="field-label">Останній показник: 02.05.2025</p>
                    </div>
                    <button class="link-btn meter-btn" data-meter-type="${currentAccount.type}">Перейти в лічильники →</button>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">Останні платежі</h3>
                <div class="payment-list">
                    <div class="payment-item">
                        <div class="payment-info">
                            <p>Оплата 12.04.2025</p>
                            <p>Картка •••• 4532</p>
                        </div>
                        <p class="payment-amount">150,00 грн</p>
                    </div>
                    <div class="payment-item">
                        <div class="payment-info">
                            <p>Оплата 10.03.2025</p>
                            <p>Картка •••• 4532</p>
                        </div>
                        <p class="payment-amount">850,00 грн</p>
                    </div>
                </div>
                <button class="link-btn" style="margin-top: 1rem;">Всі платежі і борги →</button>
            </div>

            <div class="card">
                <h3 class="card-title">Останні квитанції</h3>
                <div class="payment-list">
                    <div class="payment-item">
                        <span class="field-value">Березень 2025</span>
                        <button class="link-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            PDF
                        </button>
                    </div>
                    <div class="payment-item">
                        <span class="field-value">Лютий 2025</span>
                        <button class="link-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            PDF
                        </button>
                    </div>
                </div>
            </div>

            <button class="btn-primary">Оплатити зараз</button>
        </div>
    `;
}

function renderBills() {
    return `
        <div class="card">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
                <h3 class="card-title" style="margin-bottom:0;">Нарахування і квитанції</h3>
                <select class="select-input">
                    <option>2025</option>
                    <option>2024</option>
                </select>
            </div>

            <div class="payment-list">
                ${['Березень','Лютий','Січень'].map(month => `
                    <div class="bill-item">
                        <div class="bill-info">
                            <p>${month} 2025</p>
                            <p>856,40 грн</p>
                        </div>
                        <div class="bill-actions">
                            <button class="link-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                PDF
                            </button>
                            <button class="link-btn">Деталі</button>
                        </div>
                    </div>
                `).join('')}
            </div>

            <button class="btn-secondary" style="margin-top:1.5rem;">Запит на перерахунок</button>
        </div>
    `;
}

function renderPayment() {
    return `
        <div class="tab-content-inner">
            <div class="card">
                <h3 class="card-title">Фінанси</h3>
                <div class="balance-card">
                    <p class="balance-label">Баланс</p>
                    <p class="balance-amount">Борг 356,20 грн</p>
                </div>

                <div style="margin-bottom:1rem;">
                    <p style="font-size:.875rem;font-weight:500;color:#374151;margin-bottom:.5rem;">
                        Останні оплати:
                    </p>
                    ${[
                        { date: '12.04.2025', amount: '150,00' },
                        { date: '10.03.2025', amount: '850,00' },
                        { date: '15.02.2025', amount: '740,00' }
                    ].map(p => `
                        <div style="display:flex;justify-content:space-between;font-size:.875rem;margin-bottom:.25rem;">
                            <span style="color:#6b7280;">${p.date}</span>
                            <span style="color:#111827;font-weight:500;">${p.amount} грн</span>
                        </div>
                    `).join('')}
                </div>
                <button class="link-btn">Платежі і борги →</button>
            </div>

            <div class="card">
                <h3 class="card-title">Оплата</h3>

                <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.5rem;">
                    <label class="checkbox-option">
                        <input type="checkbox" checked>
                        <div class="checkbox-content">
                            <p>Сплатити поточний період</p>
                            <p>Березень 2025 — 100 грн</p>
                        </div>
                    </label>

                    <label class="checkbox-option">
                        <input type="checkbox" checked>
                        <div class="checkbox-content">
                            <p>Сплатити борг</p>
                            <p>356,20 грн</p>
                        </div>
                    </label>
                </div>

                <div class="total-card">
                    <div class="total-content">
                        <span class="total-label">Загальна сума:</span>
                        <span class="total-amount">456,20 грн</span>
                    </div>
                </div>

                <button class="btn-primary">Перейти до оплати</button>
            </div>

            <div class="autopay-card">
                <div class="autopay-content">
                    <div class="autopay-info">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <div class="autopay-text">
                            <p>Автоплатіж увімкнено</p>
                            <p>Щомісяця 25 числа</p>
                        </div>
                    </div>
                    <button class="link-btn" style="color:#15803d;">Поставити на паузу</button>
                </div>
            </div>
        </div>
    `;
}

function renderContract() {
    const currentAccount = accounts[selectedAccountIndex];
    return `
        <div class="tab-content-inner">
            <div class="card">
                <h3 class="card-title">Договір</h3>
                <div class="card-grid" style="margin-bottom:1rem;">
                    <div class="card-field">
                        <p class="field-label">Номер договору</p>
                        <p class="field-value">ТП-2024-${currentAccount.number}</p>
                    </div>
                    <div class="card-field">
                        <p class="field-label">Дата укладення</p>
                        <p class="field-value">15.01.2024</p>
                    </div>
                </div>
                <button class="link-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Завантажити PDF
                </button>
            </div>

            <div class="card">
                <h3 class="card-title">Лічильники (документи)</h3>
                <div class="document-item">
                    <span>Акт повірки від 12.03.2024</span>
                    <button class="link-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        PDF
                    </button>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">Доступи</h3>
                <div style="margin-bottom:1rem;">
                    <div class="card-field">
                        <p class="field-label">Власник</p>
                        <p class="field-value">Олег Сігма</p>
                    </div>
                    <div class="card-field">
                        <p class="field-label">Довірені особи</p>
                        <p class="field-value">Не додано</p>
                    </div>
                </div>
                <button class="link-btn">Керувати доступами →</button>
            </div>

            <div class="danger-card">
                <h3 class="card-title">Небезпечна дія</h3>
                <p>Ця дія призведе до розірвання договору і припинення надання послуг</p>
                <button class="btn-danger">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    Розірвати договір
                </button>
            </div>
        </div>
    `;
}


function renderContent() {
    const content = document.getElementById('tabContent');
    if (!content) return;

    if (activeTab === 'overview') content.innerHTML = renderOverview();
    else if (activeTab === 'bills') content.innerHTML = renderBills();
    else if (activeTab === 'payment') content.innerHTML = renderPayment();
    else if (activeTab === 'contract') content.innerHTML = renderContract();

    attachMeterButtons();  
}

function attachMeterButtons() {
    document.querySelectorAll('.meter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const typeName = btn.dataset.meterType;
            const query = meterQueryMap[typeName];

            if (!query) {
                console.error("Unknown meter type:", typeName);
                return;
            }

            window.location.href = `meters.html?type=${query}`;
        });
    });
}



function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

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
    renderAccounts();
    renderHeader();
    renderContent();

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabId = e.currentTarget.dataset.tab;
            activeTab = tabId;
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            renderContent();
        });
    });

    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileMenuOpen) {
            toggleMobileMenu();
        }
    });
});
