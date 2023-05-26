document.addEventListener('DOMContentLoaded', function() {    
     let input = document.querySelector('.name');    
     let inputMessage = document.querySelector('.inputmessage'); 
 
    input1.addEventListener('focus', function(){ 
       inputMessage.style.display = "block"; 
         
    })  input.addEventListener('blur', function(){ 
            if (input1.value ===""){ 
               inputMessage.style.display = "block"; 
        
            }else{  
                       inputMessage.style.display = "none";  
    } 
    }) 
 
 
 });  
function submit(){ 
 
    let password = document.querySelector(".password").value;     
    let verify = document.querySelector(".verify").value; 
         if (password !== verify) { 
        alert("Passwords do not match.");        
         return false; 
    }     
    let checkbox = document.querySelectorAll('input[name="preference"]:checked'); 
   
    if (checkbox.length < 2) { 
      alert("at least two colors should be selected!");     
        return false; 
    } 
 
    alert('Form is submitted successfully!');    
     return true; 
} 
