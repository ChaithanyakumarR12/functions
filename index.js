function f(){
    console.log("Sample function");
}
f();
function addtion(a,b){
console.log(`Sum of ${a},${b} is ${a+b}`);
}
addtion(4,3);
let funtionarrow=()=>{
    console.log("Arrow Funtion");
}
funtionarrow();

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
function factorial(n){
    if(n==0||n==1)
    return 1;
    else
   return n*factorial(n-1);

}
 let result=factorial(4);
 console.log(result);