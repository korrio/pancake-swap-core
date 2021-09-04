## Instruction for fresh fork from orginal `pancake-swap-core`
- `truffle init` to generate fresh `truffle-config.js`
- Press N, enter, N, enter. To ignore file replacement on `./contract` and `./migration`.

## Instruction for cloning this repo
- `yarn` to install dependencies
- add `.secret` to root directory of project
- Prepare `truffle-config.js` by adding/editing `kovan` provider
- `truffle compile` to check if there are any error on compilation/
- `truffle deploy --network kovan` to compile and deploy all contracts to Kovan network, it will returns smartcontract addresses that you have to note it somewhere else. 
- `truffle run verify PancakeFactory --network kovan` to verify contract on BSCSCAN, you will need `bsc_api_key` on this step.

## .secret schema
```
{
	"privatekey": [
		"", 
		""
	],
	"infura_id": "",
	"bsc_api_key": "",
	"eth_api_key": ""
}
```

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`
