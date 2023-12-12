/// <reference path="../node_modules/@vechain/connex-types/index.d.ts" />

export type ChainId = 100009 | 100010 | 100011;
// ^ 100009 = production, 100010 = staging, 100011 = development

/**
 * JavaScript CAIP-2 representation object.
 * @see https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
 */
export type ChainData = {
  name: string;
  chain: string;
  network: "main" | "test" | Connex.Thor.Block; // TODO: add support for devnet
  rpc: string[];
  faucets: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL: string;
  shortName: string;
  chainId: ChainId;
  networkId: number;
  icon?: string;
  explorers: {
    name: string;
    url: string;
    icon?: string;
    standard: string;
  }[];
  /** VTHO contract address. */
  vtho: string;
  /** Trader contract address. */
  trader: string;
  getAccountSwapsEndpoint: string;
  getAccountStatsEndpoint: string;
  getTradeForecastEndpoint: string;
};

/**
 * @link https://github.com/ethereum-lists/chains
 */
export const CHAINS: Record<ChainId, ChainData> = {
  100009: {
    name: "VeChain",
    chain: "VeChain",
    network: "main",
    rpc: ["https://mainnet.veblocks.net/"],
    faucets: [],
    nativeCurrency: {
      name: "VeChain",
      symbol: "VET",
      decimals: 18,
    },
    infoURL: "https://vechain.org",
    shortName: "vechain",
    chainId: 100009,
    networkId: 100009,
    explorers: [
      {
        name: "VeChain Stats",
        url: "https://vechainstats.com",
        standard: "none",
      },
      {
        name: "VeChain Explorer",
        url: "https://explore.vechain.org",
        standard: "none",
      },
    ],
    vtho: "0x0000000000000000000000000000456E65726779",
    trader: "0x0000000000000000000000000000000000000000", // TODO
    getAccountSwapsEndpoint: "https://",
    getAccountStatsEndpoint: "https://",
    getTradeForecastEndpoint: "https://",
  },
  100010: {
    name: "VeChain Testnet",
    chain: "VeChain",
    network: "test",
    rpc: ["https://testnet.veblocks.net/"],
    faucets: ["https://faucet.vecha.in"],
    nativeCurrency: {
      name: "VeChain",
      symbol: "VET",
      decimals: 18,
    },
    infoURL: "https://vechain.org",
    shortName: "vechain-testnet",
    chainId: 100010,
    networkId: 100010,
    explorers: [
      {
        name: "VeChain Explorer",
        url: "https://explore-testnet.vechain.org",
        standard: "none",
      },
    ],
    vtho: "0x0000000000000000000000000000456E65726779",
    trader: "0x0317B19b8b94aE1D5Bfb4727b9064fe8118aA305",
    getAccountSwapsEndpoint: "https://getaccountswaps-3co32ksh6a-uc.a.run.app",
    getAccountStatsEndpoint: "https://getaccountstats-3co32ksh6a-uc.a.run.app",
    getTradeForecastEndpoint:
      "https://gettradeforecast-3co32ksh6a-uc.a.run.app",
  },
  100011: {
    name: "VeChain Testnet",
    chain: "VeChain",
    network: "test",
    rpc: ["https://testnet.veblocks.net/"],
    faucets: ["https://faucet.vecha.in"],
    nativeCurrency: {
      name: "VeChain",
      symbol: "VET",
      decimals: 18,
    },
    infoURL: "https://vechain.org",
    shortName: "vechain-testnet",
    chainId: 100010,
    networkId: 100010,
    explorers: [
      {
        name: "VeChain Explorer",
        url: "https://explore-testnet.vechain.org",
        standard: "none",
      },
    ],
    vtho: "0x0000000000000000000000000000456E65726779",
    trader: "0x0317B19b8b94aE1D5Bfb4727b9064fe8118aA305",
    getAccountSwapsEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/getaccountswaps",
    getAccountStatsEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/getaccountstats",
    getTradeForecastEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/gettradeforecast",
  },
};

export function getChainData(chainId: ChainId): ChainData {
  return CHAINS[chainId]
}
