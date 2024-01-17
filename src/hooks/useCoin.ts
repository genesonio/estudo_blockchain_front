import { useReadContract, useWriteContract } from "wagmi";
import { abi } from "~/lib/Coin.sol/Lhama.json";

const baseConfig = {
  abi,
  address: "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9",
} as const;

export const useReadBalance = ({ account }: { account: `0x${string}` }) =>
  useReadContract({
    ...baseConfig,
    functionName: "balanceOf",
    args: [account],
  });

export const useMint = () => {
  const { writeContract } = useWriteContract();
  return ({ account, value }: { account: `0x${string}`; value: BigInt }) =>
    writeContract({
      abi,
      address: "0x5c2235342754322865d45B75aa1A4e8EdC5d8AF9",
      functionName: "mint",
      args: [account, value],
    });
};
