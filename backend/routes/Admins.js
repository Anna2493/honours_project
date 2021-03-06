const express = require("express")
const admins = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Admin = require("../models/Admin")
admins.use(cors())

process.env.SECRET_KEY = 'secret'

//REGISTER
admins.post('/api/register', (req, res) => {
    
    const adminData = {
        first_name: req.body.first_name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        
    }

    Admin.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(admin => {
        if(!admin) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                adminData.password = hash
                
                Admin.create(adminData)
                .then(admin => {
                    res.json({status: admin.email + ' registered'})
                })
                .catch(err => {
                    res.send('error ' + err)
                })
            })
        }
        else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })

    // users.post('/login', (req, res) => {
    //     User.findOne({
    //         where: {
    //             email: req.body.email
    //         }
    //     })
    //     .then(user => {
    //         if(user) {
    //             if(bcrypt.compareSync(req.body.password, user.password)) {
    //                 let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
    //                     expiresIn: 1440
    //                 })
    //                 res.send(token)
    //             }
    //         }
    //         else{
    //             res.status(400).json({error: 'User doen not exist'})
    //         }
    //     })
    //     .catch(err => {
    //         res.status(400).json({ error: err })
    //     })
    // })
})
//LOGIN
admins.post('/login', (req, res) => {
    Admin.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(admin => {
            if (admin) {
                if (bcrypt.compareSync(req.body.password, admin.password)) {
                    let token = jwt.sign(admin.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                    })
                    res.send(token)
            }
            }
            else {
                res.status(400).json({error: 'Admin do not exist'})
            }
        })
        .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = admins