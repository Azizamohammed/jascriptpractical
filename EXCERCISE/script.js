// function validateHTMlform()
// {
//   let form = document.StudenSignupForm;
//    if( form.textnames.value == "" )
//    {
//      alert( "Enter Your First Name!" );
//      form.textnames.focus() ;
//      return;
//    }
//    if( form.lastnames.value == "" )
//    {
//      alert( "Enter Your Last Name!" );
//      form.textnames.focus() ;
//      return;
//    }
  
//    if( form.fathername.value == "" )
//    {
//      alert( "Enter Your Father Name!" );
//      form.fathername.focus() ;
//      return;
//    }
  
//    if( form.paddress.value == "" )
//    {
//      alert( "Enter Your Postal Address!" );
//      form.paddress.focus() ;
//      return;
//    }
//    if( form.personaladdress.value == "" )
//    {
//      alert( "Enter Your Personal Address!" );
//      form.personaladdress.focus() ;
//      return;
//    }
//    if ( ( StudenSignupForm.sex[0].checked == false ) && ( StudenSignupForm.sex[1].checked == false ) )
//    {
//    alert ( "Choose Your Gender: Male or Female" );
//    return false;
//    }  
//    if( form.City.value == "-1" )
//    {
//      alert( "Enter Your City!" );
//      form.City.focus() ;
//      return;
//    }  
//    if( form.Course.value == "-1" )
//    {
//      alert( "Enter Your Course!" );
    
//      return;
//    }  
//    if( form.District.value == "-1" )
//    {
//      alert( "Select Your District!" );
    
//      return;
//    }  
//    if( form.State.value == "-1" )
//    {
//      alert( "Select Your State!" );
    
//      return;
//    }
//    if( form.pincode.value == "" ||
//            isNaN( form.pincode.value) ||
//            form.pincode.value.length != 6 )
//    {
//      alert( "Enter your pincode in format ######." );
//      form.pincode.focus() ;
//      return;
//    }
// var email = form.emailid.value;
//   atpos = email.indexOf("@");
//   dotpos = email.lastIndexOf(".");
// if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
// {
//      alert("Enter your correct email ID")
//      form.emailid.focus() ;
//      return;
// }
//   if( form.dob.value == "" )
//    {
//      alert( "Enter your DOB!" );
//      form.dob.focus() ;
//      return;
//    }
//   if( form.mobileno.value == "" ||
//            isNaN( form.mobileno.value) ||
//            form.mobileno.value.length != 10 )
//    {
//      alert( "Enter your Mobile No. in the format 123." );
//      form.mobileno.focus() ;
//      return;
//    }
//    return( true );
// }


$(document).ready(function() {
    // Validate mobile number
    $("#phone_number").on("keyup", function() {
      var phone_number = $(this).val();
      if (phone_number.length != 10) {
        $(this).closest(".form-group").addClass("has-error");
      } else {
        $(this).closest(".form-group").removeClass("has-error");
      }
    });
  
    // Validate register number
    $("#register_number").on("keyup", function() {
      var register_number = $(this).val();
      var reg_exp = /^[a-zA-Z0-9]+$/;
      if (!reg_exp.test(register_number)) {
        $(this).closest(".form-group").addClass("has-error");
      } else {
        $(this).closest(".form-group").removeClass("has-error");
      }
    });
  
    // Validate name
    $("#student_name").on("keyup", function() {
      var name = $(this).val();
      var reg_exp = /^[a-zA-Z]{1,30}$/;
      if (!reg_exp.test(name)) {
        $(this).closest(".form-group").addClass("has-error");
      } else {
        $(this).closest(".form-group").removeClass("has-error");
      }
    });
  
    // Validate email
    $("#email").on("keyup", function() {
      var email = $(this).val();
      var reg_exp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!reg_exp.test(email)) {
        $(this).closest(".form-group").addClass("has-error");
      } else {
        $(this).closest(".form-group").removeClass("has-error");
      }
    });
  
    // Check if "Permanent address is same as temporary address" checkbox is checked
    $("#permanent_address_same").on("change", function() {
      if ($(this).is(":checked")) {
        $("#permanent_address").prop("disabled", true);
      } else {
        $("#permanent_address").prop("disabled", false);
      }
    });
  });
  
