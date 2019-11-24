let a = 'Kiran sainath'
function cou(a){
    let p = new Promise(function(resolve,reject){
        resolve(a.length)
    })
    return p
}

cou('Kiransainath').then(function(res){
    console.log(res)
})
console.log('Hello World')