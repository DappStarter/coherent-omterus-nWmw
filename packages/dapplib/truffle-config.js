require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember unit inner clog outer transfer'; 
let testAccounts = [
"0x212fc944e19506b60a56b6cb51074c2a6989441d3880a6015c157e809862e35f",
"0x52b0d6962632c4b705ba4fe9e20ab05720e3d3aa107e8bcca10d1bc16237785b",
"0xb5265d6e3c03025ee4769ed639e48b6e3178ddb7e6ab04d5f276f73fbe7ffcdc",
"0x03300aa964c0eeea887990b7a794f7f46c4d8c4bf7030dd9d2de1e6d7ccdc404",
"0x54b1f75794c6afed0e5cf8de608b8f67a04368583b61a6508915c0000419d1e3",
"0xaeda89c3cee57ff75d6f3a28943c8838f22a3abac9c5946fdaddcc659c8a3ec7",
"0x04ba34c894f32590c300294be2f78e2717bf81aaa01376e184f16b3ed195a2ee",
"0x0d563ba666cdea1e36a036cedce5cb2b19a09829588ade9aeb8b8919c8e986f5",
"0x7d14eac0e8da6ec0102dc00bc439e6510421764b890bb3365976388166a490a6",
"0xd9e273c7fd5cb6fbb4849d788629493954654ec15ee90d360751f3ed81d834ce"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

