import React from "react";

export default function CardDigitInput({ index, digit, onChange }) {
  const [value, setValue] = React.useState(digit);

  const handleKeyDown = (e) => {
    // allow only if it is a number
    if (e.key.match(/^[0-9]$/)) {
      setValue(e.key);
      onChange(e.key, e.target.dataset.index);
    }
  }

  return (
    <div>
      <input
        aria-label="card digit input" 
        type="text" 
        data-index={index}
        maxLength={1} 
        value={value}
        onChange={() => {}}
        onKeyDown={handleKeyDown}
        onFocus={(e) => {
          setTimeout(() => {
            e.target.select();
          });;
        }}
        className={[
          "text-center", 
          // "border", 
          // "border-gray-300", 
          // "rounded-md", 
          "w-4 h-4 text-lg", // mobile
          "sm:w-6 sm:h-6 sm:text-2xl", // tablet
        ].join(' ')} />
    </div>
  );
}