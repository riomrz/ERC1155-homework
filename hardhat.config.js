require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@truffle/dashboard-hardhat-plugin")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17", // prima 0.8.19
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },

  networks: {
    hardhat: {},
    dashboard: {
      url: "http://localhost:24012/rpc",
    },
    sepolia: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_SEPOLIA_KEY}`,
      accounts: "remote",
    },
    amoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_AMOY_KEY}`,
      accounts: "remote",
    }
  },

  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_KEY,
    }
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },

  docgen: {
    sourceDir: 'contracts',
    outputDir: 'documentation',
    templates: 'templates',
    pages: 'files',
    clear: true,
    runOncompile: true,
  },
};
