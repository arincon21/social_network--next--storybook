import Icon from "@/components/ui/icon";

interface SidebarHeaderProps {
  collapsed: boolean;
  showLabels: boolean;
}

export const SidebarHeader = ({ collapsed, showLabels} : SidebarHeaderProps) => {
  return (
    <div className={`h-[70px] flex items-center bg-[#ff5e3a] cursor-pointer group w-full px-3 transition-colors`} >
      <div className="flex items-center justify-center text-center">
        <Icon name="olymp-thunder-icon" className="flex justify-center items-center w-[32px] h-[32px] text-white ml-[8px]" />
      </div>
      <div className={`ml-4 text-[17px] font-semibold transform transition-all duration-200 overflow-hidden whitespace-nowrap text-white ${showLabels ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"}`} >
        OLYMPUS
      </div>
    </div>
  );
};
