import fs from 'fs'
import path from 'path'

class FileWriter {
  #__dirname

  constructor() {
    this.#__dirname = path.resolve()
  }

  writeText(fileName, text) {
    fs.writeFileSync(path.resolve(this.#__dirname, fileName), text)
  }
}

export { FileWriter }