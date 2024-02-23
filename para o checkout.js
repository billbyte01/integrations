var edrone_app_id = '64c7e8db887ae';

(function (srcjs) {
  window._edrone = window._edrone || {};
  _edrone.app_id = edrone_app_id;
  _edrone.version = '1.0.0';
  _edrone.platform_version = '1.0.0';
  _edrone.platform = 'custom';
  var doc = document.createElement('script');
  doc.type = 'text/javascript';
  doc.async = true;
  doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + srcjs;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(doc, s);
})("//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js?app_id=" + edrone_app_id);

window.addEventListener('load', function() {
  if (document.querySelector("#login-form") != null) {
    document.querySelector("#login-form").addEventListener('submit', function(){
      localStorage.removeItem('edrone_email');
      localStorage.setItem('edrone_email', encodeURIComponent(this.querySelector('input[name="email"]').value));

      if (typeof(this.querySelector('input[name="name"]')) != 'undefined' && this.querySelector('input[name="name"]') != null) {
        localStorage.removeItem('edrone_name');
        localStorage.setItem('edrone_name', encodeURIComponent(this.querySelector('input[name="name"]').value));
      }
    });
  }

  if (typeof(document.querySelector('.customer-box .contact-data .span8 > div:first-child')) != 'undefined' && document.querySelector('.customer-box .contact-data .span8 > div:first-child') != null) {
    localStorage.removeItem('edrone_name');
    localStorage.setItem('edrone_name', (document.querySelector('.customer-box .contact-data .span8 > div:first-child').textContent).trim());
  }

  if (typeof(document.querySelector('.customer-box .contact-data .span8 > div:first-child + div')) != 'undefined' && document.querySelector('.customer-box .contact-data .span8 > div:first-child + div') != null) {
    localStorage.removeItem('edrone_email');
    localStorage.setItem('edrone_email', (document.querySelector('.customer-box .contact-data .span8 > div:first-child + div').textContent).trim());
  }

  if (document.querySelector('.form-step button[type="submit"]') != null) {
    document.querySelector('.form-step button[type="submit"]').addEventListener('click', function(){
      var edrone_news = this.closest('form').querySelector('#acceptedMarketing:checked').value;
      var edrone_email = this.closest('form').querySelector('input[name="contact.email"]').value;

      localStorage.removeItem('edrone_email');
      localStorage.setItem('edrone_email', edrone_email);

      if (edrone_email && edrone_news == 'on') {
        window._edrone = window._edrone || {};
        _edrone.app_id = edrone_app_id;
        _edrone.version = '1.0.0';
        _edrone.platform_version = '1.0.0';
        _edrone.platform = 'custom';
        _edrone.customer_tags = 'Checkout';
        _edrone.email = edrone_email;
        _edrone.action_type = 'subscribe';
        _edrone.subscriber_status = '1';
        _edrone.init();
      }

      if (this.closest('form').querySelector('input[name="shippingAddress.first_name"]') != null) {
        localStorage.removeItem('edrone_name');
        localStorage.setItem('edrone_name', this.closest('form').querySelector('input[name="shippingAddress.first_name"]').value + ' ' + this.closest('form').querySelector('input[name="shippingAddress.last_name"]').value);
      } else {
        var edrone_json_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

        if (typeof edrone_json_data.props !== 'undefined' && typeof edrone_json_data.props.initialState !== 'undefined' && typeof edrone_json_data.props.initialState.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order.customer !== 'undefined' && edrone_json_data.props.initialState.order.order.customer != null && typeof edrone_json_data.props.initialState.order.order.customer.first_name !== 'undefined') {
          localStorage.removeItem('edrone_name');
          localStorage.setItem('edrone_name', edrone_json_data.props.initialState.order.order.customer.first_name + ' ' + edrone_json_data.props.initialState.order.order.customer.last_name);
        }
      }

      if (this.closest('form').querySelector('input[name="shippingAddress.city"]') != null) {
        localStorage.removeItem('edrone_city');
        localStorage.setItem('edrone_city', this.closest('form').querySelector('input[name="shippingAddress.city"]').value);
      } else {
        var edrone_json_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

        if (typeof edrone_json_data.props !== 'undefined' && typeof edrone_json_data.props.initialState !== 'undefined' && typeof edrone_json_data.props.initialState.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order.shippingAddress !== 'undefined' && edrone_json_data.props.initialState.order.order.shippingAddress != null && typeof edrone_json_data.props.initialState.order.order.shippingAddress.city !== 'undefined' && edrone_json_data.props.initialState.order.order.shippingAddress.city != null) {
          localStorage.removeItem('edrone_city');
          localStorage.setItem('edrone_city', edrone_json_data.props.initialState.order.order.shippingAddress.city);
        }
      }
    });

    document.querySelector('.form-step button[type="submit"]').addEventListener('touchstart', function() {
      localStorage.removeItem('edrone_email');
      localStorage.setItem('edrone_email', this.closest('form').querySelector('input[name="contact.email"]').value);

      if (this.closest('form').querySelector('input[name="shippingAddress.first_name"]') != null) {
        localStorage.removeItem('edrone_name');
        localStorage.setItem('edrone_name', this.closest('form').querySelector('input[name="shippingAddress.first_name"]').value + ' ' + this.closest('form').querySelector('input[name="shippingAddress.last_name"]').value);
      } else {
        var edrone_json_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

        if (typeof edrone_json_data.props !== 'undefined' && typeof edrone_json_data.props.initialState !== 'undefined' && typeof edrone_json_data.props.initialState.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order.customer !== 'undefined' && edrone_json_data.props.initialState.order.order.customer != null && typeof edrone_json_data.props.initialState.order.order.customer.first_name !== 'undefined') {
          localStorage.removeItem('edrone_name');
          localStorage.setItem('edrone_name', edrone_json_data.props.initialState.order.order.customer.first_name + ' ' + edrone_json_data.props.initialState.order.order.customer.last_name);
        }
      }

      if (this.closest('form').querySelector('input[name="shippingAddress.city"]') != null) {
        localStorage.removeItem('edrone_city');
        localStorage.setItem('edrone_city', this.closest('form').querySelector('input[name="shippingAddress.city"]').value);
      } else {
        var edrone_json_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

        if (typeof edrone_json_data.props !== 'undefined' && typeof edrone_json_data.props.initialState !== 'undefined' && typeof edrone_json_data.props.initialState.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order.shippingAddress !== 'undefined' && edrone_json_data.props.initialState.order.order.shippingAddress != null && typeof edrone_json_data.props.initialState.order.order.shippingAddress.city !== 'undefined' && edrone_json_data.props.initialState.order.order.shippingAddress.city != null) {
          localStorage.removeItem('edrone_city');
          localStorage.setItem('edrone_city', edrone_json_data.props.initialState.order.order.shippingAddress.city);
        }
      }
    });

    document.querySelector('.form-step button[type="submit"]').addEventListener('mouseenter', function() {
      localStorage.removeItem('edrone_email');
      localStorage.setItem('edrone_email', this.closest('form').querySelector('input[name="contact.email"]').value);

      if (this.closest('form').querySelector('input[name="shippingAddress.first_name"]') != null) {
        localStorage.removeItem('edrone_name');
        localStorage.setItem('edrone_name', this.closest('form').querySelector('input[name="shippingAddress.first_name"]').value + ' ' + this.closest('form').querySelector('input[name="shippingAddress.last_name"]').value);
      } else {
        var edrone_json_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

        if (typeof edrone_json_data.props !== 'undefined' && typeof edrone_json_data.props.initialState !== 'undefined' && typeof edrone_json_data.props.initialState.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order.customer !== 'undefined' && edrone_json_data.props.initialState.order.order.customer != null && typeof edrone_json_data.props.initialState.order.order.customer.first_name !== 'undefined') {
          localStorage.removeItem('edrone_name');
          localStorage.setItem('edrone_name', edrone_json_data.props.initialState.order.order.customer.first_name + ' ' + edrone_json_data.props.initialState.order.order.customer.last_name);
        }
      }

      if (this.closest('form').querySelector('input[name="shippingAddress.city"]') != null) {
        localStorage.removeItem('edrone_city');
        localStorage.setItem('edrone_city', this.closest('form').querySelector('input[name="shippingAddress.city"]').value);
      } else {
        var edrone_json_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

        if (typeof edrone_json_data.props !== 'undefined' && typeof edrone_json_data.props.initialState !== 'undefined' && typeof edrone_json_data.props.initialState.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order !== 'undefined' && typeof edrone_json_data.props.initialState.order.order.shippingAddress !== 'undefined' && edrone_json_data.props.initialState.order.order.shippingAddress != null && typeof edrone_json_data.props.initialState.order.order.shippingAddress.city !== 'undefined' && edrone_json_data.props.initialState.order.order.shippingAddress.city != null) {
          localStorage.removeItem('edrone_city');
          localStorage.setItem('edrone_city', edrone_json_data.props.initialState.order.order.shippingAddress.city);
        }
      }
    });
  }

  var edrone_order_url_time = setInterval(function(){
    var path = window.location.pathname.split('/');

    if (path[3] == 'success') {
      clearInterval(edrone_order_url_time);

      var edrone_order_time = setInterval(function(){
        if (typeof LS !== 'undefined' && typeof LS.order !== 'undefined' && typeof LS.order.id !== 'undefined' && document.querySelector('script[type="application/json"]') != null) {
          clearInterval(edrone_order_time);

          var store_data = JSON.parse(document.getElementById('__NEXT_DATA__').innerHTML);

          var edrone_first_name = '';
          var edrone_last_name = '';

          if (localStorage.getItem('edrone_name')) {
            var edrone_name = localStorage.getItem('edrone_name');

            edrone_name = edrone_name.split(' ');
            edrone_first_name = edrone_name[0];

            edrone_name.splice(0, 1);
            edrone_name = edrone_name.join(' ');

            edrone_last_name = edrone_name;
          } else if (typeof store_data.props !== 'undefined' && typeof store_data.props.initialState !== 'undefined' && typeof store_data.props.initialState.customer !== 'undefined' && store_data.props.initialState.customer != null && typeof store_data.props.initialState.customer.contact !== 'undefined' && typeof store_data.props.initialState.customer.contact.first_name !== 'undefined' && typeof store_data.props.initialState.customer.contact.last_name !== 'undefined') {
            edrone_first_name = store_data.props.initialState.customer.contact.first_name;
            edrone_last_name = store_data.props.initialState.customer.contact.last_name;
          } else if (typeof store_data.props !== 'undefined' && typeof store_data.props.initialState !== 'undefined' && typeof store_data.props.initialState.customer !== 'undefined' && store_data.props.initialState.customer != null && typeof store_data.props.initialState.customer.contact !== 'undefined' && typeof store_data.props.initialState.customer.contact.name !== 'undefined') {
            var edrone_name = store_data.props.initialState.customer.contact.name;

            edrone_name = edrone_name.split(' ');
            edrone_first_name = edrone_name[0];

            edrone_name.splice(0, 1);
            edrone_name = edrone_name.join(' ');

            edrone_last_name = edrone_name;
          }

          var edrone_email = '';

          if (localStorage.getItem('edrone_email')) {
            edrone_email = localStorage.getItem('edrone_email');
          } else if (typeof store_data.props !== 'undefined' && typeof store_data.props.initialState !== 'undefined' && typeof store_data.props.initialState.customer !== 'undefined' && store_data.props.initialState.customer != null && typeof store_data.props.initialState.customer.contact !== 'undefined' && typeof store_data.props.initialState.customer.contact.email !== 'undefined') {
            edrone_email = store_data.props.initialState.customer.contact.email;
          }

          var edrone_product_ids = [];
          var edrone_product_titles = [];
          var edrone_product_images = [];
          var edrone_product_urls = [];
          var edrone_product_counts = [];
          var edrone_cart_items = LS.cart.items;
          var edrone_cart_line_items = store_data.props.initialState.order.order.cart.lineItems;

          for (let i = 0; i < edrone_cart_items.length; i++) {
            edrone_product_ids.push(edrone_cart_items[i].id);
            edrone_product_titles.push(edrone_cart_items[i].name);
            edrone_product_counts.push(edrone_cart_items[i].quantity);
          }

          for (let i = 0; i < edrone_cart_line_items.length; i++) {
            var thumb = edrone_cart_line_items[i].thumbnail;

            edrone_product_images.push('https:' + thumb.replace('-100-0.', '-1024-1024.'));
            edrone_product_urls.push(edrone_cart_line_items[i].url);
          }

          var edrone_order_payment_value = parseFloat(document.querySelector('.table-subtotal .table-footer .text-right.table-price').textContent.replace('R$', '').replace('.', '').replace(',', '.'));
          var edrone_city = '';

          if (typeof store_data.props !== 'undefined' && typeof store_data.props.initialState !== 'undefined' && typeof store_data.props.initialState.order !== 'undefined' && typeof store_data.props.initialState.order.order !== 'undefined' && typeof store_data.props.initialState.order.order.shippingAddress !== 'undefined' && store_data.props.initialState.order.order.shippingAddress != null && typeof store_data.props.initialState.order.order.shippingAddress.city !== 'undefined' && store_data.props.initialState.order.order.shippingAddress.city != null) {
            edrone_city = store_data.props.initialState.order.order.shippingAddress.city;
          } else if (localStorage.getItem('edrone_city')) {
            edrone_city = localStorage.getItem('edrone_city');
          }

          window._edrone = window._edrone || {};
          _edrone.app_id = edrone_app_id;
          _edrone.version = '1.0.0';
          _edrone.platform_version = '1.0.0';
          _edrone.platform = 'custom';
          _edrone.action_type = 'order';
          _edrone.email = edrone_email;
          _edrone.first_name = edrone_first_name;
          _edrone.last_name = edrone_last_name;
          _edrone.product_ids = edrone_product_ids.join('|');
          _edrone.product_skus = edrone_product_ids.join('|');
          _edrone.product_titles = encodeURIComponent(edrone_product_titles.join('|'));
          _edrone.product_images = encodeURIComponent(edrone_product_images.join('|'));
          _edrone.product_urls = encodeURIComponent(edrone_product_urls.join('|'));

          if (localStorage.getItem('edrone_products')) {
            var edrone_products = JSON.parse(localStorage.getItem('edrone_products'));
            var edrone_product_category_ids = [];
            var edrone_product_category_names = [];

            for (let i = 0; i < edrone_cart_items.length; i++) {
              for (let j = 0; j < edrone_products.length; j++) {
                if (edrone_cart_items[i].variant_id == edrone_products[j].product_id || edrone_cart_items[i].id == edrone_products[j].product_id) {
                  edrone_product_category_ids.push(edrone_products[j].category_ids);
                  edrone_product_category_names.push(edrone_products[j].category_names);
                }
              }
            }

            if (edrone_product_category_ids) {
              _edrone.product_category_ids = edrone_product_category_ids.join('|');
              _edrone.product_category_names = edrone_product_category_names.join('|');
            }

            localStorage.removeItem('edrone_products');
          }

          _edrone.product_counts = edrone_product_counts.join('|');
          _edrone.order_id = LS.order.id;
          _edrone.country = 'BRA';
          _edrone.city = edrone_city;
          _edrone.base_currency = LS.currency;
          _edrone.order_currency = LS.currency;
          _edrone.base_payment_value = edrone_order_payment_value;
          _edrone.order_payment_value = edrone_order_payment_value;
          _edrone.init();

        }
      }, 100);
    }
  }, 100);
});