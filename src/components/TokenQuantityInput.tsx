"use client";

import { useState, useEffect } from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

interface TokenQuantityInputProps {
  // onChange: (amount: string) => void;
  quantity: string;
  maxValue?: string;
  displayRangeInput?: boolean;
  displayMaxClearButtons?: boolean;
}

export function TokenQuantityInput({
  // onChange,
  quantity,
  maxValue,
  displayRangeInput = true,
  displayMaxClearButtons = true,
}: TokenQuantityInputProps) {
  const [amount, setAmount] = useState("0.00");

  const smallestStep =
    parseFloat(amount) < 1
      ? 1 / Math.pow(10, maxValue?.split(".")[1].length ?? 1)
      : 1;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // only allow numbers and one decimal point
    if (!/^\d*\.?\d*$/.test(e.target.value)) {
      return;
    }
    setAmount(e.target.value);
    // onChange(e.target.value);
  };

  const handleSetMax = () => {
    setAmount(maxValue ?? "0.00");
    // onChange(maxValue ?? "0.00");
  };

  const handleClear = () => {
    setAmount("0.00");
    // onChange("0.00");
  };

  useEffect(() => {
    setAmount(quantity);
  }, [quantity]);

  return (
    <div>
      {/* <Input
        type="text"
        placeholder="0.01"
        value={amount}
        onChange={(e) => handleChange(e)}
      /> */}

      {/* <div
        className={`${
          displayMaxClearButtons ? "flex" : "hidden"
        }  flex-row gap-2 w-full`}
      > */}
      <HStack mt="8px">
        <Button
          onClick={handleSetMax}
          size="xs"
          variant="outline"
          colorScheme="gray"
        >
          Max
        </Button>
        <Button
          onClick={handleClear}
          size="xs"
          variant="outline"
          colorScheme="gray"
        >
          Clear
        </Button>
      </HStack>
      {/* </div> */}
      {/* <Input
        onChange={(e) => handleChange(e)}
        value={amount}
        type="range"
        border={0}
        min={0}
        step={smallestStep}
        max={maxValue ?? 100}
        style={{
          marginTop: "8px",
          display: displayRangeInput ? "block" : "none",
          width: "100%",
          height: "6px",
          borderRadius: "9999px",
          background: "rgba(241, 242, 254, 0.70)",
          outline: "none",
          cursor: "pointer",
        }}
      /> */}
    </div>
  );
}
