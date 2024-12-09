import React from "react";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import NavBar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";
import { getCurrentMonthTransactions } from "../_data/get-current-month-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

const TransactionPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/login");

  const transactions = await db.transaction.findMany({
    where: { userId },
  });

  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        {/* Title & Button  */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <ScrollArea>
          <DataTable columns={transactionColumns} data={transactions} />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionPage;
