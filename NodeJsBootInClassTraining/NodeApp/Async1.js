function add(a,b){
    setTimeout(function(){
        return a+b;
    },3000)
    
}
function mul(a,b){
    return a*b;
}

console.log(add(10,20))
console.log(mul(10,2))