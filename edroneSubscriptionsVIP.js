// the best, universal plug-in for all forms

const nlFooterForm = document.querySelector('form[action="https://amso.pl/settings.php"]');
if (nlFooterForm !== null) {
    const mail = nlFooterForm.querySelector('#mailing_email');
    const box = nlFooterForm.querySelector('#mailing_policy');
    nlFooterForm.addEventListener('submit', () => {
        if (box.checked) {
            _edrone.email = mail.value;
            _edrone.customer_tags = 'Footer';
            _edrone.action_type = 'subscribe';
            _edrone.init();
        }
    })
}

// when there is no 'form' we can use old version for 'click' and 'keydown' listening

const buttonRegister = document.querySelector('button[data-link-action="save-customer"]');
if (buttonRegister !== null) {
    const mail = document.querySelector('input[name="email"]');
    const name = document.querySelector('input[name="firstname"]');
    const surname = document.querySelector('input[name="lastname"]');
    const box = document.querySelector('input[name="newsletter"]');
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            if (box.checked) {
                _edrone.email = mail.value;
                _edrone.first_name = name.value;
                _edrone.last_name = surname.value;
                _edrone.customer_tags = 'Rejestracja';
                _edrone.action_type = 'subscribe';
                _edrone.init();
            }
        }
    })
    buttonRegister.addEventListener('click', () => {
        if (box.checked) {
            _edrone.email = mail.value;
            _edrone.first_name = name.value;
            _edrone.last_name = surname.value;
            _edrone.customer_tags = 'Rejestracja';
            _edrone.action_type = 'subscribe';
            _edrone.init();
        }
    })
}

// order many steps form:

if (window.location.href.includes('zamowienie,4')) {
	document.querySelector('body').addEventListener('click', function (e) {
		const submitButton = document.querySelector('#place-order')
		if (submitButton) {
			const emailValue = document.querySelector('.order-details-container .content').getElementsByTagName('div')[3]
			const name = document.querySelector('.order-details-container .content').getElementsByTagName('div')[0]
			const surname = document.querySelector('.order-details-container .content').getElementsByTagName('div')[0]
			const subscriptionCheckbox = document.querySelector('#order-summary-tos input[name="channelKey"]')
			const eventPath = e.path || e.composedPath()
			if (eventPath.includes(submitButton)) {
				if (subscriptionCheckbox.checked) {
					_edrone.email = emailValue.textContent
					_edrone.first_name = name.textContent.split(' ')[0]
					_edrone.last_name = surname.textContent.split(' ')[1]
					_edrone.action_type = 'subscribe'
					_edrone.customer_tags = 'Order'
					_edrone.init()
				}
			}
		}
	})
	document
		.querySelector('#place-order')
		.addEventListener('click', function () {
			const submitButton = document.querySelector('#place-order')
			if (submitButton) {
				const emailValue = document.querySelector('.order-details-container .content').getElementsByTagName('div')[3]
				const name = document.querySelector('.order-details-container .content').getElementsByTagName('div')[0]
				const surname = document.querySelector('.order-details-container .content').getElementsByTagName('div')[0]
				const subscriptionCheckbox = document.querySelector('#order-summary-tos input[name="channelKey"]')
				document.addEventListener('keydown', (event) => {
					if (event.key === 'Enter') {
						if (subscriptionCheckbox.checked) {
							_edrone.email = emailValue.textContent
							_edrone.first_name = name.textContent.split(' ')[0]
							_edrone.last_name = surname.textContent.split(' ')[1]
							_edrone.action_type = 'subscribe'
							_edrone.customer_tags = 'Order'
							_edrone.init()
						}
					}
				})
			}
		})
}
