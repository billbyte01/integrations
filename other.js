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

//blocking orders from one category, kawawbiurze.pl
const updateInit = () => {
    if (typeof _edrone.init === 'function') {
        const oldInit = _edrone.init;
        _edrone.init = () => {
            if (
              (_edrone.action_type !== 'order') ||
              (_edrone.product_category_ids && !_edrone.product_category_ids.includes("412"))
            ) {
                oldInit();
            }
        };

        return true;
    }
    return false;
};

if (!updateInit()) {
		const checkForInitInterval = setInterval(() => {
			if (updateInit()) {
				clearInterval(checkForInitInterval);
			}
		}, 5);
}

//fake identification
const asdf = document.querySelector('form[action="https://www.bobowozki.com.pl/newsletter/subscriber/new/"] button')
asdf.addEventListener('mousedown', () => {
    const emailasdf = document.querySelector('#newsletter-subscribe')
    _edrone.email = emailasdf.value
    _edrone.customer_tags = 'test'
	_edrone.action_type = 'other'
    _edrone.init
})