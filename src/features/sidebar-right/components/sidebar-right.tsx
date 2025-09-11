"use client";

import React, { useEffect, useState } from "react";
import SidebarContainer from "./sidebar-container";
import { sampleSections } from "../constants/sidebar-right";

const SidebarRight = () => {
  // Initialize with a default value that matches the server render.
  const [collapsed, setCollapsed] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // After the component mounts on the client, we can safely access localStorage.
  useEffect(() => {
    setIsMounted(true);
    try {
      const item = window.localStorage.getItem('sidebar-right-collapsed');
      if (item !== null) {
        setCollapsed(JSON.parse(item));
      }
    } catch (error) {
      console.error("Failed to read from localStorage", error);
    }
  }, []);

  // Persist state changes to localStorage on the client.
  useEffect(() => {
    if (isMounted) {
      window.localStorage.setItem('sidebar-right-collapsed', JSON.stringify(collapsed));
    }
  }, [collapsed, isMounted]);

  useEffect(() => {
    if (!collapsed) {
      const t = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(t);
    }
    setShowContent(false);
  }, [collapsed]);

  return (
    <SidebarContainer
      collapsed={collapsed}
      showContent={showContent}
      sections={sampleSections}
      onCollapse={(v) => setCollapsed(v)}
      onToggleExpand={() => setCollapsed(false)}
    />
  );
};

export default SidebarRight;
