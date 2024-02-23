(function(){
    document.querySelector('body').addEventListener('mousedown', function(e){
      var eventPath = e.path || e.composedPath();
      var userAgent = navigator.userAgent;
      var emailValue = document.querySelector('input[name="email"]');
      var submitButton = document.querySelector('.block_newsletter-submit');
      var gender = document.querySelector('#gender');
      var subscriptionCheckbox = document.querySelector('#psgdpr_consent_checkbox_19')
      var firstNameInput = document.querySelector('input[name="firstname"]')
      if(firstNameInput){
        _edrone.first_name = firstNameInput.value;
      }
      var lastNameInput = document.querySelector('input[name="lastname"]')
      if(lastNameInput){
        _edrone.last_name = lastNameInput.value;
      }
      if (localStorage.getItem('sub') === null) {
        document.addEventListener("keydown", event => {
          if (event.key === "Enter") {
            if (emailValue) {
              _edrone.email = emailValue.value;
              _edrone.action_type = 'subscribe';
              if (gender.value == 1) {
                  _edrone.gender = 'M'
              }
              if (gender.value == 2) {
                   _edrone.gender = 'F'
              }
              _edrone.customer_tags = 'subscribe_footer'
              var phoneInput = document.querySelector('input[name="phone"]')
            if(phoneInput){
              _edrone.phone = phoneInput.value;
            } 
              if(subscriptionCheckbox && subscriptionCheckbox.checked){
              _edrone.init();
            }
            }
          }
        })            
        if (eventPath.includes(submitButton)) {
          if (emailValue) {
            _edrone.email = emailValue.value;
            _edrone.action_type = 'subscribe';
            if (gender.value == 1) {
                _edrone.gender = 'M'
            }
            if (gender.value == 2) {
                 _edrone.gender = 'F'
            }
            _edrone.customer_tags = 'subscribe_footer'
            var phoneInput = document.querySelector('input[name="phone"]')
            if(phoneInput){
              _edrone.phone = phoneInput.value;
            } 
            
            if(subscriptionCheckbox && subscriptionCheckbox.checked){
              _edrone.init();
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

  //test