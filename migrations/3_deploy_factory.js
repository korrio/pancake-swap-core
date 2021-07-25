const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = function (deployer, network, addresses) {
	const [admin, alice, bob] = addresses;

	// const FEETOSETTER_ADDRESS = admin;
	const FEETOSETTER_ADDRESS = "0x9D442ec26dDBfAb9a6dDE3456C50C2ddd5435310";
  deployer.deploy(PancakeFactory,FEETOSETTER_ADDRESS);
};
