import { ChainId } from 'huiwan-v2-sdk'
import { FortmaticConnector as FortmaticConnectorCore } from '@web3-react/fortmatic-connector'

export const OVERLAY_READY = 'OVERLAY_READY'

type FormaticSupportedChains = Extract<ChainId, ChainId.MAINNET | ChainId.ROPSTEN | ChainId.RINKEBY | ChainId.KOVAN | ChainId.HECO_TESTNET | ChainId.HECO_MAINNET | ChainId.BSC_TESTNET | ChainId.BSC_MAINNET | ChainId.OKEXCHAIN_TESTNET | ChainId.OKEXCHAIN_MAINNET>

const CHAIN_ID_NETWORK_ARGUMENT: { readonly [chainId in FormaticSupportedChains]: string | undefined } = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: 'ropsten',
  [ChainId.RINKEBY]: 'rinkeby',
  [ChainId.KOVAN]: 'kovan',
  [ChainId.HECO_TESTNET]: 'HECO_TESTNET',
  [ChainId.HECO_MAINNET]: 'HECO_MAINNET',
  [ChainId.BSC_TESTNET]: 'BSC_TESTNET',
  [ChainId.BSC_MAINNET]: 'BSC_MAINNET',
  [ChainId.OKEXCHAIN_TESTNET]: 'OKEXCHAIN_TESTNET',
  [ChainId.OKEXCHAIN_MAINNET]: 'OKEXCHAIN_MAINNET',
}

export class FortmaticConnector extends FortmaticConnectorCore {
  async activate() {
    if (!this.fortmatic) {
      const { default: Fortmatic } = await import('fortmatic')

      const { apiKey, chainId } = this as any
      if (chainId in CHAIN_ID_NETWORK_ARGUMENT) {
        this.fortmatic = new Fortmatic(apiKey, CHAIN_ID_NETWORK_ARGUMENT[chainId as FormaticSupportedChains])
      } else {
        throw new Error(`Unsupported network ID: ${chainId}`)
      }
    }

    const provider = this.fortmatic.getProvider()

    const pollForOverlayReady = new Promise(resolve => {
      const interval = setInterval(() => {
        if (provider.overlayReady) {
          clearInterval(interval)
          this.emit(OVERLAY_READY)
          resolve()
        }
      }, 200)
    })

    const [account] = await Promise.all([
      provider.enable().then((accounts: string[]) => accounts[0]),
      pollForOverlayReady
    ])

    return { provider: this.fortmatic.getProvider(), chainId: (this as any).chainId, account }
  }
}
