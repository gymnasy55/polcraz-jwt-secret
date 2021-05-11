import crypto from 'crypto'

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

export { JwtSecretGenerator }