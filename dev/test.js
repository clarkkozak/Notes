const Blockchain = require('./blockchain')

const coin = new Blockchain()

coin.createNewBlock(1111, 'asfasdkjfasd;faj', 'asfdasdfasdfsa')
coin.createNewTransaction('100', 'ALEX', 'MICHELE')
console.log(coin)
coin.createNewBlock(8119, 'asfdasdfasdfsa', 'yesyesyesyes') // A block needs to be mined for pending transactions to be added
console.log(coin)

