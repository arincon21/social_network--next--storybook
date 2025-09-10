import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  className?: string;
};

const Input = ({ icon, className = "", ...rest }: InputProps) => {
  return (
    <div className={`relative ${className}`}>
      <input className="w-full h-10 px-3 rounded-md border border-[#e6e8f2] text-sm text-[#4b4f66] focus:outline-none focus:ring-2 focus:ring-[#d9ccff]" {...rest} />
      {icon && <span className="absolute inset-y-0 right-3 flex items-center text-[#8f92a3]">{icon}</span>}
    </div>
  );
};

export default Input;
