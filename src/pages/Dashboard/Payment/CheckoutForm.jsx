import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import "./CheckoutForm.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, course }) => {
  console.log(course);

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
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
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        paymentEmail: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        classId: course.classId,
        enrolledId: course._id,
        name: course.name,
        image: course.image,
        price: course.price,
        instructorName: course.instructorName,
        payment: true,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Payment Successful",
            text: `TransactionId: ${paymentIntent.id}`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/history");
        }
      });
    }
  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
