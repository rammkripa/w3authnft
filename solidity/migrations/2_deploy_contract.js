const papaya = artifacts.require("./papayanft.sol");

module.exports = function (deployer) {
  deployer.deploy(papaya);
};