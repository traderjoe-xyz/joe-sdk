import { ChainId } from './constants'

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const BLOCKS_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://thegraph.com/explorer/subgraph/dasconnor/avalanche-blocks'
}

export const EXCHANGE_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange-rinkeby-ii', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange'
}

export const MASTERCHEF_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/masterchefv2'
}

export const DEXCANDLES_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles-rinkeby-ii', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/dexcandles'
}

export const BAR_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar-rinkeby-ii', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/bar'
}

export const LENDING_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending'
}

export const ROCKET_SUBGRAPH: {[chainId in ChainId]: string } = {
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket-rinkeby', 
    [ChainId.FUJI]: ZERO_ADDRESS,
    [ChainId.AVALANCHE]: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/rocket'
}
