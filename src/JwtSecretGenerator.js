const crypto = require('crypto')

class JwtSecretGenerator {
  constructor() { }

  generateJwtSecret(randomBytes, toString, number) {
    if (!number || number === 1) {
      return [crypto.randomBytes(randomBytes).toString(toString)]
    }

    const secretsArray = []
    for (let i = 0; i < number; i++) {
      secretsArray.push(crypto.randomBytes(randomBytes).toString(toString))
    }

    return secretsArray
  }
}

module.exports = JwtSecretGenerator