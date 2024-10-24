!(function () {
	document.querySelector('body').addEventListener('mousedown', function (e) {
		var containerName = '#add-to-cart-or-refresh'
		var addToCartButtonName = '.add-to-cart'
		var isProductPage = true
		var productIdName = ''
		var productAttributeName = ''
		var productContainerList = document.querySelectorAll(containerName)
		if (productContainerList.length !== 0) {
			productContainerList.forEach(function (container, index) {
				var addToCartButton = container.querySelector(addToCartButtonName)
				var productId =
					!isProductPage === true
						? container.querySelector(productIdName)
						: null
				if (addToCartButton) {
					var eventPath = e.path || e.composedPath()
					if (eventPath.includes(addToCartButton)) {
						if (isProductPage || productId) {
							if (!isProductPage) {
								_edrone.product_category_ids = ''
								_edrone.product_category_names = ''
								_edrone.product_titles = ''
								_edrone.product_urls = ''
								_edrone.product_images = ''
								_edrone.product_ids =
									productId.getAttribute(productAttributeName)
								_edrone.product_skus = _edrone.product_skus
							}
							_edrone.action_type = 'add_to_cart'
							_edrone.init()
						}
					}
				}
			})
		}
	})
})()
