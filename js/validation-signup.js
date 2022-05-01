


(function () {
  document.forms.register.noValidate = true;

  $('form').on('submit', function (e) {      
    var elements = this.elements;            
    var valid = {};                        
    var isValid;                            
    var isFormValid;                       


    var i;
    for (i = 0, l = elements.length; i < l; i++) {
  
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]); 
      if (!isValid) {                    
        showErrorMessage(elements[i]);   
      } else {                           
        removeErrorMessage(elements[i]);
      }                                 
      valid[elements[i].id] = isValid; 
    }                                   


    if (!validatePassword()) {          
      showErrorMessage(document.getElementById('password')); 
      valid.password = false;          
    } else {                           
      removeErrorMessage(document.getElementById('password'));
    }

   
    if (!validateName()) {          
      showErrorMessage(document.getElementById('name'));
      valid.password = false;          
    } else {                           
      removeErrorMessage(document.getElementById('name'));
    }


    for (var field in valid) {          
      if (!valid[field]) {              
        isFormValid = false;         
        break;                          
      }                                 
      isFormValid = true;             
    }



    if (!isFormValid) {              
      e.preventDefault();             
    }

  });                                 




  function validateRequired(el) {
    if (isRequired(el)) {                       
      var valid = !isEmpty(el);                     
      if (!valid) {                                 
        setErrorMessage(el,  'Поле необходимо заполнить');  
      }
      return valid;                               
    }
    return true;                                   
  }


  function isRequired(el) {
   return ((typeof el.required === 'boolean') && el.required) ||
     (typeof el.required === 'string');
  }

  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }

  function validateTypes(el) {
    if (!el.value) return true;                  

    var type = $(el).data('type') || el.getAttribute('type');  
    if (typeof validateType[type] === 'function') {
      return validateType[type](el);                
    } else {                                       
      return true;                                  
    }
  }




  function validatePassword() {
    var password = document.getElementById('password'); 
    var valid = password.value.length >= 8;				
    if (!valid) {									
      setErrorMessage(password, 'Поле необходимо заполнить');
    }
    return valid;										
  }

  function validateName() {
    var name = document.getElementById('name'); 
    var valid = name.value.length >= 3;		
    if (!valid) {									
      setErrorMessage(name, 'Поле необходимо заполнить');
    }
    return valid;									
  }



 
  function setErrorMessage(el, message) {
    $(el).data('errorMessage', message);                 
  }

  function getErrorMessage(el) {
    return $(el).data('errorMessage') || el.title;      
  }

  function showErrorMessage(el) {
    var $el = $(el);                                   
    var errorContainer = $el.siblings('.error.message'); 

    if (!errorContainer.length) {                         
       
       errorContainer = $('<span class="error message"></span>').insertAfter($el);
    }
    errorContainer.text(getErrorMessage(el));             
  }

  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings('.error.message'); 
    errorContainer.remove();                               
  }


}()); 