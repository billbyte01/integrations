//email value in an object of a few data, example: p:nth-child(3)[   test@test.pl   , John Doe, 544434445]
(function(){
  document.querySelector('body').addEventListener('mousedown', function(e){
    var emailValue = document.querySelector('#orderForm > div.row > div:nth-child(1) > div > div.logged-customer > p:nth-child(3)').firstChild.wholeText.trim();
    var submitButton = document.querySelector('button[name="order"]');
    var subscriptionCheckbox = document.querySelector('input[name="prop(_willingnessToNewsletter).value"]')
    var eventPath = e.path || e.composedPath();
    var userAgent = navigator.userAgent;
    if (localStorage.getItem('sub') === null) {
      document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          if (emailValue) {
            _edrone.email = emailValue;
            _edrone.action_type = 'subscribe';
            _edrone.customer_tags = 'checkout'
            if(subscriptionCheckbox && subscriptionCheckbox.checked){
            _edrone.subscriber_status = '1'
            _edrone.init();
            localStorage.setItem("sub", "1");
          }
          }
        }
      })            
      if (eventPath.includes(submitButton)) {
        if (emailValue) {
          _edrone.email = emailValue;
          _edrone.action_type = 'subscribe';
          _edrone.customer_tags = 'checkout'
          if(subscriptionCheckbox && subscriptionCheckbox.checked){
            _edrone.subscriber_status = '1'
            _edrone.init();
            localStorage.setItem("sub", "1");
          }
        }
      }
    } else {
      setTimeout(function(){ 
        localStorage.removeItem('sub')},  
      5000);
    }
  })
})();


// get email from an attrubute using '.getAttribute' (borgio.co order page)
(function(){
  document.querySelector('body').addEventListener('mousedown', function(e){
    var emailValue = document.querySelector('#checkout-review-submit > ol'); //we need to find an element with an email
    var submitButton = document.querySelector('#widget-blz7jep7p79');
    var subscriptionCheckbox = document.querySelector('#agreement-newsletter')
    var eventPath = e.path || e.composedPath();
    var userAgent = navigator.userAgent;
    if (localStorage.getItem('sub') === null) {
      document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          if (emailValue) {
            _edrone.email = emailValue.getAttribute('data-email'); //and here use .getAttribute('data-email')
            _edrone.action_type = 'subscribe';
            _edrone.customer_tags = 'Order'
            if(subscriptionCheckbox && subscriptionCheckbox.checked){
            _edrone.subscriber_status = '1'
            _edrone.init();
            localStorage.setItem("sub", "1");
          }
          }
        }
      })            
      if (eventPath.includes(submitButton)) {
        if (emailValue) {
          _edrone.email = emailValue.getAttribute('data-email');
          _edrone.action_type = 'subscribe';
          _edrone.customer_tags = 'Order'
          if(subscriptionCheckbox && subscriptionCheckbox.checked){
            _edrone.subscriber_status = '1'
            _edrone.init();
            localStorage.setItem("sub", "1");
          }
        }
      }
    } else {
      setTimeout(function(){ 
        localStorage.removeItem('sub')},  
      5000);
    }
  })
})();


// splitting value for extracting id
!(function(){
  document.querySelector('body').addEventListener('mousedown', function(e){
	  var containerName = '.FeaturedProduct__Info';
    var addToCartButtonName = '.ProductForm__AddToCart';
    var isProductPage = false;
    var productIdName = 'select[name="id"]';
    var productAttributeName = 'id';
    var productContainerList = document.querySelectorAll(containerName);
	  if (productContainerList.length !== 0) {
		  productContainerList.forEach(function(container, index){
        var addToCartButton = container.querySelector(addToCartButtonName)
        var productId = !isProductPage === true ? container.querySelector(productIdName) : null
        if (addToCartButton) {
          var eventPath = e.path || e.composedPath();
          if (eventPath.includes(addToCartButton)) {
            if (isProductPage || productId) {
              if (!isProductPage) {
                _edrone.product_category_ids = "";
                _edrone.product_category_names = "";
                _edrone.product_titles = "";
                _edrone.product_urls = "";
                _edrone.product_images = "";
                _edrone.product_ids = productId.getAttribute(productAttributeName).split('-')[2] // I made a change here by adding in the end '.split('-')[2]'
              }
              _edrone.action_type = 'add_to_cart';
              _edrone.init();
            } 
          }
        }
      });
    }
  })
})();


