// Regular Expression

let words =/aziza/;


let story = words.test("i love my self aziza");
 console.log(story);



// select all in regular expression


let neno =/[@gmail   @yahoo]/;

// let hadithi = neno.test("Aaziza@gmail.com");


let hadithi = neno.test("aziza@yahoo.com");
console.log(hadithi);



// select atleast one number range from 0-5


let number =/[0-5]/;
  let namba = number.test("8");


  console.log(namba);



//   select atleast from a-z



 let latter = /[a-z]/i;  //ukiwa unataka zitoke zote zizsijali kama ni kubw au ndogo unaeka i

let leta = latter.test("MAMA");

console.log(leta);




let vowel =/[^a e i o u]/;

let voweli = vowel.test("kkl");



console.log(voweli);


// receive data from theb form
function myfunction(){
let names = document.getElementById(".name").value;
let password = document.getElementById(".password").value;


let latters =/[a-z]/i;
if(latters.test(names)){
    console.log("names is valid");
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  6*895;///////////////////////////////////////////
else{
    console.log("names is invalid");
}


}



// let jina = nam.test('${names}');

// console.log(jina);

// // console.log(names);
// // console.log(password);

0