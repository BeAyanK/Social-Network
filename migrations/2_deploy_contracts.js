/* eslint-disable no-undef */


var SocialNetwork = artifacts.require("./SocialNetwork.sol");

module.exports = function(deployer) {
  deployer.deploy(SocialNetwork);
};
