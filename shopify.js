// thank you page - add code in settings > checkout > order status page
// https://shopify.dev/docs/api/liquid/objects/order
<script type="text/javascript">
   (function (srcjs) {
       window._edrone = window._edrone || {};
       _edrone.app_id = '615199abebcd7';
       _edrone.platform = 'custom';
       var doc = document.createElement('script');
       doc.type = 'text/javascript';
       doc.async = true;
       doc.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + srcjs;
       var s = document.getElementsByTagName('script')[0];
       s.parentNode.insertBefore(doc, s);
   })("//d3bo67muzbfgtl.cloudfront.net/edrone_2_0.js?app_id=615199abebcd7");
</script>

<script type="text/javascript">
       window._edrone = window._edrone || {};
       _edrone.action_type = 'order';
       _edrone.app_id = '615199abebcd7';
       _edrone.email = '{{ customer.email }}';
       _edrone.first_name = '{{ customer.first_name }}';
       _edrone.last_name = '{{ customer.last_name }}';
       _edrone.product_ids = '{% for item in line_items %}{{ item.product_id }}{% unless forloop.last %}|{% endunless %}{% endfor %}';
       _edrone.order_id = '{{ order.order_number }}';
       _edrone.order_payment_value = '{{ order.total_price | money_without_currency }}';
</script>