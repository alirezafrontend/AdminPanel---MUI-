"use client";

import { useState } from "react";
import styles from "./style.module.css";
import {
  Card,
  CardMedia,
  Grid,
  Stack,
  Box,
  Typography,
  Avatar,
  Fab,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import {
  IconFileDescription,
  IconUserCircle,
  IconUserCheck,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandDribbble,
  IconBrandYoutube,
  IconHeart,
  IconPhoto,
} from "@tabler/icons-react";

const ProfileCard = () => {
  const [tabValue, setTabValue] = useState("gallery");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Grid className={styles.profileCard}>
      <Grid item xs={12}>
        <Card
          elevation={9}
          sx={{
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          }}
        >
          <CardMedia
            component="img"
            height="330"
            image="/gallery/profilebg.jpg"
            alt="profilecover"
            sx={{ width: "100%" }}
          />
          <Grid className={styles.profile}>
            <Grid className={styles.profile_left}>
              <Stack direction="row" spacing={1} justifyContent="space-around">
                <Box textAlign="center">
                  <IconFileDescription size={20} />
                  <Typography variant="h4" fontSize={21}>
                    938
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontSize={16}>
                    Posts
                  </Typography>
                </Box>
                <Box textAlign="center">
                  <IconUserCircle size={20} />
                  <Typography variant="h4" fontSize={21}>
                    3,586
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontSize={16}>
                    Followers
                  </Typography>
                </Box>
                <Box textAlign="center">
                  <IconUserCheck size={20} />
                  <Typography variant="h4" fontSize={21}>
                    2,659
                  </Typography>
                  <Typography variant="h6" color="text.secondary" fontSize={16}>
                    Following
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid className={styles.profile_center}>
              <Box className={styles.profile_center_text}>
                <Avatar
                  src="/gallery/user1.jpg"
                  alt="profileImage"
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 1,
                    border: "5px solid #f44c66",
                  }}
                />
                <Typography variant="h5" fontSize={18}>
                  Mathew Anderson
                </Typography>
                <Typography variant="h6" color="text.secondary" fontSize={16}>
                  Designer
                </Typography>
              </Box>
            </Grid>

            <Grid className={styles.profile_right}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Fab
                  color="primary"
                  size="small"
                  sx={{
                    bgcolor: "rgb(24, 119, 242)",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                >
                  <IconBrandFacebook size={16} />
                </Fab>
                <Fab
                  color="primary"
                  size="small"
                  sx={{
                    bgcolor: "rgb(29, 161, 242)",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                >
                  <IconBrandTwitter size={18} />
                </Fab>
                <Fab
                  color="success"
                  size="small"
                  sx={{
                    bgcolor: "rgb(234, 76, 137)",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                >
                  <IconBrandDribbble size={18} />
                </Fab>
                <Fab
                  color="error"
                  size="small"
                  sx={{
                    bgcolor: "rgb(205, 32, 31)",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                >
                  <IconBrandYoutube size={18} />
                </Fab>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ bgcolor: "#5D87FF", color: "#fff" }}
                >
                  Add to Story
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
