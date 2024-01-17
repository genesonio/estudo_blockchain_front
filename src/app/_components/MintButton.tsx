"use client";

import { HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { useMint } from "~/hooks/useCoin";

type MintButtonProps = {
  account: `0x${string}`;
  value: bigint;
} & HTMLAttributes<HTMLButtonElement>;

export const MintButton = ({ account, value, ...props }: MintButtonProps) => {
  const mint = useMint();
  const handleClick = () => {
    mint({ account, value });
  };
  return (
    <Button {...props} onClick={handleClick}>
      Mint
    </Button>
  );
};
