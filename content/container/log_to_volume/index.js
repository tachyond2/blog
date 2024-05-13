const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const PORT = 3000
const logsDir = 'logs'
const logFile = path.join(logsDir, 'access.log')

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logsDir)
}

app.get('/', (req, res) => {
  const logMessage = `${new Date().toISOString()} - ${req.ip} accessed ${
    req.orgiinalUrl
  }\n`

  fs.appendFile(logFile, logMessage, err => {
    if (err) {
      console.error(`Failed to write to log file: ${err}`)
    }
  })

  req.send('Hello, World')
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
