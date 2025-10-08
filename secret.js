const crypto = require('crypto')

const secret = 'ejercicios de back'
const secret2 = 'segunda clave refrescar'

const has = crypto.createHmac('sha256', secret).update(secret2).digest('hex')
