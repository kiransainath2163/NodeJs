const CarService = require('./car.service')
CarService.findByCode('1')
CarService.add({id:'3',make:'Audi',model:'ciaz',Variant:'ZXI'})
CarService.findall()