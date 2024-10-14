import { useState } from "react";

const rates = {
  "USD": 1.00,
  "EUR": 0.84,
  "GBP": 0.76,
  "INR": 74.83,
  "AUD": 1.31,
  "CAD": 1.28,
  "CHF": 0.92,
  "CNY": 6.45,
  "JPY": 109.23,
  "SGD": 1.35
};

function useCurrencyInfo() {
  return rates;
}

export default useCurrencyInfo;



