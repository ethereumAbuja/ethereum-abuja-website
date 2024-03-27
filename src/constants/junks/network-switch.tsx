"use client";

import { ChainId, ChainKey } from "@/config/chains";
import React, { FC, Suspense, useCallback, useMemo, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { useSwitchChain, useAccount } from "wagmi";
import { ProviderRpcError, UserRejectedRequestError } from "viem";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Button } from "../ui/button";
import { NetworkIcon } from "../icons/NetworkIcon";
import { useIsMounted } from "@/hooks/useIsMounted";
import Link from "next/link";

type networkSelectProps = {
  selectedNetwork?: ChainId;
  onChange?(chainId: ChainId): void;
};

export default function NetworkSwitch({
  selectedNetwork,
  onChange,
}: networkSelectProps) {
  const { chains, switchChain } = useSwitchChain();
  const { chain } = useAccount();

  const { toast } = useToast();

  const isMounted = useIsMounted();
  const [open, setOpen] = useState(false);

  const onSwitchNetwork = useCallback<NetworkSelectorOnSelectCallback>(
    async (el, close) => {
      console.debug("onSwitchNetwork", el);
      try {
        if (switchChain && chain?.id !== el) {
          await switchChain({ chainId: el });
        }

        if (selectedNetwork !== el && onChange) {
          onChange(el);
        }

        close();
      } catch (e) {
        console.error(`Failed to switch network: ${e}`);
        if (e instanceof UserRejectedRequestError) return;
        if (e instanceof ProviderRpcError) {
          toast({
            variant: "destructive",
            title: "Oops! Something went wrong.",
            description: `${e.message} `,
            action: <ToastAction altText="close">Try again</ToastAction>,
          });
        }
      }
    },
    [chain?.id, onChange, selectedNetwork, switchChain],
  );

  const _networks = () => {
    return Array.from(new Set([...PREFERRED_CHAINID_ORDER]));
  };
  const selected = isMounted
    ? selectedNetwork || (chain?.id as ChainId) || ChainId.ETHEREUM
    : ChainId.ETHEREUM;

  const showAptos = true;
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="secondary">
          <Suspense fallback={null}>
            <NetworkIcon chainId={selected} width={20} height={20} />
            <div className="hidden xl:block">{ChainKey[selected]}</div>
          </Suspense>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput
            testdata-id="network-selector-input"
            placeholder="Search network"
          />
          <CommandEmpty>No network found.</CommandEmpty>
          <CommandGroup>
            {showAptos ? (
              <Link
                href="https://aptos.sushi.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <CommandItem className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    {/* <AptosCircle width={22} height={22} /> */}
                    Aptos
                    <div className="text-[10px] italic rounded-full px-[6px] bg-gradient-to-r from-blue to-pink text-white font-bold">
                      NEW
                    </div>
                  </div>
                </CommandItem>
              </Link>
            ) : null}
            {PREFERRED_CHAINID_ORDER.map((el) => (
              <CommandItem
                className="cursor-pointer"
                testdata-id={`network-selector-${el}`}
                // value={`${Chain.from(el)?.name}__${el}`}
                value={`${ChainKey[el]}__${el}`}
                key={el}
                onSelect={(value) => onSwitchNetwork(el, () => setOpen(false))}
              >
                <div className="flex items-center gap-2">
                  <NetworkIcon chainId={el} width={22} height={22} />
                  {NEW_CHAINS.includes(el) ? (
                    <>
                      {ChainKey[el]}
                      <div className="text-[10px] italic rounded-full px-[6px] bg-gradient-to-r from-blue to-pink text-white font-bold">
                        NEW
                      </div>
                    </>
                  ) : (
                    ChainKey[el]
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        .
      </PopoverContent>
    </Popover>
  );
}

export type NetworkSelectorOnSelectCallback<T extends number = ChainId> = (
  chainId: T,
  close: () => void,
) => void;

const NEW_CHAINS: number[] = [
  ChainId.BLAST,
  ChainId.ZETACHAIN,
] satisfies ChainId[];

const PREFERRED_CHAINID_ORDER: ChainId[] = [
  ChainId.ETHEREUM,
  ChainId.ARBITRUM,
  ChainId.BASE,
  ChainId.POLYGON,
  ChainId.POLYGON_ZKEVM,
  ChainId.SCROLL,
  ChainId.OPTIMISM,
  ChainId.LINEA,
  ChainId.BLAST,
  ChainId.ZETACHAIN,
  ChainId.FILECOIN,
  ChainId.BSC,
  ChainId.THUNDERCORE,
  ChainId.GNOSIS,
  ChainId.AVALANCHE,
  ChainId.FANTOM,
  ChainId.ARBITRUM_NOVA,
];
