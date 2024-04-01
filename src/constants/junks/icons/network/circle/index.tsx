import { ChainId } from "@/config/chains";

import { IconComponent } from "@/lib/types";
import { ArbitrumCircle } from "./ArbitrumCircle";
import { AvalancheCircle } from "./AvalancheCircle";
import { BaseCircle } from "./BaseCircle";
import { BinanceCircle } from "./BinanceCircle";
import { CeloCircle } from "./CeloCircle";
import { EthereumCircle } from "./EthereumCircle";
import { FantomCircle } from "./FantomCircle";
import { FilecoinCircle } from "./FilecoinCircle";
import { LineaCircle } from "./LineaCircle";
import { MetisCircle } from "./MetisCircle";
import { OkexCircle } from "./OkexCircle";
import { OptimismCircle } from "./OptimismCircle";
import { PolygonCircle } from "./PolygonCircle";
import { PolygonZKCircle } from "./PolygonZKCircle";
import { ScrollCircle } from "./ScrollCircle";
import { ZetaChainCircle } from "./ZetaChainCircle";

export * from "./ArbitrumCircle";
export * from "./AvalancheCircle";
export * from "./BaseCircle";
export * from "./BinanceCircle";
export * from "./CeloCircle";
export * from "./EthereumCircle";
export * from "./FantomCircle";
export * from "./FilecoinCircle";
export * from "./LineaCircle";
export * from "./MetisCircle";
export * from "./OkexCircle";
export * from "./OptimismCircle";
export * from "./PolygonCircle";
export * from "./PolygonZKCircle";
export * from "./ScrollCircle";
export * from "./ZetaChainCircle";

export const NETWORK_CIRCLE_ICON: Record<number, IconComponent> = {
  [ChainId.ETHEREUM]: EthereumCircle,
  [ChainId.FANTOM]: FantomCircle,
  [ChainId.POLYGON]: PolygonCircle,
  [ChainId.BSC]: BinanceCircle,
  [ChainId.ARBITRUM]: ArbitrumCircle,
  [ChainId.AVALANCHE]: AvalancheCircle,
  [ChainId.CELO]: CeloCircle,
  [ChainId.OPTIMISM]: OptimismCircle,
  [ChainId.METIS]: MetisCircle,
  [ChainId.OKEX]: OkexCircle,
  [ChainId.POLYGON_ZKEVM]: PolygonZKCircle,
  [ChainId.ZKSYNC_ERA]: EthereumCircle,
  [ChainId.LINEA]: LineaCircle,
  [ChainId.BASE]: BaseCircle,
  [ChainId.SCROLL]: ScrollCircle,
  [ChainId.FILECOIN]: FilecoinCircle,
  [ChainId.ZETACHAIN]: ZetaChainCircle,
};
