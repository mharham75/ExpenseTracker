import React, { useContext } from 'react'
//useContext to pull anything out from our global state

import Transaction from './Transaction'

import { GlobalContext } from '../context/GlobalState'

export default function TransactionList() {

  // const context = useContext(GlobalContext)
  // console.log(context)

  const { transactions } = useContext(GlobalContext)

  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
          {transactions.map( transaction => ( <Transaction key={transaction.id} transaction={transaction}/> ))}
          
      </ul>
    </div>
  )
}
