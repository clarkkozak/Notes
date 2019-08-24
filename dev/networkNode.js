const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] 

const uuid = require('uuid/v1')
const nodeAddress = uuid().split('-').join('')

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
  const index = ledger.createNewTransaction(amount, sender, recipient)
  res.json({msg: `Transcation will be added to block ${index}`})
})

app.get('/mine', (req, res) => {
  const lastBlock = ledger.getLastBlock()
  const previousBlockHash = lastBlock.hash
  const currentBlockData = {
    transaction: ledger.pendingTransactions,
    index: lastBlock.index + 1,

  }
  const nonce = ledger.proofOfWork(previousBlockHash, currentBlockData)
  const blockHash = ledger.hashBlock(previousBlockHash, currentBlockData, nonce)
  
  ledger.createNewTransaction(12.5, '00', nodeAddress) // mining reward. Should it happen before or after the mining happened?
  
  const newBlock = ledger.createNewBlock(nonce, previousBlockHash, blockHash)
  
  res.json({
    msg: 'New block mined',
    block: newBlock
  })
})

app.listen(port, () => console.log(`Server running on port ${port}`))