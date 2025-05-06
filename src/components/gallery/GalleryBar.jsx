"use client";

import {
  Grid,
  Stack,
  Box,
  Typography,
  Chip,
  TextField,
  InputAdornment,
} from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import styles from "./style.module.css";

const GalleryBar = () => {
  return (
    <Grid className={styles.headerSearch}>
      <Grid>
        <Stack className={styles.box_header}>
          <Box className={styles.titlebar}>
            <Typography
              variant="h3"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "24px",
              }}
            >
              Gallery
              <Chip
                label="12"
                size="small"
                sx={{ backgroundColor: "#49BEFF", color: "#fff" }}
              />
            </Typography>
          </Box>
          <Box className={styles.searchbar}>
            <TextField
              size="small"
              placeholder="Search Gallery"
              aria-label="Search Gallery"
              type="search"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size={14} />
                    </InputAdornment>
                  ),
                },
              }}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#5d87ff",
                    borderWidth: "2px",
                  },
                },
              }}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default GalleryBar;
