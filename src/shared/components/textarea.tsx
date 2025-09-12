import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full p-0 border-none resize-none text-gray-600 placeholder-gray-400 focus:outline-none text-lg ${className}`}
      {...props}
    />
  );
};

export default Textarea;
