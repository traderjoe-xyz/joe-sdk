import { TokenAmount } from './entities/fractions/tokenAmount'
import { Pair } from './entities/pair'
import invariant from 'tiny-invariant'
import { ERC20ABI, JoePairABI } from './abis/ts'
import { ChainId } from './constants'
import { Token } from './entities/token'
import { getAddress } from 'viem'
import { getDefaultPublicClient } from './utils'

let TOKEN_DECIMALS_CACHE: { [chainId: number]: { [address: string]: number } } = {}

/**
 * Contains methods for constructing instances of pairs and tokens from on-chain data.
 */
export abstract class Fetcher {
  /**
   * Cannot be constructed.
   */
  private constructor() {}

  /**
   * Fetch information for a given token on the given chain, using the given viem public client.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param client client used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */
  public static async fetchTokenData(
    chainId: ChainId,
    address: string,
    client = getDefaultPublicClient(chainId),
    symbol?: string,
    name?: string
  ): Promise<Token> {
    const parsedDecimals =
      typeof TOKEN_DECIMALS_CACHE?.[chainId]?.[address] === 'number'
        ? TOKEN_DECIMALS_CACHE[chainId][address]
        : await client
            .readContract({
              abi: ERC20ABI,
              functionName: 'decimals',
              address: getAddress(address)
            })
            .then((decimals: number): number => {
              TOKEN_DECIMALS_CACHE = {
                ...TOKEN_DECIMALS_CACHE,
                [chainId]: {
                  ...TOKEN_DECIMALS_CACHE?.[chainId],
                  [address]: decimals
                }
              }
              return decimals
            })
    return new Token(chainId, address, parsedDecimals, symbol, name)
  }

  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  public static async fetchPairData(
    tokenA: Token,
    tokenB: Token,
    client = getDefaultPublicClient(tokenA.chainId)
  ): Promise<Pair> {
    invariant(tokenA.chainId === tokenB.chainId, 'CHAIN_ID')
    const address = Pair.getAddress(tokenA, tokenB, tokenA.chainId)
    const [reserves0, reserves1] = await client.readContract({
      abi: JoePairABI,
      functionName: 'getReserves',
      address: getAddress(address)
    })
    const balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0]
    return new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]), tokenA.chainId)
  }
}
