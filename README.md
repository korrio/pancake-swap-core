## Instruction to fresh fork from orginal `pancake-swap-core`
- `truffle init` to generate fresh `truffle-config.js`
- Press N, enter, N, enter.
- add `.secret` to root directory of project
- Prepare `truffle-config.js` by adding `kovan` provider
- `truffle compile`
- `truffle deploy --network kovan`
- `truffle run verify PancakeFactory --network kovan`

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`