//subscription depending on URL - 'switch - case' and 'if'
(function () {
  document.querySelector('body').addEventListener('mousedown', function (e) {
    var emailValue = document.querySelector('input[name="email"]');
    var submitButton = document.querySelector('button[name="action"]');
    var subscriptionCheckbox = document.querySelector('#regulations')
    var firstNameInput = document.querySelector('input[name="username"]')
    if (firstNameInput) {
      _edrone.first_name = firstNameInput.value;
    }
    var eventPath = e.path || e.composedPath();
    if (localStorage.getItem('sub') === null) {
      document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          if (emailValue) {
            _edrone.email = emailValue.value;
            _edrone.action_type = 'subscribe';
            switch (window.location.href) {
              case 'https://amso.pl/AMSO-KRAKOW-Komputery-Laptopy-Poleasingowe-stock-2-pol.html':
                _edrone.customer_tags = 'Czarnowiejska'
                break;
              case 'https://amso.pl/AMSO-KRAKOW-PODGORZE-Komputery-Laptopy-Poleasing-stock-12-pol.html':
                _edrone.customer_tags = 'Wielicka'
                break;
              case 'https://amso.pl/AMSO-RZESZOW-Komputery-Laptopy-Poleasingowe-stock-6-pol.html':
                _edrone.customer_tags = 'Rzeszów'
                break;
              case 'https://amso.pl/AMSO-KATOWICE-Komputery-Laptopy-Poleasingowe-stock-5-pol.html':
                _edrone.customer_tags = 'Katowice'
                break;
              case 'https://amso.pl/AMSO-LODZ-Komputery-Laptopy-Poleasingowe-stock-4-pol.html':
                _edrone.customer_tags = 'Łódź'
                break;
              case 'https://amso.pl/AMSO-LUBLIN-Komputery-Laptopy-Poleasingowe-stock-7-pol.html':
                _edrone.customer_tags = 'Lublin'
                break;
              case 'https://amso.pl/AMSO-KIELCE-Komputery-Laptopy-Poleasingowe-stock-13-pol.html':
                _edrone.customer_tags = 'Kielce'
                break;
              case 'https://amso.pl/AMSO-WARSZAWA-Komputery-Laptopy-Poleasingowe-stock-3-pol.html':
                _edrone.customer_tags = 'Warszawa'
                break;
              case 'https://amso.pl/AMSO-BIELSKO-BIALA-Komputery-Laptopy-Poleasingow-stock-14-pol.html':
                _edrone.customer_tags = 'BielskoBiała'
                break;
              case 'https://amso.pl/AMSO-GDANSK-Komputery-Laptopy-Poleasingowe-stock-17-pol.html':
                _edrone.customer_tags = 'Gdańsk'
                break;
              case 'https://amso.pl/AMSO-WROCLAW-Komputery-Laptopy-Poleasingowe-stock-16-pol.html':
                _edrone.customer_tags = 'Wrocław'
                break;
              case 'https://amso.pl/AMSO-POZNAN-Komputery-Laptopy-Poleasingowe-stock-15-pol.html':
                _edrone.customer_tags = 'Poznań'
                break;
            }
            if (subscriptionCheckbox && subscriptionCheckbox.checked) {
              _edrone.subscriber_status = '1'
              _edrone.init();
              localStorage.setItem("sub", "1");
            }
          }
        }
      })
      if (eventPath.includes(submitButton)) {
        if (emailValue) {
          _edrone.email = emailValue.value;
          _edrone.action_type = 'subscribe';
          switch (window.location.href) {
            case 'https://amso.pl/AMSO-KRAKOW-Komputery-Laptopy-Poleasingowe-stock-2-pol.html':
              _edrone.customer_tags = 'Czarnowiejska'
              break;
            case 'https://amso.pl/AMSO-KRAKOW-PODGORZE-Komputery-Laptopy-Poleasing-stock-12-pol.html':
              _edrone.customer_tags = 'Wielicka'
              break;
            case 'https://amso.pl/AMSO-RZESZOW-Komputery-Laptopy-Poleasingowe-stock-6-pol.html':
              _edrone.customer_tags = 'Rzeszów'
              break;
            case 'https://amso.pl/AMSO-KATOWICE-Komputery-Laptopy-Poleasingowe-stock-5-pol.html':
              _edrone.customer_tags = 'Katowice'
              break;
            case 'https://amso.pl/AMSO-LODZ-Komputery-Laptopy-Poleasingowe-stock-4-pol.html':
              _edrone.customer_tags = 'Łódź'
              break;
            case 'https://amso.pl/AMSO-LUBLIN-Komputery-Laptopy-Poleasingowe-stock-7-pol.html':
              _edrone.customer_tags = 'Lublin'
              break;
            case 'https://amso.pl/AMSO-KIELCE-Komputery-Laptopy-Poleasingowe-stock-13-pol.html':
              _edrone.customer_tags = 'Kielce'
              break;
            case 'https://amso.pl/AMSO-WARSZAWA-Komputery-Laptopy-Poleasingowe-stock-3-pol.html':
              _edrone.customer_tags = 'Warszawa'
              break;
            case 'https://amso.pl/AMSO-BIELSKO-BIALA-Komputery-Laptopy-Poleasingow-stock-14-pol.html':
              _edrone.customer_tags = 'BielskoBiała'
              break;
            case 'https://amso.pl/AMSO-GDANSK-Komputery-Laptopy-Poleasingowe-stock-17-pol.html':
              _edrone.customer_tags = 'Gdańsk'
              break;
            case 'https://amso.pl/AMSO-WROCLAW-Komputery-Laptopy-Poleasingowe-stock-16-pol.html':
              _edrone.customer_tags = 'Wrocław'
              break;
            case 'https://amso.pl/AMSO-POZNAN-Komputery-Laptopy-Poleasingowe-stock-15-pol.html':
              _edrone.customer_tags = 'Poznań'
              break;
          }
          if (subscriptionCheckbox && subscriptionCheckbox.checked) {
            _edrone.subscriber_status = '1'
            _edrone.init();
            localStorage.setItem("sub", "1");
          }
        }
      }
    } else {
      setTimeout(function () {
        localStorage.removeItem('sub')
      },
        5000);
    }
  })
})();


