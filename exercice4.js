var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, content) { 
    if (err) {
        return console.log(err)
      }
  var lignes = content.toString().split('\n').length - 1 
  console.log(lignes) 
})