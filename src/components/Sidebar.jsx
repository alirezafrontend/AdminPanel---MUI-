"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Dashboard } from "@mui/icons-material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CollectionsIcon from "@mui/icons-material/Collections";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import Image from "next/image";
import { useThemeMode } from "@/app/context/ThemeContext";
import { useEffect, useState } from "react";

const ThreeDots = () => <>···</>;

export default function Sidebar({ sidebarWidth, closeSidebar, toggleSidebar }) {
  const pathname = usePathname();
  const isSidebarOpen = sidebarWidth === 270;
  const { isDarkMode } = useThemeMode();

  const [showFooter, setShowFooter] = useState(isSidebarOpen);

  console.log("Sidebar state:", { sidebarWidth, pathname });

  const handleLinkClick = (e, href) => {
    if (window.innerWidth < 1200 && isSidebarOpen) {
      console.log("Closing sidebar on mobile click, href:", href);
      e.stopPropagation();
      closeSidebar();
    }
    console.log("Link clicked:", { href, sidebarWidth });
  };

  useEffect(() => {
    let timeout;
    if (isSidebarOpen) {
      timeout = setTimeout(() => setShowFooter(true), 300); 
    } else {
      setShowFooter(false);
    }
    return () => clearTimeout(timeout);
  }, [isSidebarOpen]);

  return (
    <Box
      className={styles.sidebar}
      sx={{
        position: { xs: "fixed", lg: "relative" },
        width: {
          xs: "270px",
          lg: `${sidebarWidth}px`,
        },
        height: "100vh",
        flexDirection: "column",
        zIndex: (theme) => theme.zIndex.drawer + 11,
        transition: "left 0.3s ease, width 0.3s ease",
        left: {
          xs: isSidebarOpen ? 0 : "-270px",
          lg: 0,
        },
        bgcolor: "background.paper",
        boxShadow: { xs: 3, lg: "none" },
        borderRight: {
          xs: "none",
          lg: `1px solid ${isDarkMode ? "#ffffff12" : "rgba(0,0,0,0.2)"}`,
        },
      }}
    >
      <Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: isSidebarOpen ? "flex-start" : "center",
          }}
        >
          {isSidebarOpen ? (
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          ) : (
            <Image src="/dark-logo.png" width={30} height={25} alt="logo" />
          )}
        </Box>
        <List>
          <ListItem
            sx={{
              px: 2.5,
              fontWeight: 700,
              justifyContent: isSidebarOpen ? "flex-start" : "center",
            }}
          >
            {isSidebarOpen ? "Home" : <ThreeDots />}
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/dashboard"
              onClick={(e) => handleLinkClick(e, "/dashboard")}
              sx={{
                justifyContent: isSidebarOpen ? "flex-start" : "center",
                px: 2.5,
                backgroundColor:
                  pathname === "/dashboard" ? "#5D87FF" : "inherit",
                borderRadius: pathname === "/dashboard" ? "8px" : "0",
                "&:hover": {
                  backgroundColor:
                    pathname === "/dashboard" ? "#5D87FF" : "action.hover",
                  borderRadius: pathname === "/dashboard" ? "8px" : "0",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSidebarOpen ? 2 : 0,
                  justifyContent: "center",
                  color: pathname === "/dashboard" ? "#FFFFFF" : "inherit",
                }}
              >
                <Dashboard />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{
                  display: {
                    xs: "block",
                    lg: isSidebarOpen ? "block" : "none",
                  },
                  color: pathname === "/dashboard" ? "#FFFFFF" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/dashboard/ecommerce"
              onClick={(e) => handleLinkClick(e, "/dashboard/ecommerce")}
              sx={{
                justifyContent: isSidebarOpen ? "flex-start" : "center",
                px: 2.5,
                backgroundColor:
                  pathname === "/dashboard/ecommerce" ? "#5D87FF" : "inherit",
                borderRadius: pathname === "/dashboard/ecommerce" ? "8px" : "0",
                "&:hover": {
                  backgroundColor:
                    pathname === "/dashboard/ecommerce"
                      ? "#5D87FF"
                      : "action.hover",
                  borderRadius:
                    pathname === "/dashboard/ecommerce" ? "8px" : "0",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSidebarOpen ? 2 : 0,
                  justifyContent: "center",
                  color:
                    pathname === "/dashboard/ecommerce" ? "#FFFFFF" : "inherit",
                }}
              >
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="eCommerce"
                sx={{
                  display: {
                    xs: "block",
                    lg: isSidebarOpen ? "block" : "none",
                  },
                  color:
                    pathname === "/dashboard/ecommerce" ? "#FFFFFF" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem
            sx={{
              px: 2.5,
              fontWeight: 700,
              justifyContent: isSidebarOpen ? "flex-start" : "center",
            }}
          >
            {isSidebarOpen ? "App" : <ThreeDots />}
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/app/blog"
              onClick={(e) => handleLinkClick(e, "/app/blog")}
              sx={{
                justifyContent: isSidebarOpen ? "flex-start" : "center",
                px: 2.5,
                backgroundColor:
                  pathname === "/app/blog" ? "#5D87FF" : "inherit",
                borderRadius: pathname === "/app/blog" ? "8px" : "0",
                "&:hover": {
                  backgroundColor:
                    pathname === "/app/blog" ? "#5D87FF" : "action.hover",
                  borderRadius: pathname === "/app/blog" ? "8px" : "0",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSidebarOpen ? 2 : 0,
                  justifyContent: "center",
                  color: pathname === "/app/blog" ? "#FFFFFF" : "inherit",
                }}
              >
                <PostAddIcon
                  sx={{
                    width: "25px",
                    height: "25px",
                    stroke:
                      pathname === "/app/blog" ? "#FFFFFF" : "currentColor",
                    strokeWidth: 0.9,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary="Blog"
                sx={{
                  display: {
                    xs: "block",
                    lg: isSidebarOpen ? "block" : "none",
                  },
                  color: pathname === "/app/blog" ? "#FFFFFF" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href="/app/gallery"
              onClick={(e) => handleLinkClick(e, "/app/gallery")}
              sx={{
                justifyContent: isSidebarOpen ? "flex-start" : "center",
                px: 2.5,
                backgroundColor:
                  pathname === "/app/gallery" ? "#5D87FF" : "inherit",
                borderRadius: pathname === "/app/gallery" ? "8px" : "0",
                "&:hover": {
                  backgroundColor:
                    pathname === "/app/gallery" ? "#5D87FF" : "action.hover",
                  borderRadius: pathname === "/app/gallery" ? "8px" : "0",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: isSidebarOpen ? 2 : 0,
                  justifyContent: "center",
                  color: pathname === "/app/gallery" ? "#FFFFFF" : "inherit",
                }}
              >
                <CollectionsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Gallery"
                sx={{
                  display: {
                    xs: "block",
                    lg: isSidebarOpen ? "block" : "none",
                  },
                  color: pathname === "/app/gallery" ? "#FFFFFF" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      {showFooter && (
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "center",
            p: 2,
          }}
        >
          Developed by Alireza Hasanpour
        </Typography>
      )}
    </Box>
  );
}
