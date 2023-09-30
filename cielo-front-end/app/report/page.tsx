'use client'

import React from 'react'
import { TransactionTable } from './components/transactionTable'
import { DataContext } from '@/context/data-context'
import Modal from '@/components/modal'

export default function ReportPage() {
  const {trns} = React.useContext(DataContext)
      
  if (!trns[0]) {
      return <div>Loading...</div>
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between mt-10">
        <TransactionTable items={trns[0].items} />
        <Modal items={trns[0].items}/>
    </div>
  )
}
