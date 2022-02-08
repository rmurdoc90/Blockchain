const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "project orphan need scene snake ivory year icon priority cute trophy hockey",
  "https://rinkeby.infura.io/v3/3b1e4a87ae974414adbd85a0ed6b683e"
);

const web3 = new Web3(provider);
