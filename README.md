# To Use:

install dependancies
```shell
npm install
```

compile smart contract abi
```shell
npx hardhat compile
```

run node (in second window)
```shell
npx hardhat node
```

deploy contract
```shell
npx hardhat run scripts/deploy.js --network localhost
```

**Update provided contract address in the following:**
1) ProofOfResidencyContainer
2) QRCode
3) ViewCredentials

open project
```shell
npm start
```

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Locofy

Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

To preview and run the project on your device:
1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
2) In the terminal, run `npm install`
3) Run `npm start` to view project in browser
