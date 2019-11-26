const event={
    name:'Birthday Party',
    guestlist:['kiran','sainath','krishna'],
    printGuestList(){
        console.log('25 members are coming to '+this.name)
        this.guestlist.forEach((x,ind)=>{
            console.log(x+' '+this.name)
        })
    }
}

event.printGuestList()