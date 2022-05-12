const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" })

async function main() {
    //URL from where we can extract the metadata for LW3Punks
    const metadataURL = "ipfs://YOUR-METADATA-CID"

    /***
     * A ContractFactory in thers.js is an abstraction used to deploy new smart contracts, 
     * so lw3PunksContract here is a factory for instances of you LW3Punks contract
     */

    const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

    // deploy the cotnract
    const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

    await deployedLW3PunksContract.deployed();

    //print address of deployed contract
    console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })