"use client";

import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSendTransaction } from "wagmi";

const formSchema = z.object({
  address: z.string().min(1, { message: "address is required" }),
  amount: z.number().nonnegative("Amount can't be negative"),
});

export const SendTransaction = () => {
  const { data: hash, sendTransaction } = useSendTransaction();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      amount: 0,
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const amount = form.getValues("amount");
    const to = form.getValues("address") as `0x${string}`;
    const value = BigInt(amount) * 10n ** 18n;

    sendTransaction({ to, value });
  };

  return (
    <Form {...form}>
      <form
        className="flex w-[400px] flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>address</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  id="address"
                  placeholder="A0CAE...23e"
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>amount</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  type="number"
                  id="amount"
                  placeholder="0.08"
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="mx-auto w-fit bg-gray-100 px-8 text-black"
          type="submit"
        >
          Enviar
        </Button>
        {typeof hash !== "undefined" && <p>{hash}</p>}
      </form>
    </Form>
  );
};
