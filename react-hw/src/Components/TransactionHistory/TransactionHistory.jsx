import s from './TransactionHistory.module.css'

function TransactionHistory({transactions}) {
    return <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {transactions.map(item => (
            <tr key={item.id}> 
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      
    </tbody>
  </table>
}
export default TransactionHistory