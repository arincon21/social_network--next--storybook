"use client";

import { useSidebar } from "../hooks/use-sidebar";
import { SidebarContainer } from "./sidebar-container";
import { SidebarHeader } from "./sidebar-header";
import { SidebarNav } from "./sidebar-nav";
import { ProfileCompletion } from "./profile-completion";

const SidebarLeft = () => {

  const { collapsed, showLabels, setCollapsed } = useSidebar();

  return (
    <SidebarContainer collapsed={collapsed}>
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
