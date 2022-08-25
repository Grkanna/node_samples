const express = require('express')
const connection = require('../script')
const router = express.Router()
const { authenticateToken } =  require('../jwtAuhtorization');

router.post('/', authenticateToken, (req, res) => {
    new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM userdetails WHERE 1=1 '
        if (req.body.filterType) {
            sql = sql + `AND ${req.body.filterType} LIKE '%${req.body.search}%'`
        }
        connection.query({sql}, (err, result) => {
            if (err) {
                return reject(console.log('err', err))
            }
            if(result) {
                returnData = {
                    message: "Details fetched successfully",
                    userData: result
                }
            } else {
                returnData = {
                    message: "Incorrect error",
                }
            }
            return resolve(res.json({
                success: 1,
                ...returnData
            }))
        })
    })
})

router.post('/addUser', authenticateToken, (req, res) => {
    new Promise((resolve, reject) => {
        console.log('req.body', req.body)
        let sql = `INSERT INTO userdetails( userid, employeename, age, designation, place, image ) VALUES ( 1, '${req.body.userName}', '${req.body.age}', '${req.body.designation}', '${req.body.place}', '${req.body.image}' )`
        console.log('sql', sql)
        connection.query({sql}, (err, result) => {
            if (err) {
                return reject(console.log('err', err))
            }
            if(result) {
                returnData = {
                    message: "user added successfully",
                    status: 1
                }
            } else {
                returnData = {
                    message: "user adding failed",
                    status: 0
                }
            }
            return resolve(res.json({
                success: 1,
                ...returnData
            }))
        })
    })
})


module.exports = router