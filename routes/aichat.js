const express = require('express')

console.log('aichat.js loaded')

const router = express.Router()

router.post('/chat_test', (req, res) => {
  res.send('Hello World!')
})

module.exports = router