function f1(fx){
    console.log('Inside F1')
    fx();
}
let a = function(){
    console.log('Inside fx')
}
f1(a)