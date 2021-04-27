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
  [ChainId.RINKEBY]: '0xDdCe22917110b2E0Fe72d80626bA3FBF286E9065',
  [ChainId.FUJI]: '0x7eeccb3028870540EEc3D88C2259506f2d34fEE0',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const JOE_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x32A83BF2BD519e505f4e39182F214176162F7429',
  [ChainId.FUJI]: '0xcee9d937E3627E55F08240072D63f32c3a60fF2D',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xDa78543E5202216684734fBC003E578fd32c3869',
  [ChainId.FUJI]: '0x2d388F47c3Ae5CC0C7F8ad73296B208cfaCd35ae',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x9B8536B0710196865b7bbc2BF2b448eC014C637b',
  [ChainId.FUJI]: '0x171B28d39De22EF001029117F3d241fF78c7DC5C',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xF8bCDda9f6545a1A1A6AcDad6f9Abd1e863423dA', 
  [ChainId.FUJI]: '0x5db0735cf88F85E78ed742215090c465979B5006',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0xA1688d70F98a5802b50aAc71D8c03ac385cc9fA5',
  [ChainId.FUJI]: '0x0529719e33AA2f15c13b12be01D7E876454Caf02',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const ROLL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x287b295219F7A842Ad88c7d1E8a4931c35212f35',
  [ChainId.FUJI]: '0x41d5f5F66e4cEd197Ff273308A1c194E9E249f4F',
  [ChainId.AVALANCHE]: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88' // TODO
}

export const BORINGHELPER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x0900eCCda943D0A55D6F6E1D6Af23E1bb5Fb7636',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c' // TODO
}

export const BORINGTOKENSCANNER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x943644Dd6b5629Db7120e6EAe5c30B4DaD4848be',
  [ChainId.FUJI]: '0xD28be693a573a26f50195213613EC893Ad5c4460',
  [ChainId.AVALANCHE]: '0x5cFcA5b2149A20A166508B28e5FCFA65c44c6B9c' // TODO
}

export const BORINGDASHBOARD_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.RINKEBY]: '0x5AC8e047b529404a9a9883a4505f48F26bBB2902',
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
