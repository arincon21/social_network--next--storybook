import { type SidebarItem } from "./sidebar-nav";
import Icon from "@/components/ui/icon";

interface SidebarNavItemProps {
  item: SidebarItem;
  collapsed: boolean;
  showLabels: boolean;
}

export const SidebarNavItem = ({ item, collapsed, showLabels } : SidebarNavItemProps) => {
  return (
    <div
      key={item.key}
      title={collapsed ? item.label : undefined}
      className="cursor-pointer group flex items-center hover:text-[#515365] w-full h-12 px-3 rounded-md text-[#9a9fbf] hover:bg-gray-50 transition-colors"
    >
      <span className="flex items-center justify-center text-center text-[#9A9FBF] group-hover:text-[#ff5e3a] transition-colors">
        <Icon name={item.icon} className="flex justify-center items-center w-[20px] h-[26px] ml-[5px]" />
      </span>
      <span className={`ml-6 text-sm font-medium transform transition-all duration-200 overflow-hidden whitespace-nowrap ${ showLabels ? "opacity-100 max-w-[220px]" : "opacity-0 max-w-0" }`} >
        {item.label}
      </span>
    </div>
  );
};
