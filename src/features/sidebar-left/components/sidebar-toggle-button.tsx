import Icon from "@/shared/components/icon";

interface SidebarToggleButtonProps {
  collapsed: boolean;
  showLabels: boolean;
  onClick: () => void;
}

export const SidebarToggleButton = ({ collapsed, showLabels, onClick }: SidebarToggleButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-expanded={!collapsed}
      className="cursor-pointer group flex items-center hover:text-[#515365] w-full h-12 px-3 rounded-md text-[#9a9fbf] hover:bg-gray-50 transition-colors"
    >
      <span className="flex items-center justify-center text-center text-[#9A9FBF] group-hover:text-[#ff5e3a] transition-colors">
        <Icon name={collapsed ? "olymp-menu-icon" : "olymp-close-icon"} className="flex justify-center items-center w-[20px] h-[26px] ml-[5px]" />
      </span>
      <span className={`ml-6 text-sm font-semibold transform transition-all duration-200 overflow-hidden whitespace-nowrap ${showLabels ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}`} >
        {showLabels ? "Contraer menú" : ""}
      </span>
    </button>
  );
};
