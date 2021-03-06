const yargs = require('yargs')
yargs.version('1.1.0')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Body Content',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        //console.log('Adding a new note' + argv.title + ' ' + argv.body)
        notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'HRemoving a note',
    handler: function (argv) {
        console.log('Removing a note')
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: function () {
        console.log('Listing notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: function () {
        console.log('Reading notes')
        let buf = notes.getNotes()
        console.log(JSON.parse(buf))
        console.log('End Of File')
    }
})

yargs.parse()
//console.log(yargs.argv)
