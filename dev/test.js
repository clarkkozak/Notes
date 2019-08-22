const Blockchain = require('./blockchain')

const coin = new Blockchain()

coin.createNewBlock(1111, 'asfasdkjfasd;faj', 'asfdasdfasdfsa')
coin.createNewBlock(81812, 'asfdasdfasdfsa', 'meowmeowmeow')
coin.createNewBlock(181239, 'meowmeowmeow', 'yesyesyes')

console.log(coin)
