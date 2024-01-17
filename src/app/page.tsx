import { SendTransaction } from "~/app/_components/SendTransaction";
import { Balance } from "./_components/Balance";
import { MintButton } from "./_components/MintButton";

export default async function Home() {
  const account = "0x4840cEe577B56620Ac93e2CFa15d3681afe181E3";
  const value = 10n ** 18n;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-20 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Balance />
      <MintButton account={account} value={value} />
      <SendTransaction />
    </main>
  );
}
