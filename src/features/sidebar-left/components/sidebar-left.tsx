"use client";

import { useSidebar } from "../hooks/use-sidebar";
import { SidebarContainer } from "./sidebar-container";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav } from "./sidebar-nav";
import { ProfileCompletion } from "./profile-completion";
import { useClickOutside } from "@/shared/hooks/use-click-outside";

const SidebarLeft = () => {

  const { collapsed, showLabels, setCollapsed } = useSidebar();
  const ref = useClickOutside<HTMLElement>(() => {
    if (!collapsed) {
      setCollapsed(true);
    }
  });

  return (
    <SidebarContainer collapsed={collapsed} ref={ref}>
      <SidebarHeader collapsed={collapsed} showLabels={showLabels} />
      <SidebarNav
        collapsed={collapsed}
        showLabels={showLabels}
        onToggle={() => setCollapsed((show) => !show)}
      />
      <ProfileCompletion collapsed={collapsed} showLabels={showLabels} />
    </SidebarContainer>
  );
};

export default SidebarLeft;
