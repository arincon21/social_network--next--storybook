interface DropdownHeaderProps {
    title: string;
    actions?: Array<{
        label: string;
        onClick: () => void;
    }>;
    className?: string;
}

const DropdownHeader = ({ title, actions = [], className = "" }: DropdownHeaderProps) => {
    return (
        <div className={`flex items-center justify-between px-4 py-3 border-b ${className}`}>
            <div className="text-[9px] text-gray-400 font-semibold">
                {title}
            </div>
            {actions.length > 0 && (
                <div className="flex items-center gap-4">
                    {actions.map((action, index) => (
                        <button 
                            key={index}
                            onClick={action.onClick}
                            className="text-[9px] text-gray-600"
                        >
                            {action.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownHeader;
