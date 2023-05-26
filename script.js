console.log("anakula");

// function validatename(){
//     let name = document.getElementById("name").value;
//     if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//         alert(correct );
//     }
//     else{
//         alert(wrong);
//     }
// }

function emails(){
    console.log("true");
   //email  
    let email = document.querySelector("#email").value;

    let patt = /^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;

   let result =patt.test(email);
   if(result.email){
    alert('ok')
   }


    //name
    let name = document.querySelector("#jina").value;
    let nm =/^[A-Za-z]*\s{1}[A-Za-z]*$/;
     let jawabu = nm.test(name);


     //registration
     let reg = document.querySelector("#regNumber").value;

     let number = /^[a-zA-Z0-9]+$/;

     let nmb = number.test(reg);




// //program

// let program = document.querySelector("#program").value;

// let prg =/[A-Za-z]/;

// let  pr = prg.test(program);


//phonenumber

let phone = document.querySelector("#phone").value;

let  phn =  /^\d{10}$/;

let pn = phn.test(phone);

// adddress


let addres = document.querySelector("#tempAddress").value;

let add =/[A-Za-z]/;

let addrs= add.test(addres);


//parmanent


// let parmanent = document.querySelector("#permanentCheckbox").value =pp;

let prmt = document.querySelector("#permanentAddress").value;

let dd=/[A-Za-z]/;


 let pp= dd.test(prmt);


     // Check if "Permanent address is same as temporary address" checkbox is checked
//   $("#permanent_address_same").on("change", function() {
//     if ($(this).is(":checked")) {
//       $("#permanent_address").prop("disabled", true);
//     } else {
//       $("#permanent_address").prop("disabled", false);
//     }
//   });
// Check if permanent address checkbox is checked
// if (document.getElementById("sameAddressCheckbox").checked) {
//     // Copy temporary address to permanent address
//     permAddress.value = tempAddress;
//     // Disable permanent address field
//     permAddress.disabled = true;
//   }





//  if(document.querySelector("#parmanentCheckbox").checked){
//     permanentAddress.value = tempAddress;

//     permanentAddress.disabled =true;
//  }






     alert("everything is true");


}
