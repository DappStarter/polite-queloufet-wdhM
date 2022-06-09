require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan reward stereo pulse hunt private off trigger'; 
let testAccounts = [
"0xaafff9dbdf7b851eb5b8db3f2c598fb3f55dcb7df9bd817ed0f8dbf0cb7f7b01",
"0x57e4f6814ec0c2e4506eae3a41fc8f19ab0433d4436d0ff8f1aaacef44c7180f",
"0xd9fb7820f25f49a40375f4c445c57e51fb96b8e5be015eead9888efa51485895",
"0x6d6e63a22f3fc990a81c916d8f011a67d5fb249036950b7aba82367804502b79",
"0x17a424b887bb0e76eacada479efa6afd7197ec384e768578ded5ffc50e83a43b",
"0x0ec34108c081bafb25de488ea69e32c7c3ae474d01966817a5163b1f4fc4dfe7",
"0x156b5776147c85657034ac91e1d827892f2d5cbc077fc9a9714df7a8c13c9fdc",
"0x73ef669590a1319770920dd34b076eb8f8beea95abbc0711cbcd0a84197a9b1a",
"0xa00bbe41dd5359b200c3db2a8559c1cd5b309f1f5f12b90594e4131479b02262",
"0xf8bb69908f45cba999c1b5647055806f686bcdeccbf63f1c7db4c498f0b0437b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


