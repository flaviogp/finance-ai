import { TransactionCatergory, TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
    [key in TransactionType]: number;
}

export interface TotalExpensePerCategory {
    category: TransactionCatergory
    totalAmount: number
    percentageOfTotal: number
}