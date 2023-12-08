// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {debit: 2000}

  reduceAmount = value => {
    const {debit} = this.state
    const remaining = debit - value
    this.setState({debit: remaining})
  }

  render() {
    const {denominationsList} = this.props
    const {debit} = this.state
    console.log(denominationsList)
    return (
      <div className="bg-container">
        <div className="profile">
          <p className="round-profile">S</p>
          <h1 className="user-name">Search Williams</h1>
        </div>
        <div className="balance-section">
          <p className="your-balance">Your Balance</p>
          <div className="rupees-section">
            <p className="money">{debit}</p>
            <p className="in-rupees">In Rupees</p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choosing">CHOOSE SUM (IN RUPEES)</p>
        <ul className="ul-container">
          {denominationsList.map(each => (
            <DenominationItem
              details={each}
              key={each.id}
              cutAmount={this.reduceAmount}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
