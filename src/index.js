const readline = require('readline')
const JwtSecretGenerator = require('./JwtSecretGenerator')
const FileWriter = require('./FileWriter')

const jwtSecretGenerator = new JwtSecretGenerator()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (str) => new Promise(resolve => rl.question(str, resolve));

const steps = {
  start: async () => {
    return steps.seeNumberOfSecrets();
  },
  seeNumberOfSecrets: async () => {
    const numberOfSecrets = Number(await question('How many secrets have to be generated?\n> '))
    return steps.seeBytes(numberOfSecrets)
  },
  seeBytes: async numberOfSecrets => {
    const bytes = Number(await question('How many bytes have to be encoded?\n> '))
    return steps.seeSystem(numberOfSecrets, bytes)
  },
  seeSystem: async (numberOfSecrets, bytes) => {
    const system = await question('In what system you want to encode?\n> ')
    const result = jwtSecretGenerator.generateJwtSecret(bytes, system, numberOfSecrets)
    const resultStrings = result.join('\n')
    return steps.seeMethod(resultStrings)
  },
  seeMethod: async resultStrings => {
    const method = await question('File or console?\n> ')
    if (method.toUpperCase() === 'FILE') {
      return steps.seeFileName(resultStrings)
    }

    console.log(resultStrings)
    return steps.end()
  },
  seeFileName: async resultStrings => {
    const fileName = await question('Enter name of file:\n> ')
    const fileWriter = new FileWriter()
    fileWriter.writeText(fileName, resultStrings)
    return steps.end()
  },
  end: async () => {
    const end = await question('')
    rl.close();
  },
};

steps.start()