const yargs = require('yargs')
//console.log(process.argv)
yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
             describe:'Note Title',
             demandOption:true,
             type:'string'
        },
        body:{
            describe:'Body Content',
            demandOption:true,
            type:'string'
        },
        footer:{
            describe:'THis is footer'
        }
    },
    handler:function(argv){
        console.log('Adding a new note'+argv.title+' '+argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'HRemoving a note',
    handler:function(){
        console.log('Removing a note')
    }
})

yargs.command({
    command:'list',
    describe:'Listing notes',
    handler:function(){
        console.log('Listing notes')
    }
})

yargs.command({
    command:'read',
    describe:'Reading notes',
    handler:function(){
        console.log('Reading notes')
    }
})

yargs.parse()
//console.log(yargs.argv)
//