document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.getElementById('newsWrapper');

    if (!wrapper) return;

   
    window.nextNews = function() {
        const first = wrapper.children[0];
        wrapper.appendChild(first);

        wrapper.classList.add('slide-animation');
        setTimeout(() => wrapper.classList.remove('slide-animation'), 300);
    };

    
    window.prevNews = function() {
        const last = wrapper.children[wrapper.children.length - 1];
        wrapper.insertBefore(last, wrapper.children[0]);

        wrapper.classList.add('slide-animation');
        setTimeout(() => wrapper.classList.remove('slide-animation'), 300);
    };

    
    let autoScroll = setInterval(nextNews, 5000);

    wrapper.addEventListener('mouseenter', () => clearInterval(autoScroll));
    wrapper.addEventListener('mouseleave', () => autoScroll = setInterval(nextNews, 5000));
});
