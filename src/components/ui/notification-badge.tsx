interface NotificationBadgeProps {
    count: number | string;
    color?: 'green' | 'purple' | 'red' | 'blue';
    className?: string;
}

const NotificationBadge = ({ count, color = 'red', className = "" }: NotificationBadgeProps) => {
    const colorClasses = {
        green: 'bg-[#2ecc71]',
        purple: 'bg-[#7f5af0]',
        red: 'bg-[#ff6b6b]',
        blue: 'bg-sky-400'
    };

    return (
        <span className={`absolute -top-1 -right-1 ${colorClasses[color]} text-[10px] text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold ${className}`}>
            {count}
        </span>
    );
};

export default NotificationBadge;
