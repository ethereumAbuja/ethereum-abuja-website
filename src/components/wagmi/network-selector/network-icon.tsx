import React, { FC, useMemo } from "react";

import { IconProps } from "@/lib/types";
import { NETWORK_CIRCLE_ICON } from "./circled-icons";

interface Props extends IconProps {
  chainId: number;
}

export const NetworkIcon: FC<Props> = ({ chainId, ...props }) => {
  const Icon = useMemo(() => {
    return NETWORK_CIRCLE_ICON[chainId];
  }, [chainId]);

  if (Icon) return <Icon {...props} />;
  return <></>;
};
