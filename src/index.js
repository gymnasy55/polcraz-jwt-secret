import { JwtSecretGenerator } from './JwtSecretGenerator.js'

const jwtSecretGenerator = new JwtSecretGenerator()

const jwtSecret = jwtSecretGenerator.generateJwtSecret(64, 'hex')

console.log(jwtSecret)