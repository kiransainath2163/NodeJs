function add(a,b,cb){
    setTimeout(function(){
        cb(a+b)
    },3000)
}

add(10,20,function(res){
    console.log(res);
});

mul(10,20,function(res){
    console.log(res)
})
console.log('hellooo........')