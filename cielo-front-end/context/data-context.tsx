"use client"

import React, { createContext, useCallback, useEffect, useState } from "react"
import getAllTransactions from "@/api/getAllTransactions";
import { TransactionResult } from "@/types";

interface DataContextType {
  trns: TransactionResult,
  setModal?: (value: boolean, idPayment?: number) => void,
  open: boolean ,
  idPaymentSel: number,
  setPaymentSel?: (value?: number) => void,
}

const DATA_DEFAULT_VALUES: DataContextType = { trns: [], open: false, idPaymentSel: 0 }

export const DataContext = createContext<DataContextType>(DATA_DEFAULT_VALUES)

export const DataProvider = ({ children }: any) => {
    const [data, setData] = useState<TransactionResult>([]);
    const [open, setOpen] = useState(false)
    const [idPaymentSel, setIdPayment] = useState<number>(0);

    const getTransactions = useCallback(async () => {
      const res : any = await getAllTransactions()
      
      setData(res)
    },[])

    const setModal = useCallback((value: boolean) => {
      setOpen(value)
    }, [])

    const setPaymentSel = useCallback((value: number) => {
      setIdPayment(value)
    }, [])

    useEffect(() => {
      getTransactions()
    }, []);
  
    const contextValues: any = { trns : data, setModal, open, idPaymentSel, setPaymentSel }


    return <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>;
}


