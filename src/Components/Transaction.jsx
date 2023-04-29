import React, { useEffect, useState } from "react";

function Transaction(){

    const [transaction, setTransaction] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then(res => res.json())
        .then(data => setTransaction(data))
    }, [])
    console.log(transaction);
return(
    <>
    <section className="transaction-container">
        <div className="transaction-search">
        
            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" placeholder="Search for transactions"/>
            
        </div>
        <div className="transaction-table">
            <div className="transaction-table-header">
                <h3>Transactions</h3>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                        {
                           transaction && transaction.map(item => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>    
                                    <td>{item.category}</td>    
                                    <td>{item.amount}</td>
                                </tr>
                            )
                            })
                        }
                </tbody>
            </table>
        </div>
    </section>
    </>
)
}

export default Transaction;