function copyAddress() {

    let  checked =document.querySelector('sameAddressCheckbox').checked;
    let  taddressField = document.querySelector('tempAddress');
    let paddressField =document.querySelector('permanentAddress');
    
    paddressField.disabled =checked;
    if(checked){
        paddressField.value=taddressField.value;
    }
    else{
        paddressField.value ='';
    }

    // var tempAddress = document.getElementById('tempAddress').value;
    // if (document.getElementById('sameAddressCheckbox').checked) {
    //   document.getElementById('permanentAddress').value = tempAddress;
    //   document.getElementById('permanentAddress').disabled = true;
    // } else {
    //   document.getElementById('permanentAddress').value = '';
    //   document.getElementById('permanentAddress').disabled = false;
    // }
  }







function validation(){

    
    let name = document.querySelector("#jina").value;
    let reg = document.querySelector("#regNumber").value;

    let phone = document.querySelector("#phone");






    
    //let adds =/^[A-Za-z]/;
    let nm =/^[A-Za-z]*\s{1}[A-Za-z]*$/;
    let number = /^[a-zA-Z0-9]+$/;
    let cm =/^[0-9{10}]$/;
    let patt = /^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    
     let jawabu = nm.test(name);
     let nmb = number.test(reg);
     let mobile = cm.test(phone);
     let result = patt.test(email);
     //let addss =adds.test(tempAddress);

     alert('name is' +""+jawabu);
     alert('registration is'+""+nmb);
     alert('phone is'+""+mobile);
     alert('email is '+""+result);
     alert(addss)




    
}