//footer edrone plug-in
;(function () {
	async function getSubscriptionStatus() {
		try {
			const response = await fetch('https://api.edrone.me/subscription_status?app_id=' + window._edrone.app_id + '&fpcid=' + getCookie('fp_ccid'))
			if (!response.ok) {
				throw new Error('HTTP error! Status: ' + response.status)
			}
			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error fetching subscription status:', error)
			return null
		}
	}
	function getCookie(name) {
		let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
		return v ? v[2] : null
	}
	const addSubscriptionBox = function (targetId) {
		const targetElement = document.querySelector(targetId)
		if (targetElement) {
			const subscriptionBox = document.createElement('div')
			subscriptionBox.id = '.container__subscription-box'.substring(1)
			const textNode = document.createElement('p')
			textNode.innerText = 'Bądź na bieżąco z naszymi nowościami'
			subscriptionBox.appendChild(textNode)
			const button = document.createElement('button')
			button.innerText = 'Zapisuję się'
			if ('#custom_edrone_form_footer'.startsWith('#')) {
				button.id = '#custom_edrone_form_footer'.substring(1)
			} else if ('#custom_edrone_form_footer'.startsWith('.')) {
				button.className = '#custom_edrone_form_footer'.substring(1)
			} else {
				button.id = '#custom_edrone_form_footer'
			}
			subscriptionBox.appendChild(button)
			targetElement.prepend(subscriptionBox)
		}
	}
	if ('any' === 'any') {
		addSubscriptionBox('footer .container')
	} else {
		getSubscriptionStatus().then((result) => {
			if (('any' === 'others' && !result.status) || ('any' === 'subscribed' && result.status)) {
				addSubscriptionBox('footer .container')
			}
		})
	}
})()
