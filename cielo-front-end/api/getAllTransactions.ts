import { TransactionResult } from "@/types"

export default async function getAllTransactions() : Promise<TransactionResult> {
    const res = await fetch('http://localhost:3001/api/transactions/all')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}