import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cart, price }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("error", error);
    } else {
      setCardError("");
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "Anonymous",
            email: user?.email || "Not Found",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const paymentInfo = {
        status: "Service Pending",
        transactionId: paymentIntent.id,
        email: user?.email,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.itemId),
        itemNames: cart.map((item) => item.name),
        price,
      };
      axiosSecure.post("/payments", paymentInfo).then((res) => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Completed",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-base-200 p-8 w-4/5 mx-auto rounded"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn bg-[#D1A054] text-white btn-sm border-0 mt-4"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 text-center">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 text-center">
          Payment Successfull with Transaction Id: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
