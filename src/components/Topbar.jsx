"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useThemeMode } from "@/app/context/ThemeContext";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function Topbar({
  toggleSidebar,
  sidebarWidth,
  scrollContainerRef,
}) {
  const { isDarkMode, toggleDarkMode } = useThemeMode();
  const [anchorEl, setAnchorEl] = useState(null);
  const isSidebarOpen = sidebarWidth === 270;
  const router = useRouter();

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;


    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        bgcolor: (theme) => theme.palette.background.paper,
        boxShadow: "none",
        backdropFilter: "none",
        backgroundImage: "none",
        opacity: 1,
        minHeight: 70,
        width: {
          xs: "100%",
          lg: `calc(100% - ${isSidebarOpen ? 270 : 86}px)`,
        },
        transition: "width 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 70,
          padding: "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{
              color: isDarkMode ? "#fff" : "#000",
              "&:hover": {
                bgcolor: "#ECF2FF",
                color: "#5D87FF",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="search"
            onClick={() => console.log("Search clicked")}
            sx={{
              color: isDarkMode ? "#fff" : "#000",
              "&:hover": {
                bgcolor: "#ECF2FF",
                color: "#5D87FF",
              },
            }}
          >
            <Search sx={{ fontSize: 21 }} />
          </IconButton>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              color: isDarkMode ? "#fff" : "#000",
              "&:hover": {
                bgcolor: "#ECF2FF",
                color: "#5D87FF",
              },
            }}
          >
            {isDarkMode ? <LightMode /> : <DarkMode />}
          </IconButton>
          <IconButton
            onClick={handleProfileClick}
            sx={{
              "&:hover": isDarkMode
                ? {}
                : {
                    bgcolor: "#ECF2FF",
                    color: "#5D87FF",
                  },
            }}
          >
            <Avatar
              alt="Profile"
              src="/me.jpg"
              sx={{ width: 40, height: 40 }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                minWidth: 200,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              },
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
