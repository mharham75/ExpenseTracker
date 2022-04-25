import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {

    const { transactions } = useContext(GlobalContext)

    //map to get all the amounts in an array 
    const amounts = transactions.map( transaction => transaction.amount)
    //console.log(amounts)

    //reduce to get the sum of all amounts 
    const total = amounts.reduce( (a,c) => a+c,0).toFixed(2)
    //console.log(total)
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">${total}</h1>
    </>
  )
}
