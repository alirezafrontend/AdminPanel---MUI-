"use client";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [sidebarWidth, setSidebarWidth] = useState(270);
  const pathname = usePathname();

  const toggleSidebar = () => {
    const newWidth = sidebarWidth === 270 ? 86 : 270;
    console.log("Toggling sidebar, new width:", newWidth);
    setSidebarWidth(newWidth);
  };

  const closeSidebar = () => {
    if (sidebarWidth === 270) {
      console.log("Closing sidebar");
      setSidebarWidth(86);
    }
  };

  useEffect(() => {
    console.log(
      "AdminLayout: sidebarWidth:",
      sidebarWidth,
      "pathname:",
      pathname
    );
  }, [sidebarWidth, pathname]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      <Topbar toggleSidebar={toggleSidebar} sidebarWidth={sidebarWidth} />
      <Sidebar
        sidebarWidth={sidebarWidth}
        closeSidebar={closeSidebar}
        toggleSidebar={toggleSidebar}
      />

      {sidebarWidth === 270 && (
        <Box
          onClick={closeSidebar}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.2)",
            zIndex: (theme) => theme.zIndex.drawer + 10,
            display: { xs: "block", lg: "none" },
          }}
        />
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          mt: "70px",
          height: "calc(100vh - 70px)",
          width: {
            xs: "100%",
            lg: `calc(100% - ${sidebarWidth}px)`,
          },
          overflowY: "auto",
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
