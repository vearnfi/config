/// <reference path="../node_modules/@vechain/connex-types/index.d.ts" />

export type Address = `0x${string}`;

export const chainIds = [100009, 100010, 100011] as const;

export type ChainId = (typeof chainIds)[number];
// ^ 100009 = production, 100010 = staging, 100011 = development

export type DexName = "verocket" | "vexchange";

export type Dex = {
  /** DEX name. */
  name: DexName;
  /** UniV2 router contract address. */
  routerV2: Address;
  /** VVET-VTHO pair contract address. */
  pairVVET_VTHO: Address;
};

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
  vtho: Address;
  /** VVET contract address. */
  vvet: Address;
  /** List of supported DEXs. */
  dexs: Dex[];
  /** Trader contract address. */
  trader: Address;
  /** Register events endpoint. */
  registerEventsEndpoint: string;
  /** Endpoint to fetch latest block number. */
  getHeadEndpoint: string;
  setHeadEndpoint: string;
  getAccountSwapsEndpoint: string;
  getAccountStatsEndpoint: string;
  getTradesForecastEndpoint: string;
};

const mainChain: ChainData = {
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
  vtho: "0x0000000000000000000000000000456E65726779", // token0
  vvet: "0x45429a2255e7248e57fce99e7239aed3f84b7a53", // token1
  dexs: [
    {
      name: "verocket",
      routerV2: "0x576da7124c7bb65a692d95848276367e5a844d95",
      pairVVET_VTHO: "0x29a996b0ebb7a77023d091c9f2ca34646bea6ede",
    },
    {
      name: "vexchange",
      routerV2: "0x6c0a6e1d922e0e63901301573370b932ae20dadb",
      pairVVET_VTHO: "0x0000000000000000000000000000000000000000", // TODO
    },
  ],
  trader: "0x0000000000000000000000000000000000000000", // TODO
  getHeadEndpoint: "https://",
  setHeadEndpoint: "https://",
  registerEventsEndpoint: "https://",
  getAccountSwapsEndpoint: "https://",
  getAccountStatsEndpoint: "https://",
  getTradesForecastEndpoint: "https://",
};

const testChain: ChainData = {
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
  vtho: "0x0000000000000000000000000000456E65726779", // token0
  vvet: "0x86fb5343bbecffc86185c023a2a6ccc76fc0afd8", // token1
  dexs: [
    {
      name: "verocket",
      routerV2: "0x91e42759290239a62ac757cf85bb5b74ace57927",
      pairVVET_VTHO: "0x1e5e9a6540b15a3efa8d4e8fadb82cc8e0e167ca",
    },
    {
      name: "vexchange",
      routerV2: "0x01d6b50b31c18d7f81ede43935cadf79901b0ea0",
      pairVVET_VTHO: "0x0000000000000000000000000000000000000000",
    },
  ],
  trader: "0x5863690936F5B45539638f49d67D27Ab9886d327",
  getHeadEndpoint: "https://gethead-3co32ksh6a-uc.a.run.app",
  setHeadEndpoint: "https://sethead-3co32ksh6a-uc.a.run.app",
  registerEventsEndpoint: "https://registerevents-3co32ksh6a-uc.a.run.app",
  getAccountSwapsEndpoint: "https://getaccountswaps-3co32ksh6a-uc.a.run.app",
  getAccountStatsEndpoint: "https://getaccountstats-3co32ksh6a-uc.a.run.app",
  getTradesForecastEndpoint:
    "https://gettradesforecast-3co32ksh6a-uc.a.run.app",
};

/**
 * @link https://github.com/ethereum-lists/chains
 */
export const chains: Record<ChainId, ChainData> = {
  100009: mainChain,
  100010: testChain,
  100011: {
    ...testChain,
    getHeadEndpoint: "http://127.0.0.1:5001/vefarmdev/us-central1/gethead",
    setHeadEndpoint: "http://127.0.0.1:5001/vefarmdev/us-central1/sethead",
    registerEventsEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/registerevents",
    getAccountSwapsEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/getaccountswaps",
    getAccountStatsEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/getaccountstats",
    getTradesForecastEndpoint:
      "http://127.0.0.1:5001/vefarmdev/us-central1/gettradesforecast",
  },
};

export function getChainData(chainId: ChainId): ChainData {
  return chains[chainId];
}
