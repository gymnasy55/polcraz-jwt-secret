const fs = require('fs')
const path = require('path')

class FileWriter {
  constructor() {
    this.__dirname = path.resolve()
  }

  writeText(fileName, text) {
    fs.writeFileSync(path.resolve(this.__dirname, fileName), text)
  }
}

module.exports = FileWriter