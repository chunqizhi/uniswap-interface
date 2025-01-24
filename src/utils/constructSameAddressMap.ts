import { ChainId } from '@chun_11/sdk-core'

export function constructSameAddressMap<T extends string>(address: T): { [chainId in ChainId]: T } {
  return {
    [ChainId.MAINNET]: address,
    [ChainId.ROPSTEN]: address,
    [ChainId.KOVAN]: address,
    [ChainId.RINKEBY]: address,
    [ChainId.GÖRLI]: address,
    [ChainId.SEPOLIA]: address,
  }
}
