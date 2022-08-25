const jwt = require('jsonwebtoken')

function jwtGeneration ({ userData }) {
    const accessToken = jwt.sign({...userData}, process.env.ACCESS_TOKEN_SECRETKEY)
    return accessToken
}

function authenticateToken(req, res, next) {
    authHeader = req.headers["authorization"]
    authToken = authHeader && authHeader.split(' ')[1]
    if (authToken === null) return res.sendStatus(401)
    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRETKEY, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = { jwtGeneration, authenticateToken }