interface NavbarLogoProps {
    title: string;
    className?: string;
}

const NavbarLogo = ({ title, className = "" }: NavbarLogoProps) => {
    return (
        <div className={`text-white font-bold tracking-wider text-xl ${className}`}>
            {title}
        </div>
    );
};

export default NavbarLogo;
