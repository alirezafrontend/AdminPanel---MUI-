"use client";

import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import styles from "./style.module.css";
import { useThemeMode } from "@/app/context/ThemeContext";

export default function GalleryHeader() {
  const { isDarkMode } = useThemeMode();
  return (
    <Grid className={styles.gallery_header}>
      <Grid className={styles.left_header}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            fontSize: "24px",
            color: isDarkMode ? "#000" : "inherit",
          }}
        >
          User App
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            fontSize: "16px",
            color: isDarkMode ? "#000" : "inherit",
          }}
        >
          Home . Gallery
        </Typography>
      </Grid>
      <Grid className={styles.right_header}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 165,
              height: 165,
            }}
          >
            <Image
              src="/blog/header.png"
              alt="breadcrumbImg"
              width={165}
              height={165}
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
