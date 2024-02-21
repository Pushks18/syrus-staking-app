require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      accounts: [
        {
          privateKey:
            "039ddae977971b129776fb0742bc38e1902ad538a9bf90b4a80591f7cb14b518",
          balance: "10000000000000000000000", // Adjust the balance as needed
        },
      ],
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
};
