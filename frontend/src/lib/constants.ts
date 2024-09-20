import { zeroAddress } from "viem";
import { gnosis, mainnet } from "viem/chains";

export const COINMARKETCAP_IDS: Record<string, number> = {
  usdc: 3408,
  usdt: 825,
  eth: 1027,
  weth: 2396,
  xDai: 5601,
};

export const supportedcoins: Record<string, any> = {
  xdai: {
    name: "xDAI Stablecoin",
    symbol: "xDAI",
    image: "/coins/xdai.png",
  },
  wxdai: {
    name: "Wrapped xDAI",
    symbol: "WXDAI",
    image: "/coins/wxdai.png",
  },
  gnosis: {
    name: "Gnosis Chain",
    symbol: "GNO",
    image: "/coins/gnosis.png",
  },
  eth: {
    name: "Ethereum",
    symbol: "ETH",
    image: "/coins/eth.png",
  },

  weth: {
    name: "Wrapped Ethereum",
    symbol: "WETH",
    image: "/coins/weth.png",
  },

  usdc: {
    name: "USD Stablecoin",
    symbol: "USDC",
    image: "/coins/usdc.png",
  },
  usdt: {
    name: "Tether USD",
    symbol: "USDT",
    image: "/coins/usdt.png",
  },
};

export const supportedchains: Record<string, any> = {
  [gnosis.id]: {
    id: 1,
    name: "Gnosis Chain",
    chainId: gnosis.id,
    symbol: "xDAI",
    image: "/coins/gnosis.png",
    poolFactory: "0xBbF4E51Cfa0f681a4eBBC5E800b4f53507B00A5B",
    explorer: "https://gnosisscan.io/",
    tokens: {
      xdai: zeroAddress,
      wxdai: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d".toLowerCase(),
      weth: "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1",
      usdc: "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
      usdt: "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
      gnosis: "0x9c58bacc331c9aa871afd802db6379a98e80cedb",
    },
  },
  [mainnet.id]: {
    id: 2,
    name: "Ethereum Mainnet",
    chainId: mainnet.id,
    symbol: "ETH",
    image: "/coins/eth.png",
    explorer: "https://etherscan.io",
    tokens: {
      eth: zeroAddress,
      weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      usdc: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      usdt: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
  },
};
