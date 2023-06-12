import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const course = useLoaderData();

  const amount = parseFloat(course.price);
  const amountString = amount.toFixed(2);
  const price = parseFloat(amountString);

  return (
    <div className="pt-24">
      <h1 className="text-3xl pl-8 my-text-g">Pay the Amount!</h1>
      <div className="w-[25rem] md:w-[50rem]">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} course={course}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