//multitags
const buttonLanding = document.querySelector('button.action.subscribe.primary');
if (buttonLanding !== null) {
    const mail = document.querySelector('#newsletter[name="email"]');
    const box = document.querySelector('#agree-processing-personal-data');
    const boxSmartfons = document.querySelector('input[value="smartphones"]')
    const boxClassicMobiles = document.querySelector('input[value="classic_phones_with_keyboard"]')
    const boxSeniorMobiles = document.querySelector('input[value="phones_for_the_senior"]')
    const boxAll = document.querySelector('.select-all[name="multi_check"]')
    document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            if (box.checked && mail.value !== '') {
                _edrone.email = mail.value;
                _edrone.customer_tags = 'b2c_kontakt';
                if (boxSmartfons.checked) {
                    _edrone.customer_tags = _edrone.customer_tags + '|00_smartfony'
                } if (boxClassicMobiles.checked) {
                    _edrone.customer_tags = _edrone.customer_tags + '|00_telefony_klawiszowe'
                } if (boxSeniorMobiles.checked) {
                    _edrone.customer_tags = _edrone.customer_tags + '|00_telefony_dla_seniora'
                } if (boxAll.checked) {
                    _edrone.customer_tags = 'b2c_kontakt|00_smartfony|00_telefony_klawiszowe|00_telefony_dla_seniora'
                }
                _edrone.action_type = 'subscribe';
                _edrone.subscriber_status = '1'
                _edrone.init();
            }
        }
    })
    buttonLanding.addEventListener('click', () => {
        if (box.checked && mail.value !== '') {
            _edrone.email = mail.value;
            _edrone.customer_tags = 'b2c_kontakt';
            if (boxSmartfons.checked) {
                _edrone.customer_tags = _edrone.customer_tags + '|00_smartfony'
            } if (boxClassicMobiles.checked) {
                _edrone.customer_tags = _edrone.customer_tags + '|00_telefony_klawiszowe'
            } if (boxSeniorMobiles.checked) {
                _edrone.customer_tags = _edrone.customer_tags + '|00_telefony_dla_seniora'
            } if (boxAll.checked) {
                _edrone.customer_tags = 'b2c_kontakt|00_smartfony|00_telefony_klawiszowe|00_telefony_dla_seniora'
            }
            _edrone.action_type = 'subscribe';
            _edrone.subscriber_status = '1'
            _edrone.init();
        }
    })
}


