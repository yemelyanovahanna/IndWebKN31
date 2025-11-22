
const services = {
    electricity: {
        name: 'Електрика',
        icon: '⚡',
        serialNumber: '123456789',
        type: 'денний/нічний',
        unit: 'кВт⋅год',
        lastReading: {
            value: '15432',
            date: '02.10.2025',
            time: '14:30'
        },
        verificationDate: '12.03.2024',
        verificationExpiry: '12.03.2030',
        status: 'active',
        history: [
            { date: '02.10.2025', value: '15432', consumption: '324', submitted: true },
            { date: '01.09.2025', value: '15108', consumption: '298', submitted: true },
            { date: '01.08.2025', value: '14810', consumption: '312', submitted: true },
            { date: '01.07.2025', value: '14498', consumption: '285', submitted: true },
            { date: '01.06.2025', value: '14213', consumption: '301', submitted: true },
            {date: '01.05.2025', value: '13912', consumption: '276', submitted: true },
            { date: '01.04.2025', value: '13636', consumption: '295', submitted: true },
            { date: '01.03.2025', value: '13341', consumption: '288', submitted: true },
            { date: '01.02.2025', value: '13053', consumption: '274', submitted: true },
            { date: '01.01.2025', value: '12779', consumption: '269', submitted: true },
            { date: '01.12.2024', value: '12510', consumption: '281', submitted: true },
            { date: '01.11.2024', value: '12229', consumption: '260', submitted: true }
        ]
    },
    cold_water: {
        name: 'Холодна вода',
        icon: '💧',
        serialNumber: '987654321',
        type: 'однотарифний',
        unit: 'м³',
        lastReading: {
            value: '245',
            date: '03.10.2025',
            time: '10:15'
        },
        verificationDate: '15.06.2023',
        verificationExpiry: '15.06.2029',
        status: 'active',
        history: [
            { date: '03.10.2025', value: '245', consumption: '12', submitted: true },
            { date: '01.09.2025', value: '233', consumption: '11', submitted: true },
            { date: '01.08.2025', value: '222', consumption: '13', submitted: true },
            { date: '01.07.2025', value: '209', consumption: '10', submitted: true },
            { date: '01.06.2025', value: '199', consumption: '12', submitted: true },
            { date: '01.05.2025', value: '187', consumption: '11', submitted: true },
            { date: '01.04.2025', value: '176', consumption: '9', submitted: true },
            { date: '01.03.2025', value: '167', consumption: '10', submitted: true },
            { date: '01.02.2025', value: '157', consumption: '8', submitted: true },
            { date: '01.01.2025', value: '149', consumption: '9', submitted: true },
            { date: '01.12.2024', value: '140', consumption: '7', submitted: true },
            { date: '01.11.2024', value: '133', consumption: '8', submitted: true }
        ]
    },
    hot_water: {
        name: 'Гаряча вода',
        icon: '♨️',
        serialNumber: '456789123',
        type: 'однотарифний',
        unit: 'м³',
        lastReading: {
            value: '178',
            date: '03.10.2025',
            time: '10:20'
        },
        verificationDate: '20.08.2023',
        verificationExpiry: '20.08.2029',
        status: 'active',
        history: [
            { date: '03.10.2025', value: '178', consumption: '8', submitted: true },
            { date: '01.09.2025', value: '170', consumption: '7', submitted: true },
            { date: '01.08.2025', value: '163', consumption: '9', submitted: true },
            { date: '01.07.2025', value: '154', consumption: '6', submitted: true },
            { date: '01.06.2025', value: '148', consumption: '8', submitted: true },
            { date: '01.05.2025', value: '140', consumption: '7', submitted: true },
            { date: '01.04.2025', value: '133', consumption: '8', submitted: true },
            { date: '01.03.2025', value: '125', consumption: '6', submitted: true },
            { date: '01.02.2025', value: '119', consumption: '7', submitted: true },
            { date: '01.01.2025', value: '112', consumption: '6', submitted: true },
            { date: '01.12.2024', value: '106', consumption: '7', submitted: true },
            { date: '01.11.2024', value: '99', consumption: '6', submitted: true }
        ]
    },
    heating: {
        name: 'Тепло',
        icon: '🔥',
        serialNumber: '789123456',
        type: 'централізоване',
        unit: 'Гкал',
        lastReading: {
            value: '12.5',
            date: '01.10.2025',
            time: '09:00'
        },
        verificationDate: '10.09.2023',
        verificationExpiry: '10.09.2027',
        status: 'active',
        history: [
            { date: '01.10.2025', value: '12.5', consumption: '2.3', submitted: true },
            { date: '01.09.2025', value: '10.2', consumption: '0.8', submitted: true },
            { date: '01.08.2025', value: '9.4', consumption: '0.5', submitted: true },
            { date: '01.07.2025', value: '8.9', consumption: '0.4', submitted: true },
            { date: '01.06.2025', value: '8.5', consumption: '0.6', submitted: true },
            { date: '01.05.2025', value: '7.9', consumption: '0.5', submitted: true },
            { date: '01.04.2025', value: '7.4', consumption: '0.7', submitted: true },
            { date: '01.03.2025', value: '6.7', consumption: '0.6', submitted: true },
            { date: '01.02.2025', value: '6.1', consumption: '0.5', submitted: true },
            { date: '01.01.2025', value: '5.6', consumption: '0.6', submitted: true },
            { date: '01.12.2024', value: '5.0', consumption: '0.7', submitted: true },
            { date: '01.11.2024', value: '4.3', consumption: '0.5', submitted: true }
        ]
    },
    maintenance: {
        name: 'Утримання будинку',
        icon: '🏢',
        serialNumber: 'N/A',
        type: 'фіксована плата',
        unit: '₴',
        lastReading: {
            value: '870',
            date: '03.10.2025',
            time: '09:00'
        },
        verificationDate: null,
        verificationExpiry: null,
        status: 'active',
        history: [
            { date: '03.10.2025', value: '870', consumption: 'Електрика, Прибирання, Обслуговування ліфта', submitted: true },
            { date: '01.09.2025', value: '870', consumption: 'Електрика, Прибирання, Ремонт дверей', submitted: true },
            { date: '01.08.2025', value: '870', consumption: 'Електрика, Прибирання, Дезінфекція', submitted: true },
            { date: '01.07.2025', value: '870', consumption: 'Електрика, Прибирання, Вивіз сміття', submitted: true },
            { date: '01.06.2025', value: '870', consumption: 'Електрика, Прибирання, Підміна лампочок', submitted: true },
            { date: '01.05.2025', value: '870', consumption: 'Електрика, Прибирання, Обслуговування пожежної системи', submitted: true },
            { date: '01.04.2025', value: '870', consumption: 'Електрика, Прибирання, Ремонт даху', submitted: true },
            { date: '01.03.2025', value: '870', consumption: 'Електрика, Прибирання, Обрізка дере', submitted: true },
            { date: '01.02.2025', value: '870', consumption: 'Електрика, Прибирання, Ремонт під’їзду', submitted: true },
            { date: '01.01.2025', value: '870', consumption: 'Електрика, Прибирання, Обслуговування ліфта', submitted: true },
            { date: '01.12.2024', value: '870', consumption: 'Електрика, Прибирання, Вивіз сміття', submitted: true },
            { date: '01.11.2024', value: '870', consumption: 'Електрика, Прибирання, Підміна лампочок', submitted: true }
        ]
    }
};

