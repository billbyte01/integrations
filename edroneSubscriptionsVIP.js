// the best, universal plug-in for all forms

const nlSubscriptionForm = document.querySelector('form[action="XXX"]');
if (nlSubscriptionForm !== null) {
    const emailValue = nlSubscriptionForm.querySelector('XXX');
    const subCheckbox = nlSubscriptionForm.querySelector('XXX');
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

const buttonSubscription = document.querySelector('XXX');
if (buttonSubscription !== null) {
    const emailValue = document.querySelector('XXX');
	const subCheckbox = document.querySelector('XXX');
    const firstName = document.querySelector('XXX');
    const lastName = document.querySelector('XXX');
	const userPhone = document.querySelector('XXX');
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

// order form with many steps example plug-in:

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
