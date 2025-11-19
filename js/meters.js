
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
            { date: '01.06.2025', value: '14213', consumption: '301', submitted: true }
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
            { date: '01.06.2025', value: '199', consumption: '12', submitted: true }
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
            { date: '01.06.2025', value: '148', consumption: '8', submitted: true }
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
            { date: '01.06.2025', value: '8.5', consumption: '0.6', submitted: true }
        ]
    },
    maintenance: {
        name: 'Утримання будинку',
        icon: '🏢',
        serialNumber: 'N/A',
        type: 'фіксована плата',
        unit: '',
        lastReading: null,
        status: 'inactive'
    }
};

let currentService = 'electricity';


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
    } else {
        meterInfoCards.classList.add('hidden');
        submitCard.classList.add('hidden');
    }
}


function updateHistoryTable() {
    const service = services[currentService];
    const tbody = document.getElementById('historyTableBody');
    
    if (!service.history) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center">Немає даних</td></tr>';
        return;
    }
    
    tbody.innerHTML = service.history.map(entry => `
        <tr>
            <td>${entry.date}</td>
            <td class="text-right font-medium">${entry.value} ${service.unit}</td>
            <td class="text-right">${entry.consumption} ${service.unit}</td>
            <td class="text-center">
                ${entry.submitted ? `
                    <span class="status-badge status-success">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        Прийнято
                    </span>
                ` : `
                    <span class="status-badge status-pending">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Очікує
                    </span>
                `}
            </td>
        </tr>
    `).join('');
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