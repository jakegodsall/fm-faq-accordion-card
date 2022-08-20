const faqSection = document.querySelector('.faq');

const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const template = e.target.parentNode.nextElementSibling;

        const clone = template.content.cloneNode(true);

    });
})

