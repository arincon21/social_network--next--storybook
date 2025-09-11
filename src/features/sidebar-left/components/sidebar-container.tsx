interface SidebarContainerProps {
  collapsed: boolean;
  children: React.ReactNode;
}

export const SidebarContainer = ({ collapsed, children } : SidebarContainerProps) => {
  return (
    <aside className={`fixed top-0 left-0 z-20 h-full bg-white shadow-[0_0_34px_0_rgba(63,66,87,0.1)] transition-all duration-300 ease-in-out ${collapsed ? "w-[70px]" : "w-[320px]"}`} >
      {children}
    </aside>
  );
};
