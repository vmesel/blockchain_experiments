Web3 = require("web3");
solc = require('solc');
fs = require("fs");

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
console.log("Checa se o Web3 conseguiu conectar ao Ganache");
console.log(web3.eth.accounts);

sourceCode = fs.readFileSync('voting.sol').toString()
compiledCode = solc.compile(sourceCode)
contractABI = JSON.parse(compiledCode.contracts[':Saudacoes'].interface)
saudacoesContract = web3.eth.contract(contractABI)
bytecode = compiledCode.contracts[':Saudacoes'].bytecode
// Usando o SmartContract
saudacoesDeployed = saudacoesContract.new({data: bytecode, from: web3.eth.accounts[0], gas: 4700000})
console.log("Saudações deployed - Endereço do Deploy");

address = saudacoesDeployed.address;

console.log(address);
instancia = saudacoesContract.at(address)
saud = instancia.getSaudacoes()

console.log(saud);
