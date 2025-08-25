import React from 'react'
import styles from './PaymentMethodeCard.module.css'

const PaymentMethodeCard = ({id, title, image}) => {
  return (
    <div>
      <input className={styles.checkbox} type="checkbox" id={id}/>
      <p className={styles.title}>{title}</p>
        <img className={styles.image} src={image} alt="payment methode" />
    </div>
  )
}

export default PaymentMethodeCard
