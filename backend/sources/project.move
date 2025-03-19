module MyModule::PersonalizedNFTs {
    use aptos_framework::signer;
    use aptos_framework::token;

    /// Function to create a new NFT collection
    public fun create_collection(owner: &signer, name: vector<u8>, description: vector<u8>) {
        token::create_collection(
            owner,
            name,
            description,
            vector<u8>(),
            false,  // No mutable description
            false,  // No mutable royalties
            false   // No mutable URI
        );
    }

    /// Function to mint a personalized NFT
    public fun mint_nft(owner: &signer, collection: vector<u8>, name: vector<u8>, uri: vector<u8>) {
        token::create_token(
            owner,
            collection,
            name,
            1,   // Supply
            uri,
            owner, // Primary recipient
            0,   // No royalties
            vector<u8>(),
            vector<u8>(),
            false, // No mutable properties
            false, // No mutable description
            false  // No mutable URI
        );
    }
}
