const sha256 = require('sha256')

function Blockchain() {
  this.chain = []
  this.pendingTransactions = []
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

module.exports = Blockchain
