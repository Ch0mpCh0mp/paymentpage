import styles from './PaymentMethodeCard.module.css'

const PaymentMethodeCard = ({id, title, image}) => {
  return (
    <div className='py-4 px-6 mb-4 '>
      <div className='bg-pink-200 flex items-center justify-around rounded p-4 '>
      <input className={styles.checkbox} type="checkbox" id={id}/>
      <p className={`${styles.title} mx-4`}>{title}</p>
        <img className={`${styles.image} w-14`} src={image} alt={`${title} payment method`} />
        </div>
    </div>
  )
}

export default PaymentMethodeCard
