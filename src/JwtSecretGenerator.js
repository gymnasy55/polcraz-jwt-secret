import crypto from 'crypto'

class JwtSecretGenerator {
  constructor() { }

  generateJwtSecret(randomBytes, toString) {
    return crypto.randomBytes(randomBytes).toString(toString)
  }
}

export { JwtSecretGenerator }