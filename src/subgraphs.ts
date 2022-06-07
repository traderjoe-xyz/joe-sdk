import { ChainId } from './constants'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const BLOCKS_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
  [ChainId.FUJI]: ZERO_ADDRESS,
  [ChainId.AVALANCHE]: 'https://thegraph.com/explorer/subgraph/dasconnor/avalanche-blocks'
}

export const EXCHANGE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-rinkeby-ii',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange'
}

export const MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2'
}

export const DEXCANDLES_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-rinkeby-ii',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles'
}

export const BAR_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar-rinkeby-ii',
  [ChainId.FUJI]: ZERO_ADDRESS,
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar'
}

export const LENDING_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending'
}

export const ROCKET_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket'
}

export const SJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/sjoe'
}

export const MONEY_MAKER_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/moneymaker-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/money-maker'
}

export const VEJOE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/vejoe'
}

export const BOOSTED_MASTERCHEF_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boosted-master-chef-rinkeby',
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boostedmasterchef-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/boosted-master-chef'
}

export const NFT_CONTRACTS_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: ZERO_ADDRESS,
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contract-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/nft-contracts'
}

export const JOEPEG_MARKETPLACE_SUBGRAPH: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: ZERO_ADDRESS,
  [ChainId.FUJI]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace-fuji',
  [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/marketplace'
}
