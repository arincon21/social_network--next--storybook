'use client'

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'md' | 'lg';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled = false }: ButtonProps) => {
    const baseClasses = 'rounded-[5px] font-medium transition-colors cursor-pointer flex justify-center items-center px-[30px] relative overflow-hidden';
    const variantClasses = {
        primary: 'bg-[#ff5e3a] text-white hover:bg-[#ff763a] border border-[#ff5e3a] hover:border-[#ff763a]',
        secondary: 'text-[#888da8] hover:opacity-80 border border-[#d8dbe6]',
    };
    const sizeClasses = {
        md: 'text-xs h-[38px]',
        lg: 'h-[48px]'
    };

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;

        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

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
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            { children }
        </button>
    );
};

export default Button;
