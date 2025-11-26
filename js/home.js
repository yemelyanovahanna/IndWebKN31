document.addEventListener("DOMContentLoaded", function () {

    const wrapper = document.getElementById('newsWrapper');

    if (wrapper) {
        window.nextNews = function () {
            const first = wrapper.children[0];
            wrapper.appendChild(first);

            wrapper.classList.add('slide-animation');
            setTimeout(() => wrapper.classList.remove('slide-animation'), 300);
        };

        window.prevNews = function () {
            const last = wrapper.children[wrapper.children.length - 1];
            wrapper.insertBefore(last, wrapper.children[0]);

            wrapper.classList.add('slide-animation');
            setTimeout(() => wrapper.classList.remove('slide-animation'), 300);
        };

        let autoScroll = setInterval(nextNews, 5000);

        wrapper.addEventListener('mouseenter', () => clearInterval(autoScroll));
        wrapper.addEventListener('mouseleave', () => {
            autoScroll = setInterval(nextNews, 5000);
        });
    }


    const faqItems = [
    {
      question: "Як передати показники лічильників?",
      answer:
        "Показники лічильників можна передати через особистий кабінет на сайті, мобільний додаток або за телефоном гарячої лінії.",
    },
    {
      question: "Як сплатити комунальні послуги онлайн?",
      answer:
        "Оплатити послуги можна через інтернет-банкінг, мобільні додатки банків, платіжні термінали або в особистому кабінеті на нашому сайті.",
    },
    {
      question: "Що робити при аварійному відключенні води чи світла?",
      answer:
        "У разі аварійного відключення зателефонуйте на гарячу лінію або перевірте інформацію про планові роботи.",
    },
    {
      question: "Як підключити нову адресу до особистого кабінету?",
      answer:
        "Для підключення нової адреси увійдіть в особистий кабінет і оберіть 'Додати адресу'.",
    },
    {
      question: "Як змінити тариф або підключити автосписання?",
      answer:
        "Зміна тарифу та автосписання доступні у розділі 'Налаштування'.",
    },
    {
      question: "Де отримати довідку про відсутність заборгованості?",
      answer:
        "Довідку можна отримати в особистому кабінеті або звернувшись у центр обслуговування.",
    },
    {
      question: "Як оформити пільгу на комунальні послуги?",
      answer:
        "Пільга оформлюється через відділ соцзахисту або електронний кабінет.",
    },
    {
      question: "Коли проводиться повірка лічильників?",
      answer:
        "Холодна вода – раз на 6 років, гаряча – раз на 4 роки, електроенергія – раз на 8-16 років.",
    },
];

const faqList = document.getElementById("faqList");

faqItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "faq-item";

    div.innerHTML = `
        <button class="faq-question-btn" data-index="${index}">
            <span class="faq-question-text">${item.question}</span>
            <span class="faq-arrow">⌄</span>
        </button>
        <div class="faq-answer">${item.answer}</div>
    `;

    faqList.appendChild(div);
});



// FAQ
faqList.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-question-btn");
    if (!btn) return;

    const index = btn.dataset.index;
    const item = btn.parentElement;

    document.querySelectorAll(".faq-item").forEach((i) => {
        if (i !== item) i.classList.remove("open");
    });

    item.classList.toggle("open");
});

});
