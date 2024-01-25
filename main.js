
window.onload = () => {
    const hamMenuBtn = document.getElementById('ham-menu-btn');
    const nav = document.getElementById('nav');
    hamMenuBtn.addEventListener('click', e => {
        if (nav.classList.value == 'show-nav') {
            nav.classList.remove('show-nav');
            nav.classList.add('hide');
        }
        else {
            nav.classList.add('show-nav');
            nav.classList.remove('hide');
        }
    });

    const confirmEmail = document.getElementById('confirm-email')
    confirmEmail && confirmEmail.addEventListener('input', e => {
        const email = document.getElementById('email');
        if (e.target.value != email.value) {
            confirmEmail.setCustomValidity("Emails do not match!");
        } else {
            confirmEmail.setCustomValidity("");
        }

    });

    const contactForm = document.getElementById('contact-form');
    contactForm && contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const user = document.getElementById('first-name').value;
        if (contactForm.reportValidity()) {
            alert(`Hi ${user}! Your message has been recieved!`);
            contactForm.reset();
        }
    });
}