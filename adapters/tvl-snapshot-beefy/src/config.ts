export const BEEFY_VAULT_API = "https://api.beefy.finance/vaults";

// subgraph source: https://github.com/beefyfinance/l2-lxp-liquidity-subgraph
export const BEEFY_SUBGRAPH_URL =
  "https://api.goldsky.com/api/public/project_clu2walwem1qm01w40v3yhw1f/subgraphs/beefyfinance/l2-lxp-liquidity-mode/gn";
//export const BEEFY_SUBGRAPH_URL =
//  "https://api.0xgraph.xyz/subgraphs/name/beefyfinance/l2-lxp-liquidity-mode";

export const SUBGRAPH_PAGE_SIZE = 1000;

export const RPC_URLS = (
  process.env.RPC_URLS ??
  "https://mainnet.mode.network,https://mainnet.mode.network"
).split(",");
