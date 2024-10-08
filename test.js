
const buttonRegister = document.querySelector('.basicLightbox .confirm-button"]');
if (buttonRegister !== null) {
    const mail = document.querySelector('#newsletter .newsletter-input input[type="text"]');
    const box = document.querySelector('.basicLightbox input[type="checkbox"]');
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            if (box.checked) {
                _edrone.email = mail.value;
                _edrone.customer_tags = 'test';
                _edrone.action_type = 'subscribe';
                _edrone.init();
            }
        }
    })
    buttonRegister.addEventListener('click', () => {
        if (box.checked) {
            _edrone.email = mail.value;
            _edrone.customer_tags = 'test';
            _edrone.action_type = 'subscribe';
            _edrone.init();
        }
    })
}