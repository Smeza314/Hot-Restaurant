const router = require('express').Router()
const patrons = require('../db')

router.post('/reservation', (req, res) => {

  let newPatron = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    id: req.body.id
  }

  patrons.push(newPatron)

  res.sendStatus(200)
})

module.exports = router 