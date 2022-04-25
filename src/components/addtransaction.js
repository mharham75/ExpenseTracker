import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Addtransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const { addTransaction } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log('cieckd  ' + text + " " + amount)
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

  return (
    <>
        <h3>Add new transaction</h3>

        <form id="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" value={text} placeholder="Enter text..." onChange={ (e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                >
                <input type="number" id="amount" value={amount} placeholder="Enter amount..." onChange={ (e) => setAmount(e.target.value)}/>
            </div>
            <button className="btn" onClick={ () => console.log('in button')}>Add transaction</button>
        </form>
    </>
  )
}
