// order plug-in added in admin panel
const orderReceived = window.location.href.includes('order-received')
if (orderReceived) {
	const products = {
		product_skus: [],
		product_ids: [],
		product_titles: [],
		product_images: [],
		product_category_ids: [],
		product_category_names: [],
		product_urls: [],
		product_counts: [],
	}
	setTimeout(function () {
		const dataLayerPurchaseEvent = dataLayer.filter(function (entry) {
			return entry.event === 'purchase'
		})[0].ecommerce
		if (dataLayerPurchaseEvent) {
			const productHtmlList = document.querySelectorAll('.order-item-wrapper')
			dataLayerPurchaseEvent.items.forEach(function (product, index) {
				products.product_ids.push(product.id)
				products.product_skus.push(product.sku)
				products.product_titles.push(product.item_name)
				products.product_counts.push(product.quantity)
				products.product_urls.push(window.location.origin)
				products.product_images.push(
					document.querySelector('.order-item-wrapper img').src
				)
				products.product_category_names.push(
					product.item_category.toUpperCase()
				)
				products.product_category_ids.push(product.item_category.toLowerCase())
			})
			for (key in products) {
				products[key] = products[key].join('|')
			}
			const customerData = document.querySelector('.order-billing').innerText.split('\n')
			const email = customerData[10]
			const fullName = customerData[1].split(' ')
			const firstName = fullName[0]
			const lastName = fullName[1]
			const city = customerData[3]
			const basePayment = dataLayerPurchaseEvent.value + '.00'
			const orderPayment = dataLayerPurchaseEvent.value + '.00'
			window._edrone = window._edrone || {}
			Object.assign(_edrone, products, {
				country: 'PL',
				base_currency: 'PLN',
				order_currency: 'PLN',
				action_type: 'order',
				city: city,
				email: email,
				first_name: firstName,
				last_name: lastName,
				order_id: dataLayerPurchaseEvent.transaction_id,
				base_payment_value: basePayment,
				order_payment_value: orderPayment,
			})
			_edrone.init()
		}
	}, 200)
}
