// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, cutAmount} = props
  const {value} = details

  const debitAmount = () => {
    cutAmount(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={debitAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