const meterStats = {
    electricity: {
        month: "324 кВт⋅год",
        monthChange: "+8%",
        avg: "304 кВт⋅год",
        avgPeriod: "За останні 6 місяців",
        yearly: "3,648 кВт⋅год",
        since: "З 01.11.2024"
    },
    cold_water: {
        month: "3.2 м³",
        monthChange: "+2%",
        avg: "3.0 м³",
        avgPeriod: "За останні 6 місяців",
        yearly: "36.5 м³",
        since: "З 01.11.2024"
    },
    hot_water: {
        month: "1.2 м³",
        monthChange: "-4%",
        avg: "1.4 м³",
        avgPeriod: "За останні 6 місяців",
        yearly: "15.2 м³",
        since: "З 01.11.2024"
    },
    heating: {
        month: "0.42 Гкал",
        monthChange: "+6%",
        avg: "0.39 Гкал",
        avgPeriod: "За останні 6 місяців",
        yearly: "4.5 Гкал",
        since: "З 01.11.2024"
    }
};

function updateStats(service) {
    const s = meterStats[service];
    if (!s) return;

    document.getElementById("statMonth").textContent = s.month;
    document.getElementById("statMonthChange").textContent = s.monthChange;
    document.getElementById("statAvg").textContent = s.avg;
    document.getElementById("statAvgPeriod").textContent = s.avgPeriod;
    document.getElementById("statYearly").textContent = s.yearly;
    document.getElementById("statSince").textContent = s.since;
}


let currentService = 'electricity';
const urlParams = new URLSearchParams(window.location.search);
const requestedType = urlParams.get("type"); 

const typeMap = {
    heat: "heating",
    water: "cold_water",
    electricity: "electricity"
};

