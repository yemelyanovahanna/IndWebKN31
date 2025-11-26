

const accounts = [
    {
        id: 1,
        type: 'Тепло',
        status: 'active',
        number: '123456',
        address: 'вул. Шевченка, 45, кв. 12',
        balance: -356.20,
        icon: '<svg width="30" height="30" viewBox="0 0 185 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M130.971 24.1679C124.413 18.6097 117.538 12.7679 110.538 6.4011C105.168 1.51751 97.9155 -0.745771 90.7209 0.217901C83.749 1.13899 77.5459 5.10735 73.7877 11.0511C63.8541 27.6511 56.8307 45.8265 53.0209 64.7929C51.526 62.6343 50.1998 60.364 49.0541 58.0011C45.1073 49.6855 35.1666 46.1437 26.851 50.0906C24.8377 51.046 23.0366 52.3956 21.5541 54.0593C7.5764 68.3429 -0.172426 87.5831 0.00413662 107.568C-0.393129 149.572 27.8612 186.452 68.5209 197.001C76.0862 198.905 83.8533 199.889 91.6541 199.934C91.9041 199.934 94.5623 199.909 95.6373 199.834C145.387 198.223 184.866 157.394 184.804 107.618C184.771 69.8679 159.838 48.7011 130.971 24.1679ZM91.4459 183.209C85.244 182.737 79.1151 180.225 74.4877 176.493C67.2416 171.365 62.4467 163.846 61.3045 155.184C59.8877 141.668 68.2213 123.993 85.2463 104.026C87.0315 101.941 89.6432 100.746 92.3881 100.759C95.0975 100.74 97.674 101.932 99.4131 104.009C115.013 122.526 123.58 139.609 123.58 152.118C123.532 168.551 110.687 181.551 94.3299 183.134C93.6115 183.204 92.3877 183.309 91.4459 183.209ZM138.855 167.359C138.363 167.743 137.821 168.051 137.321 168.418C139.244 163.192 140.234 157.669 140.246 152.101C140.246 131.043 124.955 108.476 112.138 93.2507C107.235 87.4433 100.022 84.0902 92.4213 84.0839H92.3877C84.7717 84.0703 77.533 87.4003 72.5877 93.1921C52.2127 117.059 42.8545 138.5 44.7709 156.925C45.226 161.203 46.3186 165.388 48.0127 169.342C28.2244 155.004 16.5647 132.003 16.6959 107.567C16.535 91.6925 22.7951 76.4261 34.0541 65.2339C35.9764 69.23 38.2846 73.0285 40.9459 76.5757C44.601 81.5171 50.8451 83.8101 56.8291 82.4089C62.9303 81.0593 67.6674 76.2472 68.9209 70.1257C72.269 52.4288 78.667 35.4484 87.8291 19.9425C88.9565 18.1699 90.8186 16.9956 92.9041 16.7425C95.235 16.4288 97.5846 17.1644 99.3209 18.7507C106.471 25.2507 113.488 31.2507 120.154 36.8925C147.971 60.5175 168.079 77.5843 168.079 107.618C168.151 130.99 157.362 153.07 138.879 167.376L138.855 167.359Z" fill="#FF9D72" /></svg>'
    },
    {
        id: 2,
        type: 'Вода/Каналізація',
        status: 'debt',
        number: '789012',
        address: 'вул. Шевченка, 45, кв. 12',
        balance: -125.50,
        icon: '<svg width="30" height="30" viewBox="0 0 317 317" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_264_1466)"><path d="M171.707 316.604C150.695 316.583 130.55 308.237 115.692 293.398C100.834 278.559 92.478 258.438 92.457 237.453C92.457 216.873 108.307 184.092 139.373 139.992C143.062 134.86 147.92 130.68 153.548 127.796C159.175 124.912 165.409 123.408 171.733 123.408C178.058 123.408 184.292 124.912 189.919 127.796C195.546 130.68 200.405 134.86 204.094 139.992C235.173 184.092 250.957 216.873 250.957 237.453C250.936 258.438 242.58 278.559 227.722 293.398C212.864 308.237 192.719 316.583 171.707 316.604ZM171.707 149.635C169.598 149.619 167.518 150.118 165.647 151.088C163.775 152.058 162.169 153.47 160.969 155.202C122.981 209.011 118.874 230.646 118.874 237.453C118.874 251.447 124.44 264.869 134.348 274.765C144.256 284.661 157.695 290.22 171.707 290.22C185.719 290.22 199.158 284.661 209.066 274.765C218.974 264.869 224.54 251.447 224.54 237.453C224.54 230.646 220.433 209.011 182.445 155.202C181.245 153.47 179.639 152.058 177.768 151.088C175.896 150.118 173.816 149.619 171.707 149.635Z" fill="#5A7AE4" /><path d="M66.0417 145.11C48.5328 145.089 31.747 138.133 19.3663 125.768C6.98565 113.403 0.020973 96.6383 0 79.1512C0 62.5295 11.1214 41.4886 33.9982 14.8147C37.9662 10.2075 42.8833 6.5102 48.4136 3.97562C53.9439 1.44104 59.9569 0.128906 66.0417 0.128906C72.1264 0.128906 78.1394 1.44104 83.6697 3.97562C89.2 6.5102 94.1172 10.2075 98.0851 14.8147C120.962 41.4622 132.083 62.5032 132.083 79.1512C132.062 96.6383 125.098 113.403 112.717 125.768C100.336 138.133 83.5506 145.089 66.0417 145.11ZM66.0417 26.3839C63.7607 26.3728 61.5053 26.8648 59.4367 27.8248C57.3681 28.7849 55.5372 30.1892 54.0749 31.9377C28.4111 61.8568 26.4167 75.6158 26.4167 79.1512C26.4167 89.6473 30.5914 99.7135 38.0226 107.135C45.4537 114.557 55.5325 118.727 66.0417 118.727C76.5509 118.727 86.6296 114.557 94.0608 107.135C101.492 99.7135 105.667 89.6473 105.667 79.1512C105.667 75.6422 103.672 61.8831 78.0084 31.9773C76.5511 30.2202 74.7222 28.8073 72.6531 27.8402C70.584 26.8731 68.3261 26.3758 66.0417 26.3839Z" fill="#5A7AE4" /><path d="M257.562 131.444C241.804 131.427 226.696 125.167 215.553 114.038C204.41 102.909 198.142 87.8198 198.125 72.0811C198.125 57.6888 207.371 39.0224 226.47 15.0133C230.208 10.3679 234.942 6.61926 240.323 4.0436C245.704 1.46794 251.595 0.130859 257.562 0.130859C263.53 0.130859 269.421 1.46794 274.802 4.0436C280.183 6.61926 284.917 10.3679 288.655 15.0133C307.754 39.0224 317 57.6888 317 72.0811C316.983 87.8198 310.715 102.909 299.572 114.038C288.429 125.167 273.321 131.427 257.562 131.444ZM257.562 26.3846C255.562 26.3814 253.587 26.8321 251.786 27.7028C249.985 28.5735 248.406 29.8414 247.168 31.4107C226.166 57.8471 224.542 69.2185 224.542 72.0811C224.542 80.8278 228.021 89.2163 234.213 95.4012C240.406 101.586 248.805 105.061 257.562 105.061C266.32 105.061 274.719 101.586 280.912 95.4012C287.104 89.2163 290.583 80.8278 290.583 72.0811C290.583 69.2185 288.959 57.8471 267.957 31.4239C266.72 29.8521 265.142 28.5818 263.341 27.7088C261.54 26.8358 259.564 26.383 257.562 26.3846Z" fill="#5A7AE4" /></g><defs><clipPath id="clip0_264_1466"><rect width="317" height="316.604" fill="white" /></clipPath></defs></svg>'
    },
    {
        id: 3,
        type: 'Електрика',
        status: 'pending',
        number: '345678',
        address: 'вул. Шевченка, 45, кв. 12',
        balance: 0,
        icon: '<svg width="30" height="30" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116.667 366.667L183.333 241.667L50 225.001L250 33.334H283.333L216.667 158.334L350 175.001L150 366.667H116.667ZM209.167 263.751L276.25 199.584L164.167 185.417L190.417 136.667L123.75 200.834L235.417 214.584L209.167 263.751Z" fill="#F9F871" /></svg>'
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

const paymentHistory = [
    { date: "12.04.2025", amount: "150,00 грн" },
    { date: "10.03.2025", amount: "850,00 грн" },
    { date: "15.02.2025", amount: "740,00 грн" },
    { date: "12.01.2025", amount: "690,00 грн" },
    { date: "05.12.2024", amount: "810,00 грн" },
    { date: "10.11.2024", amount: "735,00 грн" }
];


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
                <button class="link-btn view-payments-btn" style="margin-top: 1rem;">Всі платежі і борги →</button>
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

            <button class="btn-primary pay-now-btn">Оплатити зараз</button>
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

                <p style="font-size:.875rem;font-weight:500;color:#374151;margin:1rem 0 .5rem;">
                    Останні оплати:
                </p>

                <div id="paymentsList"></div>

                <div class="table-footer">
                    <p class="table-footer-text" id="shownPaymentsText"></p>
                    <button class="btn-text" id="loadMorePaymentsBtn">Більше</button>
                </div>
            </div>

            <div class="card">
                <h3 class="card-title">Оплата</h3>

                <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.5rem;">
                    <label class="checkbox-option">
                        <input type="checkbox" class="pay-checkbox" data-amount="100" checked>
                        <div class="checkbox-content">
                            <p>Сплатити поточний період</p>
                            <p>Березень 2025 — 100 грн</p>
                        </div>
                    </label>

                    <label class="checkbox-option">
                        <input type="checkbox" class="pay-checkbox" data-amount="356.20" checked>
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
                    <button class="link-btn" style="color:#F9F871;">Поставити на паузу</button>
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

            <div class="danger-card" id="terminateContractBtn">
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

function updateTotalPayment() {
    const checkboxes = document.querySelectorAll('.pay-checkbox');
    let total = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            total += parseFloat(cb.dataset.amount);
        }
    });

    document.querySelector('.total-amount').textContent =
        `${total.toFixed(2)} грн`;
}


