"use client";

import { useState, useEffect } from "react";

export function useSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sidebar-collapsed");
      if (saved !== null) {
        setCollapsed(saved === "true");
      }
    } catch {
      // ignore (e.g., privacy mode)
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sidebar-collapsed", String(collapsed));
    } catch {
      // ignore
    }

    if (!collapsed) {
      const t = setTimeout(() => setShowLabels(true), 320);
      return () => clearTimeout(t);
    }
    setShowLabels(false);
    return undefined;
  }, [collapsed]);

  return { collapsed, showLabels, setCollapsed };
}
