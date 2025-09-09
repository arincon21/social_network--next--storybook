import { ReactNode } from "react";

interface ProfileDropdownProps {
    children: ReactNode;
    isOpen: boolean;
    className?: string;
}

const ProfileDropdown = ({ 
    children, 
    isOpen, 
    className = ""
}: ProfileDropdownProps) => {
    return (
        <div
            className={`origin-top-right absolute right-0 w-64 bg-white rounded-sm shadow-[0_0_34px_0_rgba(63,66,87,0.1)] z-30 transition-opacity ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default ProfileDropdown;
