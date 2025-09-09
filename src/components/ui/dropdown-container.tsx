import { ReactNode } from "react";

interface DropdownContainerProps {
    children: ReactNode;
    isOpen: boolean;
    className?: string;
    width?: string;
}

const DropdownContainer = ({ 
    children, 
    isOpen, 
    className = "",
    width = "w-[360px]"
}: DropdownContainerProps) => {
    return (
        <div
            className={`origin-top-right absolute right-0 mt-[5px] ${width} bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] overflow-hidden z-40 transition-opacity ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default DropdownContainer;
