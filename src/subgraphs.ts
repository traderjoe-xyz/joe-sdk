import { ChainId } from './constants'

export const EXCHANGE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange',
  [ChainId.ARBITRUM_ONE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-arbitrum',
  [ChainId.ARB_GOERLI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/joe-v1-arb-goerli',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const DEXCANDLES_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const BAR_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const LENDING_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const ROCKET_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const SJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const MONEY_MAKER_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/money-maker',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const VEJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const BOOSTED_MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boostedmasterchef-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boosted-master-chef',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const NFT_CONTRACTS_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contract-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contracts',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}

export const JOEPEG_MARKETPLACE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace',
  [ChainId.ARBITRUM_ONE]: '',
  [ChainId.ARB_GOERLI]: '',
  [ChainId.BNB_CHAIN]: '',
  [ChainId.BNB_TESTNET]: ''
}