//specific link
if (window.location.href.includes('basket/noreg')) {
}

if (window.location.href !== 'basket/noreg') {
}

//specific link option 2
if (window.location.href.indexOf('basket/noreg') >-1) {
}


//when we have two forms on one site: https://malaszklarnia.pl/poradnik/
if (window.location.href.includes('poradnik')) {
    const formContainers = document.querySelectorAll('#mailerlite-form_2')
    if (formContainers !== null) {
        [].forEach.call(formContainers, (form) => {
            const btn = '.mailerlite-subscribe-submit'
            const email = '#mailerlite-2-field-email'
            if (form.querySelector(email) !== null) {
                form.querySelector(btn).addEventListener('click', () => {
                    if (form.querySelector(email).value.includes('@')) {
                        _edrone.email = form.querySelector(email).value;
                        _edrone.customer_tags = 'ML-EbookPierwszaPomoc';
                        _edrone.action_type = 'subscribe';
                        _edrone.subscriber_status = '1'
                        _edrone.init();
                    }
                })
            }
        })
    }
}

//subscribe without checkbox <3 https://edrone.atlassian.net/browse/ED-48229
const box = document.querySelector('input[name="order_confirmations[14]"]');
if (box !== null) {
    box.addEventListener('click', () => {
        if (box.checked) {
            _edrone.email = _edrone.email;
            _edrone.customer_tags = 'CustomerConsent';
            _edrone.action_type = 'subscribe';
            _edrone.subscriber_status = '1';
            _edrone.init();
        }
    })
};

//code loaded after the last step od checkout is on the screen
const btnPlaceOrder = document.querySelector('.sc-bBHHxi.ePKXte')
let lastStepForm = false
if (btnPlaceOrder !== null) {
    btnPlaceOrder.addEventListener('click', function () {
        lastStepForm = true
        checkoutNlForm()
    })
}
function checkoutNlForm() {
    if (lastStepForm) {
        setTimeout(() => {
            const mailOrder = document.querySelector('input[name="e-mail"]')
            if (mailOrder !== null) {
                const box = document.querySelectorAll('.sc-ctqQKy')[2]
                const button = document.querySelector('.sc-bBHHxi.ePKXte')
                const name = document.querySelector('input[name="imie"]')
                const surname = document.querySelector('input[name="nazwisko"]')
                const phone = document.querySelector('input[name="telefon"]')
                button.addEventListener('click', () => {
                    if (box.classList.contains('cUJpyf')) {
                        _edrone.email = mailOrder.value;
                        _edrone.first_name = name.value
                        _edrone.last_name = surname.value
                        _edrone.phone = phone.value
                        _edrone.customer_tags = 'Order';
                        _edrone.action_type = 'subscribe';
                        _edrone.init();
                    }
                })
            }
        }, 1500);
    }
}

//adding to local storage info about subscription consent from the first step (for multisteps checkouts)
if (window.location.href.indexOf('https://www.sklep.vileda.pl/koszyk.php') > -1) {
	document.addEventListener('change', function (event) {
		if (event.target.matches('#codes-agreement input[type="checkbox"]')) {
			if (event.target.checked) {
				localStorage.setItem('checkboxChecked', 'true')
			} else {
				localStorage.removeItem('checkboxChecked')
			}
		}
	})
}
//the condition for triggering the trace in other step
if (localStorage.getItem('checkboxChecked') === 'true') {
}
//or basic form with addEventListener:
// const checkboxTEST1 = document.querySelector('#codes-agreement input[type="checkbox"]')
// checkboxTEST1.addEventListener('change', function () {
// 	console.log('Checkbox is now:', this.checked ? 'Checked' : 'Unchecked')
// })
