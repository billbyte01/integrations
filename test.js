let intervalSub = setInterval(() => {
	if (window.location.href.includes('majk.com.pl/pl/basket/step2')) {
		;(function () {
			document.querySelector('body').addEventListener('mousedown', function (e) {
				var pNumberCheck = document.querySelectorAll('.address-card > address-card > p').length
				if (pNumberCheck == 3 || pNumberCheck == 6) {
					var emailValue = document.querySelectorAll('.address-card > address-card > p')[2]
					var phone = document.querySelectorAll('.address-card > address-card > p')[1]
				}
				if (pNumberCheck == 4 || pNumberCheck == 7) {
					var emailValue = document.querySelectorAll('.address-card > address-card > p')[3]
					var phone = document.querySelectorAll('.address-card > address-card > p')[2]
				}
				var submitButton = document.querySelector('.basket-module .basket-summary__footer .btn')
				var subscriptionCheckbox = document.querySelector('#additional_newsletter')
				var eventPath = e.path || e.composedPath()
				document.addEventListener('keydown', (event) => {
					if (event.key === 'Enter') {
						if (emailValue) {
							_edrone.email = emailValue.innerText
							_edrone.action_type = 'subscribe'
							_edrone.customer_tags = 'Order'
							_edrone.phone = phone.innerText
							if (subscriptionCheckbox && subscriptionCheckbox.checked) {
								_edrone.init()
							}
						}
					}
				})
				if (eventPath.includes(submitButton)) {
					if (emailValue) {
						_edrone.email = emailValue.innerText
						_edrone.action_type = 'subscribe'
						_edrone.customer_tags = 'Order'
						_edrone.phone = phone.innerText
						if (subscriptionCheckbox && subscriptionCheckbox.checked) {
							_edrone.init()
						}
					}
				}
			})
		})()
		clearInterval(intervalSub)
	}
}, 5000)
