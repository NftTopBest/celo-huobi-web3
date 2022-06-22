## Web3NFT.Social

* Online demo: [Online link](https://alfajores.web3nft.social/0xC6E58fb4aFFB6aB8A392b7CC23CD3feF74517F6C)
* Video demo:
  * [English Demo Video link](https://www.loom.com/share/ae0463da385248df8f3d41efe4df74da)
* Keynote(pdf version): [Keynote in pdf link](./keynote.pdf)
* Keynote(markdown version): [Keynote in markdown link](./BP.md)
* Screenshot list: [Click to view](./screenshot/)

<img src="./screenshot/full-1.png" />

## Application Features

* Blog: user creation for sale [source code](./frontend/src/components/web3/nft/article/Form.vue)
  * list/create blog posts, save in IPFS
  * With LIT to have content permission control (user must mint poster's NFT to have access to the article) [source code](./frontend/src/helpers/litHelper.ts)
  * blog content can add token gating logic (only user have special NFT can read the blog content) [source code](./frontend/src/pages/web3nft.social/%5BuserWalletAddress%5D/blog/%5Bid%5D.vue)
  * readers can mint NFT for creator (Moonbase Aplpha testnet)
    * [FE code](./frontend/src/components/web3/nft/btn/MintNFT.vue)
    * [NFT Contract Code](./contracts/CTC_ERC721A.sol)
    * [NFT contract Deploy](https://alfajores-blockscout.celo-testnet.org/address/0x83B06d09B99AD2641Dd9b1132E8Ce8809b623433/transactions)
  * readers can voteUp/voteDown for creator  (Moonbase Aplpha testnet)
    * [FE code](./frontend/src/components/web3/nft/btn/VoteUpDown.vue)
    * [Voting Contract Code](./contracts/CrowdFunding.sol)
    * [Voting contract Deploy](https://alfajores-blockscout.celo-testnet.org/address/0xf9982E648eE8F9E3e9039b0071bA939c3BC19652/transactions)
* Social relations: CyberConnect
  * Follow/unfollow actions [source code](./frontend/src/components/web3/nft/btn/Follow.vue)
  * Followers list  [source code](./frontend/src/components/web3/nft/dialog/relationshipList.vue)
  * Followings list [source code](./frontend/src/components/web3/nft/dialog/relationshipList.vue)
* Web3 LinkTree  [source code](./frontend/src/pages/web3nft.social/settings/Web3Home.vue)
  * User can add many social platform link to their W3NS home page
  * Data store on IPFS
  * Data permission control by LIT
* Search any address to show the Web3 things

## Technologies used

* BlockChain Network
  * [x] Celo alfajores testnet
* Smart Contract Dev Env
  * [x] Hardhat
* RPC endpoints
  * [x] Infura
* Front-end hosting && image assets && CDN
  * [x] Vercel
  * [x] IPFS
* User profiles / Blog posts store / Albumn Store / Permission Control
  * [x] IPFS
  * [x] LIT
* Social Graph
  * [x] CyberConnect
* Chat
  * [x] XMTP
* Application Tech Stack
  * [x] TailwindCSS
  * [x] Vue3
  * [x] Pinia (state store)
  * [x] PWA
  * [x] Vue-i18n
  * [x] Villus (gql && pinia binding lib)
  * [x] Vite2
  
<img src="./screenshot/full-2.png" />
