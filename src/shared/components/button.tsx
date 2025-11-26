'use client'

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'facebook' | 'twitter' | 'purple';
    size?: 'md' | 'lg';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
}

const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled = false, className = '' }: ButtonProps) => {
    const baseClasses = 'rounded-[5px] font-medium transition-colors cursor-pointer flex justify-center items-center px-[30px] relative overflow-hidden';
    const variantClasses = {
        primary: 'bg-[#ff5e3a] text-white hover:bg-[#ff763a] border border-[#ff5e3a] hover:border-[#ff763a]',
        secondary: 'text-[#888da8] hover:opacity-80 border border-[#d8dbe6]',
        facebook: 'bg-[#3b5998] text-white hover:bg-[#344e86] border border-[#3b5998]',
        twitter: 'bg-[#55acee] text-white hover:bg-[#4c9ad6] border border-[#55acee]',
        purple: 'bg-[#7c5ac2] text-white hover:bg-[#6b4c9a] border border-[#7c5ac2]',
    };
    const sizeClasses = {
        md: 'text-xs h-[38px]',
        lg: 'h-[48px]'
    };

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;

        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();
        const circle = document.createElement("span");
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add("ripple");

        // Apply variant-specific ripple color
        if (variant === 'secondary') {
            circle.style.backgroundColor = 'rgba(136, 141, 168, 0.2)';
        }

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);

        if (onClick) {
            onClick(event);
        }
    }

    return (
        <button
            onClick={createRipple}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
