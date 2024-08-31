const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Dragons = await hre.ethers.getContractFactory("Dragons");
  console.log("Deploying Dragons contract...");
  const dragonsToken = await Dragons.deploy();
  await dragonsToken.deployed();
  console.log("dragonsToken deployed to: ", dragonsToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
