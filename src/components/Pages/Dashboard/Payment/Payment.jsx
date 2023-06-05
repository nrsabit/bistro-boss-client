import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTytle from "../../../Shared/SectionTytle/SectionTytle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-4/5 mx-auto">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTytle
        subHeading="Please Process"
        heading="Payment"
      ></SectionTytle>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
