const express = require('express')
const app = express()
const port = process.env.PORT || 7777

const Blockchain = require('./blockchain')

const ledger = new Blockchain()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/blockchain', (req, res) => {
  res.send(ledger)
})

app.post('/transaction', (req, res) => {
  const {amount, sender, recipient} = req.body
  res.json({amount, sender, recipient})
})

app.get('/mine', (req, res) => {
  res.send('works')

})

app.listen(port, () => console.log(`Server running on port ${port}`))