const papayanft = artifacts.require("./papayanft.sol");
const {assert} = require("chai");
const {toWei} = require("web3-utils");

contract("papayanft", function(accounts) {
    let papayanftInstance;
    before(async function() {
        papayanftInstance = await papayanft.deployed();
    });

    it("should be able to set floor price", async function() {
        const w = toWei("0.01", "ether");
        await papayanftInstance.setPrice(w, {from: accounts[0]});
        let floorPrice = await papayanftInstance.floorPrice();
        assert.strictEqual(floorPrice, w, "floor price is not set correctly");
    });

});