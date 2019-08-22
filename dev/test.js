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

const hash = coin.hashBlock(prevBlockHash, currBlockData, nonce)
console.log(hash)
// coin.createNewBlock(1111, 'asfasdkjfasd;faj', 'asfdasdfasdfsa')
// coin.createNewTransaction('100', 'ALEX', 'MICHELE')
// console.log(coin)
// coin.createNewBlock(8119, 'asfdasdfasdfsa', 'yesyesyesyes') // A block needs to be mined for pending transactions to be added
// console.log(coin)

