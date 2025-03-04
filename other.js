//code for stopping duplicated traces
;(function () {
	let homepageSent = false
	let categorySent = false
	let productSent = false
	const originalInit = _edrone.init
	_edrone.init = function () {
		if (!homepageSent) {
			homepageSent = true
			_edrone.trace('homepage_view')
		}
		if (!categorySent) {
			categorySent = true
			_edrone.trace('category_view')
		}
		if (!productSent) {
			productSent = true
			_edrone.trace('product_view')
		}
		originalInit.apply(this, arguments)
	}
})()