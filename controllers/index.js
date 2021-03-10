const router = require('express').Router()

router.use('/api', require('./tableRes.js'))
router.use('/api', require('./tableList.js'))

module.exports = router