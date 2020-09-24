const sha256 = require('sha256')
const currentNodeUrl = process.argv[3]

function Blockchain() {
  this.chain = []
  this.pendingTransactions = []

  this.currentNodeUrl = currentNodeUrl
  this.networkNodes = []

  this.createNewBlock(777, '0', '0') // This is the genisis block. 
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1, // what block you are on
    timestamp: Date.now(),
    transactions: this.pendingTransactions, // Transcation that have been created after the previous block was mined
    nonce,
    hash,
    previousBlockHash 
  }

  this.pendingTransactions = [] // clear out transactions
  this.chain.push(newBlock)
  
  return newBlock
}

Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1]
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient ) { // This can be any data, no only transctions
  const newTransactions = {
    amount,
    sender,
    recipient
  }

  this.pendingTransactions.push(newTransactions)

  return this.getLastBlock()['index'] + 1
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData)
  const hash = sha256(dataAsString)
  return hash
}

Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  // we want to make sure each block is valid
  // We want to find a special hash. For example, a hash that has 4 zeros. Only way to get a special hash is by trail and error.  
  // The nonce needs to change (increment) to keep the previousBlockHash and currentBlockData the same
  // It secures the blockchain because we need to use hashBlock a lot of time and power
  // Changing a previous block will require a lot of calls to hashBlock, which isn't fesible
  let nonce = 0
  let hash =  this.hashBlock(previousBlockHash, currentBlockData, nonce)  
  while(!hash.startsWith('0000')) {
    nonce++ 
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce)
    console.log(hash)
  }
  return nonce
}


module.exports = Blockchain
