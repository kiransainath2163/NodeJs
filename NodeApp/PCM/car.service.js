const cars = require('./store')

function add(car1){
    cars.push(car1)
}
function findall(){
    console.log(cars)
}

function findByCode(cod){
    var c = 0;
    for(i=0;i<cars.length;i++){
        
        let {id,make,model,variant} = cars[i];
        if(id === cod){
            console.log('Found:')
            console.log(cars[i])
            c=1;
        }   
    }
    if(c==0){
       console.log('Not Found')
   }
}
function remove(code){
    for(let i=0;i<cars.length;i++){
        if(cars[i].id==code){
            cars.splice[i,1]
            console.log('car :'+cars[i].id +' deleted..')
        }
    }
}
module.exports = {
    findall,findByCode,remove,add
}
//findall()
//findByCode('1')
// remove('1')
// findall()

