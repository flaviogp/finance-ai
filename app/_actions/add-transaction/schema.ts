import { TransactionCatergory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
    
        name: z.string().trim().min(1, { message: "O nome é obrigatório." }),
        ammount: z.number().positive(),
        type: z.nativeEnum(TransactionType),
        category: z.nativeEnum(TransactionCatergory),
        paymentMethod: z.nativeEnum(TransactionPaymentMethod),
        date: z.date(),
      
})