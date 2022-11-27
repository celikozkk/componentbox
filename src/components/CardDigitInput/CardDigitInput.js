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
        className="w-8 h-8 text-center border border-gray-300 rounded-md" 
      />
    </div>
  );
}