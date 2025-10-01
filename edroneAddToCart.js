// add_to_cart homepage with pathname

// const currentPathname = window.location.pathname
// var xxx = 'ddd'
// if (currentPathname === '/') {
const productsContainer = document.querySelectorAll('.product-miniature')
if (productsContainer !== null) {
	;[].forEach.call(productsContainer, (el) => {
		const addToBasketBtn = el.querySelector('.add-to-cart');
		if (addToBasketBtn !== null) {
			addToBasketBtn.addEventListener('click', () => {
				const prodId = el.getAttribute('data-id-product')
				// or
				// const prodId = el.querySelector('input[name="id_product"]');
				// _edrone.product_ids = prodId.getAttribute('value');
				_edrone.product_ids = prodId
				_edrone.action_type = 'add_to_cart'
				_edrone.init()
			})
		}
	})
}
// }

//if nothing else works :D
!(function () {
  document.querySelectorAll('.custom-discount-form button.btn.btn-red') // add to cart button
    .forEach(function (btn) {
      btn.addEventListener('mousedown', function (e) {
        var productContainer = e.target.closest('.product');
        if (!productContainer) return;
        var productId = productContainer.getAttribute('data-product-id');
        if (!productId) return;
        _edrone.product_skus = productId;
        _edrone.action_type = 'add_to_cart';
        _edrone.init();
      });
    });
})();
