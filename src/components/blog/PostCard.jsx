"use client";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./style.module.css";

const HoverCard = styled(Card)(({ theme }) => ({
  boxShadow:
    "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "rgb(145 158 171 / 40%) 0px 4px 16px",
  },
}));


const PostCard = ({
  title,
  image,
  alt,
  category,
  readTime,
  views,
  comments,
  date,
  avatar,
}) => {
  return (
    <Grid className={styles.post}>
      <HoverCard sx={{ width: "100%" }}>
        <Link href="/app/blog" passHref>
          <CardMedia
            component="img"
            height="240"
            width="100%"
            image={image}
            alt={alt}
            sx={{ objectFit: "cover", width: "100%" }}
          />
        </Link>
        <CardContent sx={{ width: "100%" }}>
          <Stack direction="row" spacing={1} alignItems="center" mb={2}>
            <Avatar src={avatar} alt="author" sx={{ width: 32, height: 32 }} />
            <Chip label={`${readTime} min Read`} size="small" />
          </Stack>
          <Chip
            label={category}
            size="small"
            sx={{
              mb: 2,
              backgroundColor: "grey.200",
              color: "#000",
              "& .MuiChip-label": {
                color: "#000",
              },
            }}
          />
          <Box mb={2} width="100%">
            <Link href="/app/blog" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                {title}
              </Typography>
            </Link>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={0.5} alignItems="center">
              <VisibilityIcon fontSize="small" />
              <Typography variant="body2">{views}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <CommentIcon fontSize="small" />
              <Typography variant="body2">{comments}</Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <CircleIcon fontSize="small" />
              <Typography variant="caption">{date}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </HoverCard>
    </Grid>
  );
};

export default PostCard;
