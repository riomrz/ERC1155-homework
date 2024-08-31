const { BigNumber, constants } = require('ethers');
const { expect } = require('chai');
require("@nomicfoundation/hardhat-chai-matchers");

let dragonContract;

describe('Dragons test', function (accounts) {

    baseURI = 'ipfs://QmdbE44wCaKVZhZk3jDnphUunLmv4nmq1CaTVXiqgz3RAs';

    // beforeEach(async function () {
    it('contract setup', async function () {
        const Dragons = await ethers.getContractFactory("Dragons");
        [owner, user1, user2, user3] = await ethers.getSigners();

        dragonContract = await Dragons.deploy();
        await dragonContract.deployed();

        console.log("Dragons contract deployed to: ", await dragonContract.address)
    });

    it('owner mints some tokens', async function () {
        dragonContract.connect(owner).mint(user1.address, 1, 2, "0x");
        dragonContract.connect(owner).mint(user2.address, 3, 1, "0x");
    });

    it("owner batch-mints some tokens", async function() {
        dragonContract.connect(owner).mintBatch(user3.address, [1, 4, 5], [2, 2, 2], "0x");
    })

    it("check uri", async function() {
        await dragonContract.setTokenUri(4, baseURI+"/4.json");
        console.log(await dragonContract.getTokenUri(4));
    })
})