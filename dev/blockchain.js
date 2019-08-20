function Blockchain() {
  this.chain = []
  this.newTransactions = []
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1, // what block you are on
    timestamp: Date.now(),
    transactions: this.newTransactions // New transcation that have been created after the previous block was mined
    nonce,
    hash,
    previousBlockHash 
  }

  this.newTransactions = [] // clear out transactions
  this.chain.push(newBlock)
  
  return newBlock
}