function renderContent() {
    const content = document.getElementById('tabContent');
    if (!content) return;

    if (activeTab === 'overview') content.innerHTML = renderOverview();
    else if (activeTab === 'bills') content.innerHTML = renderBills();
    else if (activeTab === 'payment') content.innerHTML = renderPayment();
    if (activeTab === "payment") {
    setTimeout(() => {
        const checkboxes = document.querySelectorAll('.pay-checkbox');
        checkboxes.forEach(cb => {
            cb.addEventListener('change', updateTotalPayment);
        });
        updateTotalPayment(); 
    }, 0);
}
    else if (activeTab === 'contract') content.innerHTML = renderContract();

    if (activeTab === "payment") {
        paymentsVisible = 3;
        renderPayments();
    }

    attachMeterButtons();
    attachTerminateButton();

    document.querySelectorAll('.view-payments-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTab = "payment";

            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === 'payment') {
                    tab.classList.add('active');
                }
            });

            renderContent();
        });
    });

    document.querySelectorAll('.pay-now-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTab = "payment";

            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.dataset.tab === 'payment') {
                    tab.classList.add('active');
                }
            });

            renderContent();
        });
    });
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

function attachTerminateButton() {
    const terminateBtn = document.getElementById('terminateContractBtn');
    if (!terminateBtn) return;

    terminateBtn.addEventListener('click', () => {
        alert("Запит на розірвання договору надіслано!");
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

let paymentsVisible = 3; 
const paymentsStep = 3;

function renderPayments() {
    const container = document.getElementById("paymentsList");

    const slice = paymentHistory.slice(0, paymentsVisible);

    container.innerHTML = slice.map(p => `
        <div class="payment-item">
            <div class="payment-info">
                <p>${p.date}</p>
                <p>${p.amount}</p>
            </div>
        </div>
    `).join("");

    const loadBtn = document.getElementById("loadMorePaymentsBtn");

    if (paymentsVisible >= paymentHistory.length) {
        loadBtn.classList.add("hidden");
    } else {
        loadBtn.classList.remove("hidden");
    }
}

document.addEventListener("click", (e) => {
    if (e.target.id === "loadMorePaymentsBtn") {
        paymentsVisible += paymentsStep;
        renderPayments();
    }
});


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

    const terminateBtn = document.getElementById('terminateContractBtn');
    if (terminateBtn) {
        terminateBtn.addEventListener('click', () => {
            alert("Запит на розірвання договору надіслано!");
        });
    }
});
