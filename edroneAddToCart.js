// add_to_cart homepage with pathname
const currentPathname = window.location.pathname
var xxx = 'ddd'
if (currentPathname === '/') {
	const productsContainer = document.querySelectorAll('.product-miniature')
	if (productsContainer !== null) {
		[].forEach.call(productsContainer, (el) => {
			const addToBasketBtn = '.add-to-cart'
			if (el.querySelector(addToBasketBtn) !== null) {
				el.querySelector(addToBasketBtn).addEventListener('click', () => {
					const prodId = el.getAttribute('data-id-product')
					_edrone.product_ids = prodId
					_edrone.action_type = 'add_to_cart'
					_edrone.init()
				})
			}
		})
	}
}