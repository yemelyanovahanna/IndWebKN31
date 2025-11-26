
const metersByAddress = {
    address1: {
        electricity: {
            name: 'Електрика',
            icon: '',
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
                { date: '01.05.2025', value: '13912', consumption: '276', submitted: true },
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
            icon: '',
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
            icon: '',
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
            icon: '',
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
            icon: '',
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
    },

    address2: {
        electricity: {
            name: 'Електрика',
            icon: '',
            serialNumber: '555222111',
            type: 'денний/нічний',
            unit: 'кВт⋅год',
            lastReading: {
                value: '9821',
                date: '03.10.2025',
                time: '16:10'
            },
            verificationDate: '01.05.2024',
            verificationExpiry: '01.05.2030',
            status: 'active',
            history: [
                { date: '03.10.2025', value: '9821', consumption: '210', submitted: true },
                { date: '01.09.2025', value: '9611', consumption: '198', submitted: true },
                { date: '01.08.2025', value: '9413', consumption: '205', submitted: true },
                { date: '01.07.2025', value: '9208', consumption: '187', submitted: true }
            ]
        }
    }
};


const meterStats = {
    address1: {
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
    },

    address2: {
        electricity: {
            month: "210 кВт⋅год",
            monthChange: "+6%",
            avg: "200 кВт⋅год",
            avgPeriod: "За останні 6 місяців",
            yearly: "2,350 кВт⋅год",
            since: "З 01.10.2024"
        }
    }
};

let currentAddress = "address1";
let currentService = "electricity";

const addressButtons = document.querySelectorAll(".address-btn");

addressButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        addressButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentAddress = btn.dataset.address;

        if (!metersByAddress[currentAddress][currentService]) {
            currentService = "electricity";
        }

        updateSidebar();
        updateServiceDisplay();
        updateStats();
        historyVisibleCount = 5;
        renderHistory();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    updateSidebar();
    updateServiceDisplay();
    updateStats();
    renderHistory();
});



function updateStats(address, service) {
    const stats = meterStats[currentAddress]?.[currentService];
    if (!stats) {
        document.getElementById("statMonth").textContent = "-";
        document.getElementById("statMonthChange").textContent = "";
        document.getElementById("statAvg").textContent = "-";
        document.getElementById("statAvgPeriod").textContent = "";
        document.getElementById("statYearly").textContent = "-";
        document.getElementById("statSince").textContent = "";
        return;
    }

    document.getElementById("statMonth").textContent = stats.month;
    document.getElementById("statMonthChange").textContent = stats.monthChange;
    document.getElementById("statAvg").textContent = stats.avg;
    document.getElementById("statAvgPeriod").textContent = stats.avgPeriod;
    document.getElementById("statYearly").textContent = stats.yearly;
    document.getElementById("statSince").textContent = stats.since;
}

// // ///
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
    const service = metersByAddress[currentAddress][currentService];
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

        currentService = button.dataset.service;
        updateStats(currentAddress, currentService);
        historyVisibleCount = 5;
        renderHistory();


        serviceButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        sidebar.classList.remove('mobile-open');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');

        updateServiceDisplay();
        updateStats(currentService);

        historyVisibleCount = 5;
        renderHistory();
    });
});

function updateSidebar() {
    const availableServices = Object.keys(metersByAddress[currentAddress]);
    
    serviceButtons.forEach(btn => {
        const serviceId = btn.dataset.service;

        if (!availableServices.includes(serviceId)) {
            btn.classList.add("hidden");
        } else {
            btn.classList.remove("hidden");
        }
    });
}

function updateServiceDisplay() {
    const service = metersByAddress[currentAddress][currentService];

    document.getElementById('serviceIconLarge').textContent = service.icon;
    document.getElementById('serviceTitle').textContent = service.name;

    const subtitle = service.type 
        ? `${service.type} • серійний № ${service.serialNumber}` 
        : `серійний № ${service.serialNumber}`;
    document.getElementById('serviceSubtitle').textContent = subtitle;

    const meterInfoCards = document.getElementById('meterInfoCards');
    const submitCard = document.getElementById('submitCard');

    if (currentService === "maintenance") {
        submitCard.classList.add("hidden");
        emptyState.classList.add("hidden"); 
        addReadingBtn.classList.add("hidden");
    } 
    else {
        submitCard.classList.remove("hidden");
        emptyState.classList.remove("hidden");
        addReadingBtn.classList.remove("hidden");
    }

    if (service.lastReading) {
        meterInfoCards.classList.remove('hidden');
        
        const lastReadingValue = meterInfoCards.querySelector('.info-card-value-large');
        const lastReadingDate = meterInfoCards.querySelector('.info-card-detail-highlight');

        lastReadingValue.textContent = `${service.lastReading.value} ${service.unit}`;
        lastReadingDate.textContent = `${service.lastReading.date} о ${service.lastReading.time}`;

        updateStats();
        historyVisibleCount = 5;
        renderHistory();
    } else {
        meterInfoCards.classList.add('hidden');
    }
}



function updateHistoryTable() {

    historyVisibleCount = 5;  
    renderHistory();

    const service = metersByAddress[currentAddress][currentService];
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
    const service = metersByAddress[currentAddress][currentService];
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

    const service = metersByAddress[currentAddress][currentService];
    const newValue = parseFloat(meterValueInput.value);
    const lastValue = parseFloat(service.lastReading.value);
    const consumption = newValue - lastValue;

    service.history.unshift({
        date: new Date().toLocaleDateString('uk-UA'),
        value: newValue.toString(),
        consumption: consumption.toString(),
        submitted: true
    });

    service.lastReading.value = newValue.toString();
    service.lastReading.date = new Date().toLocaleDateString('uk-UA');
    service.lastReading.time = new Date().toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit'
    });

    submitFormContainer.classList.add('hidden');
    emptyState.classList.remove('hidden');
    addReadingBtn.classList.remove('hidden');
    meterValueInput.value = '';
    consumptionInfo.classList.add('hidden');

    updateServiceDisplay();
    updateStats();
    historyVisibleCount = 5;     
    renderHistory();             

    alert(`Показник ${newValue} ${service.unit} успішно відправлено!`);
});

