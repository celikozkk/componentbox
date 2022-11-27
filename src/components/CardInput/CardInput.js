import React from "react";
import CardDigitInput from "../CardDigitInput/CardDigitInput";

// pattern might be 4-4-4-4 for 16 digits
export default function CardInput({ size, cardNumber, pattern }) {
  const [value, setValue] = React.useState(cardNumber.slice(0, size));

  const handleDigitChange = (val, index) => {
    const newValue = [...value];
    newValue[+index] = val;
    setValue(newValue.join(""));

    // focus next input
    const nextInput = document.querySelector(`[data-index="${+index + 1}"]`);
    if (nextInput) {
      // @ts-ignore
      nextInput.focus();
    } else {
      // blur if last input
      const lastInput = document.querySelector(
        `[data-index="${+index}"]`
      );
      // @ts-ignore
      lastInput.blur();
    }
  };

  const splitCardNumberToPattern = () => {
    const patternArray = pattern.split("-");
    let cardNumberArray = value.split("");

    if (cardNumberArray.length < size) {
      cardNumberArray = [...cardNumberArray, ...Array(size - cardNumberArray.length).fill("")];
    }

    let result = [];
    let index = 0;
    for (let i = 0; i < patternArray.length; i++) {
      let patternNumber = parseInt(patternArray[i]);
      result.push(cardNumberArray.slice(index, index + patternNumber));
      index += patternNumber;
    }
    return result;
  };

  return (
    <div className="flex gap-5">
      {splitCardNumberToPattern().map((item, index, arr) => {
        const previousLength = arr.slice(0, index).reduce((acc, val) => {
          return acc + val.length;
        }, 0);

        return (
          <div key={index} className="flex gap-1">
            {item.map((digit, idx) => (
              <CardDigitInput
                key={idx + previousLength}
                index={idx + previousLength}
                digit={digit || ""}
                onChange={handleDigitChange}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
