import React from "react";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import CircleIcon from "@mui/icons-material/FiberManualRecord";
import styles from "./style.module.css";
import PostCard from "./PostCard";
import { posts } from "./constantPost";
import BlogHeader from "./BlogHeader";

const PostMain = () => {
  return (
    <Grid className={styles.grid}>
      <BlogHeader />
      <Grid className={styles.post_first}>
        <Paper
          elevation={9}
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            width: "100%",
            minHeight: "300px",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow:
                "rgb(145 158 171 / 40%) 0px 4px 8px 0px, rgb(145 158 171 / 20%) 0px 16px 32px -4px",
            },
            backgroundImage: "url(/blog/blog1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <Card
            sx={{
              boxShadow: "none",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              position: "relative",
              zIndex: 1,
              borderRadius: "8px",
              height: "100%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box sx={{ flexGrow: 1, display: "flex" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Avatar
                      src="/blog/user1.jpg"
                      alt="Author"
                      sx={{ width: 40, height: 40 }}
                    />
                    <Chip
                      label="Gadget"
                      size="small"
                      color="primary"
                      variant="filled"
                      sx={{ color: "#fff", bgcolor: "rgb(93, 135, 255)" }}
                    />
                  </Stack>
                </Box>
              </Box>
              <Grid>
                <Typography
                  variant="h3"
                  component="a"
                  href="/apps/blog/detail/early-black-friday-amazon-deals-cheap-tvs-headphones-laptops"
                  sx={{
                    fontSize: { xs: 18, sm: 22 },
                    fontWeight: 600,
                    mb: 2,
                    textDecoration: "none",
                    color: "#fff",
                    "&:hover": { textDecoration: "underline", color: "#fff" },
                  }}
                >
                  Early Black Friday Amazon deals: cheap TVs, headphones,
                  laptops
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  marginTop="10px"
                  justifyContent="space-between"
                >
                  <Grid sx={{ display: "flex", gap: "20px" }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <VisibilityIcon sx={{ fontSize: 18, color: "#fff" }} />
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        4673
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CommentIcon sx={{ fontSize: 18, color: "#fff" }} />
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        3
                      </Typography>
                    </Stack>
                  </Grid>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CircleIcon sx={{ fontSize: 16, color: "#fff" }} />
                    <Typography variant="caption" sx={{ color: "#fff" }}>
                      Tue, Apr 29
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid className={styles.post_second}>
        <Paper
          elevation={9}
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            width: "100%",
            minHeight: "300px",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow:
                "rgb(145 158 171 / 40%) 0px 4px 8px 0px, rgb(145 158 171 / 20%) 0px 16px 32px -4px",
            },
            backgroundImage: "url(/blog/blog2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            height: "100%",
          }}
        >
          <Card
            sx={{
              boxShadow: "none",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              position: "relative",
              zIndex: 1,
              borderRadius: "8px",
              height: "100%",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Box sx={{ flexGrow: 1, display: "flex" }}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Avatar
                      src="/blog/user2.jpg"
                      alt="Author"
                      sx={{ width: 40, height: 40 }}
                    />
                    <Chip
                      label="Gadget"
                      size="small"
                      color="primary"
                      variant="filled"
                      sx={{ color: "#fff", bgcolor: "rgb(93, 135, 255)" }}
                    />
                  </Stack>
                </Box>
              </Box>
              <Grid>
                <Typography
                  variant="h3"
                  component="a"
                  href="/apps/blog/detail/early-black-friday-amazon-deals-cheap-tvs-headphones-laptops"
                  sx={{
                    fontSize: { xs: 18, sm: 22 },
                    fontWeight: 600,
                    mb: 2,
                    textDecoration: "none",
                    color: "#fff",
                    "&:hover": { textDecoration: "underline", color: "#fff" },
                  }}
                >
                  Presented by Max Rushden with Barry Glendenning, Philippe
                  Auclair
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  marginTop="10px"
                  justifyContent="space-between"
                >
                  <Grid sx={{ display: "flex", gap: "20px" }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <VisibilityIcon sx={{ fontSize: 18, color: "#fff" }} />
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        5636
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CommentIcon sx={{ fontSize: 18, color: "#fff" }} />
                      <Typography variant="body2" sx={{ color: "#fff" }}>
                        3
                      </Typography>
                    </Stack>
                  </Grid>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CircleIcon sx={{ fontSize: 16, color: "#fff" }} />
                    <Typography variant="caption" sx={{ color: "#fff" }}>
                      Sun, May 4
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      {posts.map((item) => {
        return (
          <PostCard
            key={item.id}
            image={item.src}
            alt="post"
            avatar={item.icon}
            readTime="2"
            category={item.cat}
            title={item.title}
            views={item.view}
            comments={item.comment}
            date={item.date}
          />
        );
      })}
    </Grid>
  );
};

export default PostMain;
