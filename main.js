$(document).ready(function() {

    populateCountries("country", "state");
    
    $countryElement = $('#country');
    $stateElement = $('#state');
    
    $countryElement.val('USA').trigger('change');
    $stateElement.val('Florida');
    
    setTimeout(function() {
      $countryElement.val('American Samoa').trigger('change');
      $stateElement.val('Eastern');
    }, 5000);
    
    });

    function validateform(){  
        const name=document.myform.name.value;  
        

    let today = new Date();
    let submission = new Date(2020, 7, 29, 12, 00);
    let deadline = new Date(2020, 7, 31, 11, 59);
        

        if (today <= submission && today <= deadline) {
          alert('Registration successful.');
          return true;
      } else {
          alert('Registration has ended');
          return false;
      }
        }  




