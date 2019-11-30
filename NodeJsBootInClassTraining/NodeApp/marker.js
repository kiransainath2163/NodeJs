class Marker{

    constructor(make, color){
        this.make = make;
        this.color = color;
    }
    write(){
        console.log(this.make,this.color)
    }
}

let m = new Marker('Audi','Black')
m.write();