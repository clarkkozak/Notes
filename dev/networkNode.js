const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] 

const uuid = require('uuid/v1')
const nodeAddress = uuid().split('-').join('')

const Blockchain = require('./blockchain')

const ledger = new Blockchain()

const bodyParser = require('body-parser')
const rp = require('request-promise')

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

// register a node and broadcast it to the network
app.post('/register-and-broadcast-node', (req, res) => {
  const { newNodeUrl } =  req.body
  if (!ledger.networkNodes.includes(newNodeUrl)) { // if it doesn't has the node URL, then add it
    ledger.networkNodes.push(newNodeUrl)
  }

  const regNodesPromises = []

  ledger.networkNodes.forEach(networkNodeUrl => {
    const optons = {
      uri: networkNodeUrl + '/register-node',
      method: 'POST',
      body: { newNodeUrl },
      json: true
    }
    regNodesPromises.push(rp(options)) // broadcast to the rest of the network the new node
  })
    
  Promise.all(regNodesPromises)
    .then(data => {
      const options = {
        uri: newNodeUrl + '/register-nodes-bulk',
        method: 'POST',
        body: { allNetworkNodes: [...ledger.networkNodes, ledger.currentNodeUrl]}, 
        json: true
      }

      return rp(options) // Add nodes' URLs to new node 
    })
    .then(data => {
      res.json({msg: 'New node registered successfully'})
    })
    .catch(err => {
      console.log(err)
    })
})

// register a node with the network
app.post('/register-node', (req, res) => {
  const { newNodeUrl } = req.body
  try {
    const nodeNotAlreadyPresent = !ledger.networkNodes.includes(newNodeUrl)
    const notCurrentNode = ledger.currentNodeUrl !== newNodeUrl
    if (nodeNotAlreadyPresent && notCurrentNode) { // if it doesn't has the node URL, then add it {
      ledger.networkNodes.push(newNodeUrl)
      res.json({msg: 'New node registered successfully with node'})
    }
  }
  catch(err) {
    res.json({msg: 'An error has occurred', error: err})
  }

})

// register multiple nodes at once
app.post('/register-nodes-bulk', (req, res) => {
  const { allNetworkNodes } = req.body

    allNetworkNodes.forEach(node => {
      let nodeNotAlreadyPresent = !ledger.networkNodes.includes(node)
      let notCurrentNode = ledger.currentNodeUrl !== node
      if (nodeNotAlreadyPresent && notCurrentNode) { 
        ledger.networkNodes.push(node)
      }
    })
    res.json({msg: 'Succesfully registered nodes in bulk'})

})

app.listen(port, () => console.log(`Server running on port ${port}`))