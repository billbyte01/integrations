//if nothing else works :D
!(function () {
    document.querySelector('.addtocart').addEventListener('mousedown', function (e) {
        var containerSelector = '.products-grid .item';
        var productIdName = '.item'
        var productAttributeName = 'data-product-id';
        var addToCartButton = e.target.closest(productIdName);
        if (!addToCartButton) return;
        var productContainer = addToCartButton.closest(containerSelector);
        if (!productContainer) return;
        var productId = productContainer.getAttribute(productAttributeName);
        if (!productId) return;
        _edrone.product_skus = productId;
        _edrone.action_type = 'add_to_cart';
        _edrone.init();
    });
})();