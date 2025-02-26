import React from "react";
import { motion } from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  return (
    <motion.div className={className || ""} whileTap={{ scale: 0.995 }}>
      <input
        {...props}
        className="p-2 border border-primary-900 rounded-md w-full transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
      />
    </motion.div>
  );
}

export default Input;
