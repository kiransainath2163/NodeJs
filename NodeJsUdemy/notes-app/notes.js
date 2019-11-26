const fs = require('fs')
const chalk = require('chalk')
const JsonData = require('./notes.json')

let getNotes = function () {
    return fs.readFileSync('notes.json')
}

let addNotes = function (title1, body1) {
    let a = JsonData.filter((c) => {
        return c.title === title1
    })
    if (a.length > 0) {
        console.log(chalk.red.inverse('Duplicate Note Found, Cannot add this Note, Try with different Title'))
    }
    else {
        const f = {
            title: title1,
            body: body1
        }
        JsonData.push(f)
        console.log(JsonData)
        fs.writeFileSync('notes.json', JSON.stringify(JsonData))
        console.log(chalk.green.inverse('Note Added!!!!!'))
    }
}

let removeNotes = function (title1) {
    let d = JsonData.filter((c) => {
        return c.title === title1
    })
    let c = 0
    for (let i = 0; i < JsonData.length; i++) {
        if (d[0] === JsonData[i]) {
            JsonData.splice(i, 1)
            console.log(chalk.green.inverse('Note '+d[0].title+' has been removed successfully'))
            c = 1
            break
        }
    }
    if (c == 0) {
        console.log(chalk.red.inverse('Failed to remove Note'))
    }
    fs.writeFileSync('notes.json', JSON.stringify(JsonData))
}
module.exports = {
    getNotes, addNotes, removeNotes
}