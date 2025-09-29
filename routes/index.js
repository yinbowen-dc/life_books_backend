const express = require('express')

const router = express.Router()

const aiChatRouter = require('./aichat')


router.use('/aiChat', aiChatRouter)

module.exports = router