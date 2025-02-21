 //function call

 function sayHi () {
    console.log( "hello Angellailah and roxy");
 }
 sayHi();


 function sumUp (a,b){
   
    console.log(a+b);
 }
  sumUp.apply ( null,[10,12]);

// function definition
function callYourEx( greeting,name) {
    console.log(greeting +  name);

}
callYourEx('hello','Angellailah');


  function pickUp(){
  let b= new Date();
  console.log(b);
  }
    pickUp();

 //bult in function
function pickMe(){
    let a= Math.random(10,50);
    console.log(a);
}
pickMe();

//biult in function

function  meNow(){
    let c= Date.now();
    console.log(c);
}
meNow();