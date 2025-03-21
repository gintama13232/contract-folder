// Initialize Aptos client
const aptos = window.Aptos;
const client = new aptos.AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

let userAddress =0x6f8282f70e65bdfd0a5ef4d921e060a41b6da702443dfe204393a6d9c5f4ca7f;

document.getElementById('connectWallet').addEventListener('click', connectWallet);

async function connectWallet() {
    try {
        // This assumes you have a wallet like Martian or Petra installed in the browser
        const wallet = await aptos.connect();
        userAddress = wallet.address;
        document.getElementById('connectWallet').innerText = `Connected: ${userAddress}`;
        fetchNFTs();
    } catch (error) {
        console.error('Error connecting wallet:', error);
    }
}

// Fetch NFTs from the blockchain
async function fetchNFTs() {
    try {
        // Replace with actual smart contract address and function to fetch NFTs
        const response = await client.getAccountResources(userAddress);
        const nftList = document.getElementById('nftList');
        nftList.innerHTML = '';  // Clear previous NFTs

        // Loop through fetched NFTs (this is just an example)
        response.forEach(nft => {
            const nftElement = document.createElement('div');
            nftElement.className = 'nft-card';
            nftElement.innerHTML = `
                <img src="${nft.image}" alt="${nft.name}">
                <h3>${nft.name}</h3>
                <p>${nft.description}</p>
                <button onclick="buyNFT('${nft.id}')">Buy NFT</button>
            `;
            nftList.appendChild(nftElement);
        });
    } catch (error) {
        console.error('Error fetching NFTs:', error);
    }
}

// Mint a new NFT
document.getElementById('mintForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nftName = document.getElementById('nftName').value;
    const nftDescription = document.getElementById('nftDescription').value;
    const nftImage = document.getElementById('nftImage').files[0];

    try {
        const formData = new FormData();
        formData.append('nftName', nftName);
        formData.append('nftDescription', nftDescription);
        formData.append('nftImage', nftImage);

        // Send transaction to mint NFT (smart contract interaction)
        // Replace with actual minting functionality
        await client.submitTransaction({
            sender: userAddress,
            payload: {
                nftName,
                nftDescription,
                nftImage: nftImage.name,
            }
        });

        alert('NFT Minted Successfully!');
        fetchNFTs();  // Refresh the NFT list
    } catch (error) {
        console.error('Error minting NFT:', error);
        alert('Failed to mint NFT.');
    }
});

// Function to buy NFT
async function buyNFT(nftId) {
    try {
        // Interact with smart contract to purchase NFT
        // Add actual logic to trigger purchase based on your contract
        await client.submitTransaction({
            sender: userAddress,
            payload: {
                nftId,
                action: 'buy'
            }
        });

        alert('NFT Purchased!');
        fetchNFTs();  // Refresh the NFT list
    } catch (error) {
        console.error('Error buying NFT:', error);
        alert('Failed to purchase NFT.');
    }
}

