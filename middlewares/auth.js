const jwt = require('jsonwebtoken')

const verifyToken = async(req, res, nex) => {
    const token = req.header('auth-token');
    if(!token) {
        return res.status(401).send('Acceso denegado')
    }
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.payload = payload
        nex()
        
    } catch (error) {
        res.status(400).send('Token caducado o no valido')
    }

}

module.exports = {verifyToken}