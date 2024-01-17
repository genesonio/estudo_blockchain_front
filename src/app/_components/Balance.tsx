"use client";

import { useReadBalance } from "~/hooks/useCoin";

export const Balance = () => {
  const id = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266" as const;
  const { data } = useReadBalance({ account: id });

  return (
    <>
      {data && (
        <div>
          <h2>Balance</h2>
          <p>{parseInt(data.toString()) / 10 ** 18}</p>
        </div>
      )}
    </>
  );
};
