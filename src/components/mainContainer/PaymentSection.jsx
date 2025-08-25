import PaymentMethodeCard from "../paymentMethods/PaymentMethodeCard";
import { PaymentData } from "../data/data";
import { PromoCode } from "../data/promodata";
import PromoCard from "../promoCard/PromoCard";

const PaymentSection = () => {
  return (
    <div className="max-w-md max-auto p-6 flex flex-col gap-4 ">
      <h1 className="mb -6">Select Payment Method</h1>

      {PaymentData.map((item) => (
        <PaymentMethodeCard
          key={item.id}
          title={item.title}
          image={item.image}
        />
      ))}
      <PromoCard
        title={PromoCode.title}
        text={PromoCode.text}
        input={PromoCode.input}
      />


    <h3>Subtotal: $810 </h3>
<div>
    <button className="border rounded w-21 bg-red-400 ">Continue</button>
</div>
    </div>

  );
};

export default PaymentSection;
