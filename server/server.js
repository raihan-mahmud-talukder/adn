const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const cors = require('cors')
const fs = require('fs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
    const { email } = req.body
    await fs.appendFile('email.txt', `${email}\n`, err => {
        if (err) throw err
        console.log('list updated')
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})