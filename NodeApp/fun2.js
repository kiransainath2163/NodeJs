function gettopics(){
    return ['Angular','React']
}

function greet(){
    return function sayHello(){
        console.log('Hello')
    }
}

greet()();
let tps  = gettopics()
//console.log(tps)

let [one,two] = gettopics()

//console.log(one,two)