// the best, universal plug-in for all forms

const nlSubscriptionForm = document.querySelector('form[action="https://amso.pl/settings.php"]');
if (nlSubscriptionForm !== null) {
    const emailValue = nlSubscriptionForm.querySelector('#mailing_email');
    const subCheckbox = nlSubscriptionForm.querySelector('#mailing_policy');
    nlSubscriptionForm.addEventListener('submit', () => {
        if (subCheckbox.checked) {
            _edrone.email = emailValue.value;
            _edrone.customer_tags = 'TEST';
            _edrone.action_type = 'subscribe';
            _edrone.init();
        }
    })
}

// when there is no 'form' we can use old version for 'click' and 'keydown' listening

const buttonSubscription = document.querySelector('button[data-link-action="save-customer"]');
if (buttonSubscription !== null) {
    const emailValue = document.querySelector('input[name="email"]');
    const firstName = document.querySelector('input[name="firstname"]');
    const lastName = document.querySelector('input[name="lastname"]');
    const subCheckbox = document.querySelector('input[name="newsletter"]');
	const userPhone = document.querySelector('input[name="phone"]');
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            if (subCheckbox.checked) {
                _edrone.email = emailValue.value;
                _edrone.first_name = firstName.value;
                _edrone.last_name = lastName.value;
				_edrone.phone = userPhone.value;
                _edrone.customer_tags = 'TEST';
                _edrone.action_type = 'subscribe';
                _edrone.init();
            }
        }
    })
    buttonSubscription.addEventListener('click', () => {
        if (subCheckbox.checked) {
            _edrone.email = emailValue.value;
            _edrone.first_name = firstName.value;
            _edrone.last_name = lastName.value;
			_edrone.phone = userPhone.value;
            _edrone.customer_tags = 'TEST';
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
