import styles from "./PromoCard.module.css";

const PromoCard = ({title, text}) => {
  return (
    <div className={`${styles.card} w-full max-w-lg mx-auto p-8 rounded-lg shadow-md bg-pink-200`}>
      <h2 className="text-lg  mb-5">{title}</h2>
      <div className="flex justify-around ">
     <p className="text-sm  mb-3">{text}</p>
      <input type="text" name="Promocode"  className="w-25  bg-amber-50 p-2 border border-gray-300 rounded "/>
 </div>
 <button className="mt-3  bg-gray-500 text-white py-2 rounded ">Apply</button>
 </div>
      
  
  );
};

export default PromoCard