'use server'

import { db } from "@/app/_lib/prisma"
import { DeletetransactionSchema } from "./schema"
import { revalidatePath } from "next/cache"



export const deletetransaction = async({transactionId}: DeletetransactionSchema) => {
    await db.transaction.delete({
        where: {
            id: transactionId
        }
    })

    revalidatePath('/')
    revalidatePath('/transactions')

}