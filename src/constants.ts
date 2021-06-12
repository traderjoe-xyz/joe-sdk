import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  RINKEBY = 4,
  FUJI = 43113,
  AVALANCHE = 43114
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xBB95aa2089A3494e466D3CBE6d6c21eEEFD7b337',
  [ChainId.FUJI]: '0x7eeccb3028870540EEc3D88C2259506f2d34fEE0',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const JOE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xDDF06D89C908bC38e03067d65408D632fDA4fd9d',
  [ChainId.FUJI]: '0xcee9d937E3627E55F08240072D63f32c3a60fF2D',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x927bE1425F2C3599Ced2146459f6491eE450848b',
  [ChainId.FUJI]: '0x2d388F47c3Ae5CC0C7F8ad73296B208cfaCd35ae',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x0CC47Aa1252f25FD95b65F19C2fd6dB33366A557',
  [ChainId.FUJI]: '0x171B28d39De22EF001029117F3d241fF78c7DC5C',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const ZAP_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x79e31B875ef90941637910799efcF9D94E446436',
  [ChainId.FUJI]: '0x5BBFA5f49EC557eABA9427Ac434F21b69113Fe20', // TODO
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x4A586DAA5D5EDCD8182339C24291FB510fA4d271',
  [ChainId.FUJI]: '0x5db0735cf88F85E78ed742215090c465979B5006',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x1FCFDEe3aB694032255Cd5ffe24d66b6c85501ad',
  [ChainId.FUJI]: '0x0529719e33AA2f15c13b12be01D7E876454Caf02',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const ROLL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xDEdFd3fae8a7b1BA055d7B7ad9Ba4630A5ADb9Ad',
  [ChainId.FUJI]: '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const BORINGHELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x25Dd4a2900EE3B16f8381349A34813d41d29D7cc',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c' // TODO
}

export const BORINGTOKENSCANNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x564780a6Aa44be1CA103b6c3f30e8593efBbAcD0',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c' // TODO
}

export const BORINGDASHBOARD_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xd26f71cC677A4DD6E81D3210A22D386673448069',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c' // TODO
}

export const INIT_CODE_HASH = '0x41e6225fa31c58579641c27f787341ba4a147ce63f7492b93f19d8303647d140'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
