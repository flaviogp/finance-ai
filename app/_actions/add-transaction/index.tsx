"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCatergory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface UpsertTransactionProps {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCatergory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionProps) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...params, userId },
    create: { ...params, userId },
  });

  revalidatePath("/transactions");
};
