import { useState } from "react";
import { AptosClient } from "aptos";

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");

export default function CreateCollection() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const createCollection = async () => {
    // Call Aptos API to create collection (to be implemented)
    console.log("Creating collection:", name, description);
  };

  return (
    <div>
      <input placeholder="Collection Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={createCollection}>Create Collection</button>
    </div>
  );
}
