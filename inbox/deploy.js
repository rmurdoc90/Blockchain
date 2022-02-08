const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "project orphan need scene snake ivory year icon priority cute trophy hockey",
  "https://rinkeby.infura.io/v3/3b1e4a87ae974414adbd85a0ed6b683e"
);

const web3 = new Web3(provider);

const desploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi There!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);

  provider.engine.stop();
};

desploy();
