import { useState } from "react";
import { AptosClient } from "aptos";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

export default function MintNFT() {
  const [collection, setCollection] = useState("");
  const [name, setName] = useState("");
  const [uri, setUri] = useState("");

  const mintNFT = async () => {
    // Call Aptos API to mint NFT (to be implemented)
    console.log("Minting NFT:", name, uri, "in collection", collection);
  };

  return (
    <div>
      <input placeholder="Collection Name" onChange={(e) => setCollection(e.target.value)} />
      <input placeholder="NFT Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="NFT URI" onChange={(e) => setUri(e.target.value)} />
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
}
