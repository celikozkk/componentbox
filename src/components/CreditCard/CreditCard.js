import React from "react";
import CardInput from "../CardInput/CardInput";

export default function CreditCard({ cardNumber, pattern }) {
  return (
    <div className="w-fit aspect-credit-card bg-red-600 p-3 mx-auto">
      <CardInput
        size={cardNumber.length}
        cardNumber={cardNumber}
        pattern={pattern}
      />
    </div>
  );
}
