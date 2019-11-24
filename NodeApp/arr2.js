var topics = ['Node','Mocha','chai']

var newtopics = [...topics,'Angular']

newtopics.push('Svelt')
newtopics.push('jest')
console.log(newtopics)

newtopics.splice(2,10)
console.log(newtopics)