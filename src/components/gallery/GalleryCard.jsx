'use client';

import React from 'react';
import {
  Card,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from "./style.module.css";



const GalleryCard = ({ imageSrc, title, date , alt }) => {
  return (
    <Card
      className={styles.card_gallery}
      sx={{
        borderRadius: '8px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `
            0px 0px 2px 0px rgba(145, 158, 171, 0.3),
            0px 12px 24px -4px rgba(145, 158, 171, 0.12)
          `,
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={imageSrc}
        alt={alt}
        sx={{ objectFit: 'cover' }}
      />
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 , fontSize: "16px" }}>
              {title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {date}
            </Typography>
          </Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Box>
    </Card>
  );
};

export default GalleryCard;