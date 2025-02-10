import React from "react";

interface InputProps {
  className?: string;
}

function Input({ className }: InputProps) {
  return (
    <div className={className || ""}>
      <input
        type="text"
        placeholder="First Name"
        className="p-2 border border-primary-900 rounded-md w-full"
      />
    </div>
  );
}

export default Input;
