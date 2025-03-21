document.getElementById('connectWallet').addEventListener('click', connectWallet);
const nftGrid = document.getElementById('nftGrid');
const nftDetails = document.getElementById('nft-details');
const nftInfo = document.getElementById('nftInfo');
const buyNftButton = document.getElementById('buyNft');

async function connectWallet() {
    // Logic to connect to Aptos wallet
    console.log("Wallet connected");
    loadNFTs();
}

async function loadNFTs() {
    // Fetch NFTs from the smart contract
    const nfts = await fetchNFTsFromContract(); // Placeholder function
    displayNFTs(nfts);
}

function displayNFTs(nfts) {
    nftGrid.innerHTML = '';
    nfts.forEach(nft => {
        const nftCard = document.createElement('div');
        nftCard.className = 'nft-card';
        nftCard.innerHTML = `
            <h3>${nft.name}</h3>
            <img src="${nft.image}" alt="${nft.name}" />
            <p>Price: ${nft.price} APT</p>
            <button onclick="viewNftDetails('${nft.id}')">View Details</button>
        `;
        nftGrid.appendChild(nftCard);
    });
}

function viewNftDetails(nftId) {
    // Fetch NFT details from the smart contract
    const nft = fetchNftDetails(nftId); // Placeholder function
    nftInfo.innerHTML = `
        <h3>${nft.name}</h3>
        <img src="${nft.image}" alt="${nft.name}" />
        <p>Description: ${nft.description}</p>
       document.getElementById('connectWallet').addEventListener('click', connectWallet);
const nftGrid = document.getElementById('nftGrid');
const nftDetails = document.getElementById('nft-details');
const nftInfo = document.getElementById('nftInfo');
const buyNftButton = document.getElementById('buyNft');

async function connectWallet() {
    // Logic to connect to Aptos wallet
    console.log("Wallet connected");
    loadNFTs();
}

async function loadNFTs() {
    // Fetch NFTs from the smart contract
    const nfts = await fetchNFTsFromContract(); // Placeholder function
    displayNFTs(nfts);
}

function displayNFTs(nfts) {
    nftGrid.innerHTML = '';
    nfts.forEach(nft => {
        const nftCard = document.createElement('div');
        nftCard.className = 'nft-card';
        nftCard.innerHTML = `
            <h3>${nft.name}</h3>
            <img src="${nft.image}" alt="${nft.name}" />
            <p>Price: ${nft.price} APT</p>
            <button onclick="viewNftDetails('${nft.id}')">View Details</button>
        `;
        nftGrid.appendChild(nftCard);
    });
}

function viewNftDetails(nftId) {
    // Fetch NFT details from the smart contract
    const nft = fetchNftDetails(nftId); // Placeholder function
    nftInfo.innerHTML = `
        <h3>${nft.name}</h3>
        <img src="${nft.image}" alt="${nft.name}" />
        <p>Description: ${nft.description}</p>
       
