import React from 'react';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider options={{
      "client-id": import.meta.env.VITE_PAYPAL_APP_ID,
      currency: "USD"
    }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        forceReRender={[amount]}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(), // Ensure string format
                  currency_code: "USD"
                }
              }
            ]
          });
        }}
        onApprove={async (data, actions) => {
          try {
            const details = await actions.order.capture();
            onSuccess(details);
          } catch (error) {
            console.error("Capture failed:", error);
            onError(error);
          }
        }}
        onError={(err) => {
          console.error("PayPal Checkout Error:", err);
          onError(err);
        }}
      />
    </PayPalScriptProvider>
  );
};



export default PayPalButton;

