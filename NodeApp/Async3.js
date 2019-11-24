function ucase(str,cb){
    let res = str.toUpperCase();
    cb(res);
}

ucase('kiran',function(res1){
    console.log(res1)
})

console.log('Hello World!!!!!!!!!!!!!!!!')