import accountStyle from './accounts.module.scss'
import { Icons } from 'elements'

function Accounting() {
  return (
    <div className={accountStyle.main}>
      <div className={accountStyle.accountCard1}>
        <h1>PROFIT & LOSS</h1>
        <div className={accountStyle.profit}>
          <p>+ KES 15,000</p>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>2021</p>
          <h4>- KES 23,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>2020</p>
          <h4>- KES 11,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>2021</p>
          <h4>+ KES 17,000</h4>
        </div>
        <div className={accountStyle.next}>
          <img src={Icons.nextImg} alt="next" />
        </div>
      </div>
      <div className={accountStyle.accountCard2}>
        <h1>CASH FLOW</h1>
        <div className={accountStyle.cashFlow}>
          <div className={accountStyle.cashIn}>
            <p>CASH IN</p>
            <h4>KES 23,000</h4>
          </div>
          <div className={accountStyle.cashOut}>
            <p>CASH OUT</p>
            <h4>KES 13,000</h4>
          </div>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>PIG SALE</p>
          <h4>+ KES 23,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>CALCIUM</p>
          <h4>- KES 23,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>VACCINE</p>
          <h4>+ KES 17,000</h4>
        </div>
        <div className={accountStyle.next}>
          <img src={Icons.nextImg} alt="next" />
        </div>
      </div>

      <div className={accountStyle.accountCard3}>
        <h1>PIGS WORTH</h1>
        <div className={accountStyle.pigWorth}>
          <p> KES 150,000</p>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>JAMES</p>
          <h4>KES 23,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>ESTHER</p>
          <h4>KES 3,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>KELVIN</p>
          <h4>KES 2,500</h4>
        </div>

        <div className={accountStyle.next}>
          <img src={Icons.nextImg} alt="next" />
        </div>
      </div>

      <div className={accountStyle.accountCard4}>
        <h1>CATALOG</h1>
        <div className={accountStyle.catalog}>
          <p>KES 17,000</p>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>VACCINE</p>
          <h4>KES 23,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>TAGS</p>
          <h4>KES 3,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>FEED</p>
          <h4>KES 2,500</h4>
        </div>
        <div className={accountStyle.next}>
          <img src={Icons.nextImg} alt="next" />
        </div>
      </div>

      <div className={accountStyle.accountCard5}>
        <h1>FARM EQUIPMENT</h1>
        <div className={accountStyle.farmEquipment}>
          <p>KES 1,050,000</p>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>TRUCK</p>
          <h4>KES 230,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>HEATER</p>
          <h4>KES 13,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>FANS</p>
          <h4>KES 24,500</h4>
        </div>
        <div className={accountStyle.next}>
          <img src={Icons.nextImg} alt="next" />
        </div>
      </div>

      <div className={accountStyle.accountCard6}>
        <h1>MISCELLANEOUS</h1>
        <div className={accountStyle.miscellaneous}>
          <p>KES -20,000</p>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>SALARY</p>
          <h4>- KES 23,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>DEATH - A001K</p>
          <h4>KES 3,000</h4>
        </div>
        <div className={accountStyle.cardInfo}>
          <p>VET</p>
          <h4>- KES 2,500</h4>
        </div>

        <div className={accountStyle.next}>
          <img src={Icons.nextImg} alt="next" />
        </div>
      </div>
    </div>
  )
}
export default Accounting