if (requestedType && typeMap[requestedType]) {
    currentService = typeMap[requestedType];
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const sidebar = document.getElementById('sidebar');
const serviceButtons = document.querySelectorAll('.service-btn');
const addReadingBtn = document.getElementById('addReadingBtn');
const cancelBtn = document.getElementById('cancelBtn');
const submitForm = document.getElementById('submitForm');
const submitFormContainer = document.getElementById('submitFormContainer');
const emptyState = document.getElementById('emptyState');
const meterValueInput = document.getElementById('meterValueInput');
const consumptionInfo = document.getElementById('consumptionInfo');


let historyVisibleCount = 5;   
const historyStep = 5;         
const loadMoreBtn = document.getElementById("loadMoreBtn");
const shownCountText = document.getElementById("shownCountText");

function renderHistory() {
    const service = services[currentService];
    const tbody = document.getElementById("historyTableBody");

    const slice = service.history.slice(0, historyVisibleCount);

    tbody.innerHTML = slice.map(entry => `
        <tr>
            <td>${entry.date}</td>
            <td class="td-value">${entry.value} ${service.unit}</td>
            <td class="td-consumption">${entry.consumption} ${service.unit}</td>
            <td class="text-status">
                ${entry.submitted
                    ? `<span class="status-badge status-success">
                        ✓ Прийнято
                       </span>`
                    : `<span class="status-badge status-pending">Очікує</span>`
                }
            </td>
        </tr>
    `).join("");

    shownCountText.textContent = `Показано ${slice.length} з ${service.history.length} записів`;

    if (historyVisibleCount >= service.history.length) {
        loadMoreBtn.classList.add("hidden");
    } else {
        loadMoreBtn.classList.remove("hidden");
    }
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        historyVisibleCount += historyStep;
        renderHistory();
    });
}


mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});


serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceId = button.getAttribute('data-service');
        
        
        serviceButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        
        currentService = serviceId;
        
        
        sidebar.classList.remove('mobile-open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        
        
        updateServiceDisplay();
    });
});


function updateServiceDisplay() {
    const service = services[currentService];
    
    
    document.getElementById('serviceIconLarge').textContent = service.icon;
    document.getElementById('serviceTitle').textContent = service.name;
    
    const subtitle = service.type ? `${service.type} • серійний № ${service.serialNumber}` : `серійний № ${service.serialNumber}`;
    document.getElementById('serviceSubtitle').textContent = subtitle;
    
    
    const meterInfoCards = document.getElementById('meterInfoCards');
    const submitCard = document.getElementById('submitCard');
    
    if (service.lastReading) {
        meterInfoCards.classList.remove('hidden');
        submitCard.classList.remove('hidden');
        
        
        const lastReadingValue = meterInfoCards.querySelector('.info-card-value-large');
        const lastReadingDate = meterInfoCards.querySelector('.info-card-detail-highlight');
        lastReadingValue.textContent = `${service.lastReading.value} ${service.unit}`;
        lastReadingDate.textContent = `${service.lastReading.date} о ${service.lastReading.time}`;
        
        
        document.getElementById('lastReadingValue').textContent = `${service.lastReading.value} ${service.unit}`;
        document.getElementById('lastReadingDate').textContent = service.lastReading.date;
        meterValueInput.placeholder = `Більше ${service.lastReading.value}`;
        meterValueInput.min = parseInt(service.lastReading.value) + 1;
        
        
        updateHistoryTable();
        updateStats(currentService);
    } else {
        meterInfoCards.classList.add('hidden');
        submitCard.classList.add('hidden');
    }
}


function updateHistoryTable() {

    historyVisibleCount = 5;  
    renderHistory();

    const service = services[currentService];
    const tbody = document.getElementById('historyTableBody');
    
    if (!service.history || service.history.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">Немає даних</td></tr>';
        return;
    }
}


addReadingBtn.addEventListener('click', () => {
    submitFormContainer.classList.remove('hidden');
    emptyState.classList.add('hidden');
    addReadingBtn.classList.add('hidden');
    meterValueInput.value = '';
    consumptionInfo.classList.add('hidden');
    meterValueInput.focus();
});


cancelBtn.addEventListener('click', () => {
    submitFormContainer.classList.add('hidden');
    emptyState.classList.remove('hidden');
    addReadingBtn.classList.remove('hidden');
    meterValueInput.value = '';
    consumptionInfo.classList.add('hidden');
});


meterValueInput.addEventListener('input', () => {
    const service = services[currentService];
    const newValue = parseInt(meterValueInput.value);
    const lastValue = parseInt(service.lastReading.value);
    
    if (newValue && newValue > lastValue) {
        const consumption = newValue - lastValue;
        consumptionInfo.textContent = `Споживання: ${consumption} ${service.unit}`;
        consumptionInfo.classList.remove('hidden');
    } else {
        consumptionInfo.classList.add('hidden');
    }
});


submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const service = services[currentService];
    const newValue = meterValueInput.value;
    
    alert(`Показник ${newValue} ${service.unit} успішно відправлено!`);
    
    
    submitFormContainer.classList.add('hidden');
    emptyState.classList.remove('hidden');
    addReadingBtn.classList.remove('hidden');
    meterValueInput.value = '';
    consumptionInfo.classList.add('hidden');
});

updateServiceDisplay();