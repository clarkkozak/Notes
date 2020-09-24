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

app.get('/', (req, res) => {
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
app.post('/register-and-broadcast-node', function(req, res) {
	const newNodeUrl = req.body.newNodeUrl;
	if (ledger.networkNodes.indexOf(newNodeUrl) == -1) ledger.networkNodes.push(newNodeUrl);

	const regNodesPromises = [];
	ledger.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/register-node',
			method: 'POST',
			body: { newNodeUrl: newNodeUrl },
			json: true
		};

		regNodesPromises.push(rp(requestOptions));
	});

	Promise.all(regNodesPromises)
	.then(data => {
		const bulkRegisterOptions = {
			uri: newNodeUrl + '/register-nodes-bulk',
			method: 'POST',
			body: { allNetworkNodes: [ ...ledger.networkNodes, ledger.currentNodeUrl ] },
			json: true
		};

		return rp(bulkRegisterOptions);
	})
	.then(data => {
		res.json({ note: 'New node registered with network successfully.' });
	});
});

// register a node with the network
app.post('/register-node', function(req, res) {
	const newNodeUrl = req.body.newNodeUrl;
	const nodeNotAlreadyPresent = ledger.networkNodes.indexOf(newNodeUrl) == -1;
	const notCurrentNode = ledger.currentNodeUrl !== newNodeUrl;
	if (nodeNotAlreadyPresent && notCurrentNode) ledger.networkNodes.push(newNodeUrl);
	res.json({ note: 'New node registered successfully.' });
});


// register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res) {
	const allNetworkNodes = req.body.allNetworkNodes;
	allNetworkNodes.forEach(networkNodeUrl => {
		const nodeNotAlreadyPresent = ledger.networkNodes.indexOf(networkNodeUrl) == -1;
		const notCurrentNode = ledger.currentNodeUrl !== networkNodeUrl;
		if (nodeNotAlreadyPresent && notCurrentNode) ledger.networkNodes.push(networkNodeUrl);
	});

	res.json({ note: 'Bulk registration successful.' });
});

app.listen(port, () => console.log(`Server running on port ${port}`))