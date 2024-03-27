import { ChainId } from "@/config/chains";

import { IconComponent } from "@/lib/types";
import { ArbitrumNaked } from "./ArbitrumNaked";
import { AvalancheNaked } from "./AvalancheNaked";
import { BaseNaked } from "./BaseNaked";
import { BinanceNaked } from "./BinanceNaked";
import { BlastNaked } from "./BlastNaked";
import { EthereumNaked } from "./EthereumNaked";
import { FantomNaked } from "./FantomNaked";
import { FilecoinNaked } from "./FilecoinNaked";
import { KavaNaked } from "./KavaNaked";
import { LineaNaked } from "./LineaNaked";
import { MetisNaked } from "./MetisNaked";
import { MoonbeamNaked } from "./MoonbeamNaked";
import { MoonriverNaked } from "./MoonriverNaked";
import { OkexNaked } from "./OkexNaked";
import { OptimismNaked } from "./OptimismNaked";
import { PalmNaked } from "./PalmNaked";
import { PolygonNaked } from "./PolygonNaked";
import { PolygonZKNaked } from "./PolygonZKNaked";
import { ScrollNaked } from "./ScrollNaked";
import { TelosNaked } from "./TelosNaked";
import { ThunderCoreNaked } from "./ThunderCoreNaked";
import { ZetaChainNaked } from "./ZetaChainNaked";

export * from "./ArbitrumNaked";
export * from "./AvalancheNaked";
export * from "./BaseNaked";
export * from "./BinanceNaked";
export * from "./BlastNaked";
export * from "./EthereumNaked";
export * from "./FantomNaked";
export * from "./FilecoinNaked";
export * from "./KavaNaked";
export * from "./LineaNaked";
export * from "./MetisNaked";
export * from "./MoonbeamNaked";
export * from "./MoonriverNaked";
export * from "./OkexNaked";
export * from "./OptimismNaked";
export * from "./PalmNaked";
export * from "./PolygonNaked";
export * from "./PolygonZKNaked";
export * from "./ScrollNaked";
export * from "./TelosNaked";
export * from "./ZetaChainNaked";

export const NETWORK_NAKED_ICON: Record<number, IconComponent> = {
  [ChainId.ETHEREUM]: EthereumNaked,
  [ChainId.FANTOM]: FantomNaked,
  [ChainId.POLYGON]: PolygonNaked,
  [ChainId.BSC]: BinanceNaked,
  [ChainId.ARBITRUM]: ArbitrumNaked,
  [ChainId.AVALANCHE]: AvalancheNaked,
  [ChainId.MOONRIVER]: MoonriverNaked,
  [ChainId.TELOS]: TelosNaked,
  [ChainId.MOONBEAM]: MoonbeamNaked,
  [ChainId.OPTIMISM]: OptimismNaked,
  [ChainId.KAVA]: KavaNaked,
  [ChainId.METIS]: MetisNaked,
  [ChainId.OKEX]: OkexNaked,
  [ChainId.PALM]: PalmNaked,
  [ChainId.POLYGON_ZKEVM]: PolygonZKNaked,
  [ChainId.THUNDERCORE]: ThunderCoreNaked,
  [ChainId.ZKSYNC_ERA]: EthereumNaked,
  [ChainId.LINEA]: LineaNaked,
  [ChainId.BASE]: BaseNaked,
  [ChainId.SCROLL]: ScrollNaked,
  [ChainId.FILECOIN]: FilecoinNaked,
  [ChainId.ZETACHAIN]: ZetaChainNaked,
  [ChainId.BLAST]: BlastNaked,
};
