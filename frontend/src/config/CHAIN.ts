import CTC from "~/abis/CTC.json";
import Vote from "~/abis/Vote.json";

const chainIdMap = {
  "dev.web3nft.social": "0x4",
  "bobarinkeby.web3nft.social": "0x1c",
  "moonbaseAlpha.web3nft.social": "0x507",
  "alfajores.web3nft.social": "0xaef3",
};
const gitBranch = import.meta.env.VITE_VERCEL_GIT_COMMIT_REF;
export const CHAIN_ID = chainIdMap[gitBranch] || "0x4";
export const CHAIN_MAP = {
  "0x4": {
    chainId: "0x4",
    chainName: "Rinkeby Test Network",
    blockExplorerUrls: ["https://rinkeby.etherscan.io"],
    nativeCurrency: { name: "Rinkeby Ether", symbol: "RIN", decimals: 18 },
    rpcUrls: ["https://rinkeby.infura.io/v3/"],
  },
  "0x89": {
    chainId: "0x89",
    chainName: "Polygon Mainnet",
    blockExplorerUrls: ["https://polygonscan.com"],
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrls: [
      "https://polygon-rpc.com/",
      "https://rpc-mainnet.maticvigil.com/",
    ],
  },
  "0x507": {
    chainId: "0x507",
    chainName: "Moonbase Alpha",
    blockExplorerUrls: ["https://moonbase.moonscan.io/"],
    nativeCurrency: { name: "DEV", symbol: "DEV", decimals: 18 },
    rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
  },
  "0x1c": {
    chainId: "0x1c",
    chainName: "Boba Testnet",
    nativeCurrency: { name: "ETH", symbol: "bETH", decimals: 18 },
    rpcUrls: ["https://rinkeby.boba.network/"],
    blockExplorerUrls: ["https://blockexplorer.rinkeby.boba.network/"],
  },
  "0xaef3": {
    chainId: "0xaef3",
    chainName: "Alfajores Testnet",
    nativeCurrency: { name: "Alfajores Celo", symbol: "A-CELO", decimals: 18 },
    rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
    blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org/"],
  },
  "0x13881": {
    chainId: "0x13881",
    chainName: "Polygon Testnet Mumbai",
    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrls: [
      "https://matic-mumbai.chainstacklabs.com",
      "https://rpc-mumbai.maticvigil.com",
      "https://matic-testnet-archive-rpc.bwarelabs.com",
    ],
  },
};

export const CHAIN_CONTRACT_MAP = {
  CTC: {
    "0x4": "0x17F6BDF57384FD9F24F1d9A4681c3a9dc839d79e",
    "0xaef3": "0x83B06d09B99AD2641Dd9b1132E8Ce8809b623433",
    "0x1c": "0x184647c4dBfE1CaAbe7b7EbDb66E2Ddac70aD0aA",
    "0x507": "0x83B06d09B99AD2641Dd9b1132E8Ce8809b623433",
  },
  Vote: {
    "0x4": "0x7b454Ef73abc93Ff775C3291a72b138822F955Da",
    "0xaef3": "0xf9982E648eE8F9E3e9039b0071bA939c3BC19652",
    "0x1c": "0x0b26D5c529026548F09ef1Eb4C30eF3F655C3d97",
    "0x507": "0xc6eD496eaFAaCD3254adD3e62Cd3f1D87b8d89Ac",
  },
};

export const CHAIN_CONTRACT_ABI_MAP = {
  CTC,
  Vote,
};
