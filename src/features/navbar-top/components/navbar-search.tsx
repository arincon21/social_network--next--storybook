import Icon from "@/shared/components/icon";

interface NavbarSearchProps {
    placeholder?: string;
    ariaLabel?: string;
    className?: string;
    onSearch?: (value: string) => void;
}

const NavbarSearch = ({ 
    placeholder = "Busca aquí personas o páginas...", 
    ariaLabel = "Buscar",
    className = "",
    onSearch
}: NavbarSearchProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <div className={`relative w-full max-w-[600px] h-[70px] ${className}`}>
            <input
                aria-label={ariaLabel}
                placeholder={placeholder}
                onChange={handleChange}
                className="w-full h-full bg-[#47495f] text-sm text-gray-200 placeholder:text-gray-400 pl-4 pr-10 outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-300">
                <Icon name="olymp-magnifying-glass-icon" className="w-[25px] h-[25px] text-[#696d87]"/>
            </span>
        </div>
    );
};

export default NavbarSearch;
