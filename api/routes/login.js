const express = require('express')
const connection = require('../script')
const router = express.Router()
const { jwtGeneration } =  require('../jwtAuhtorization');

router.post('/', (req, res) => {
    console.log('req', req.body)
    new Promise((resolve, reject) => {
        let returnData = {}
        connection.query({ sql: 'SELECT * FROM users WHERE username = ? AND userpassword = ?'}, [req.body.Username, req.body.Password], (err, result) => {
            if (err) {
                return reject(console.log('err', err))
            }
            if(result) {
                returnData = {
                    success: 1,
                    message: "User Exists",
                    accessToken: jwtGeneration({ userData: result[0] })
                }
            } else {
                returnData = {
                    success: 2,
                    message: "user not exists",
                }
            }
            return resolve(res.json({
                ...returnData
            }))
        })
    })
})

module.exports = router