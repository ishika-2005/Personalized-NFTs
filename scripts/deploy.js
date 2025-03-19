const { AptosClient, AptosAccount } = require("aptos");

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");
const account = new AptosAccount(0x6698ae64f3984b1279a7b96ee04b89c540c65dbd6533f973e57c3f57ab1fdcc); // Use your private key

async function deployContract() {
  console.log("Deploying smart contract...");
  // Logic to deploy the Move contract
}

deployContract();
