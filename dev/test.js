const Blockchain = require('./blockchain')

const coin = new Blockchain()

const prevBlockHash = 'ASDJAHDASJDAHSD81273'
const currBlockData = [ 
  {
    amount: 10,
    sender: 'Lisa',
    recipient: 'Rachel'
  }
]

const nonce = 3212

const correctNonce = coin.proofOfWork(prevBlockHash, currBlockData) // get the nonce. Lot of work to generate. 
console.log(correctNonce)
console.log(coin.hashBlock(prevBlockHash, currBlockData, correctNonce)) // since we know the nonce, we can confirm the hash (a.k.a Proof). Little work to prove. 4 zeros! 
