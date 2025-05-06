"use client";

import React from "react";
import styles from "./style.module.css";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import dynamic from "next/dynamic";
import ArrowUpRightIcon from "@mui/icons-material/ArrowUpward";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { donutChartOptions } from "./constantEcommerce";
import { barChartOptions } from "./constantEcommerce";
import { useThemeMode } from "@/app/context/ThemeContext";

const WelcomeCard = () => {
  const { isDarkMode } = useThemeMode();

  return (
    <Grid className={styles.grid}>
      <Grid className={styles.welcome}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: "8px",
            boxShadow: "none",
            width: "100%",
          }}
        >
          <Card sx={{ boxShadow: "none", bgcolor: "rgb(236, 242, 255)" }}>
            <CardContent>
              <Grid className={styles.grid}>
                <Grid className={styles.welcome_sec1}>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        alt="User"
                        src="/eCommerce/user-1.jpg"
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Typography
                        variant="h5"
                        fontSize="18px"
                        sx={{ color: isDarkMode ? "#000" : "inherit" }}
                      >
                        Welcome back Mathew Anderson!
                      </Typography>
                    </Box>
                    <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}
                      marginTop="64px"
                    >
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: isDarkMode ? "#000" : "inherit",
                          }}
                          fontSize="30px"
                        >
                          $2,340
                          <ArrowUpRightIcon sx={{ color: "#39B69A", ml: 1 }} />
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="14px"
                          sx={{
                            color: isDarkMode ? "#000" : "inherit",
                          }}
                        >
                          Today’s Sales
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="h2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: isDarkMode ? "#000" : "inherit",
                          }}
                          fontSize="30px"
                        >
                          35%
                          <ArrowUpRightIcon sx={{ color: "#39B69A", ml: 1 }} />
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="14px"
                          sx={{
                            color: isDarkMode ? "#000" : "inherit",
                          }}
                        >
                          Performance
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
                <Grid className={styles.welcome_sec2}>
                  <Box
                    component="img"
                    src="/eCommerce/welcome-bg2.png"
                    alt="Background"
                    sx={{
                      width: 340,
                      height: 246,
                      position: "absolute",
                      right: -50,
                      bottom: -105,
                      mt: 2,
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid className={styles.summary}>
        <Grid className={styles.grid}>
          <Grid className={styles.expense}>
            <Paper
              elevation={9}
              sx={{
                borderRadius: "8px",
                boxShadow:
                  "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
              }}
            >
              <Card sx={{ boxShadow: "none" }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: 30, fontWeight: 600, mb: 1 }}
                  >
                    $10,230
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    Expense
                  </Typography>
                  <Box
                    sx={{
                      minHeight: "98.7px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Chart
                      options={donutChartOptions}
                      series={donutChartOptions.series}
                      type="donut"
                      width={450}
                      height={240}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>

          <Grid className={styles.sales}>
            <Paper
              elevation={9}
              sx={{
                borderRadius: "8px",
                boxShadow:
                  "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
              }}
            >
              <Card sx={{ boxShadow: "none" }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: 30, fontWeight: 600, mb: 1 }}
                  >
                    $65,432
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    Sales
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Chart
                      options={barChartOptions}
                      series={barChartOptions.series}
                      type="bar"
                      width={450}
                      height={230}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WelcomeCard;
