"use client"
import React from "react";
import dynamic from "next/dynamic";
import styles from "./style.module.css";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Select,
  MenuItem,
  Avatar,
  Button,
  Paper,
  Fab,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import GridIcon from "@mui/icons-material/Apps";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { chartOptions } from "./constantHome"
import { chartSeries } from "./constantHome"
import { pieChartOptions } from "./constantHome"
import { areaChartOptions } from "./constantHome"


const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Box>Loading chart...</Box>,
});

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow:
    "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  borderRadius: theme.shape.borderRadius,
}));



const ProfitHome = () => {

  return (
    <Box>
      <Grid className={styles.grid}>
        <Grid className={styles.chart_home}>
          <StyledCard>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Box>
                  <Typography className={styles.header_chart} variant="h5">
                    Revenue Updates
                  </Typography>
                  <Typography
                    className={styles.title_chart}
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    Overview of Profit
                  </Typography>
                </Box>
                <Select
                  value="1"
                  size="small"
                  sx={{ minWidth: 120 }}
                  defaultValue="March 2025"
                >
                  <MenuItem value="1">March 2025</MenuItem>
                </Select>
              </Stack>
              <Grid className={styles.chart_home_grid}>
                <Grid className={styles.chart_home_Charts}>
                  <Box sx={{ minHeight: 375 }}>
                    <Chart
                      className={styles.chart_home_Chart}
                      options={chartOptions}
                      series={chartSeries}
                      type="bar"
                      height={360}
                    />
                  </Box>
                </Grid>
                <Grid className={styles.chart_home_Charts_details}>
                  <Stack
                    spacing={5}
                    sx={{
                      width: {
                        xs: "250px",
                        sm: "100%",
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center">
                      <GridIcon
                        sx={{
                          color: "rgb(93, 135, 255)",
                          backgroundColor: "#ecf2ff",
                          borderRadius: "10px",
                          padding: " 5px 0px",
                          fontSize: "40px",
                        }}
                      />
                      <Box
                        sx={{
                          marginLeft: "16px",
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 700,
                            fontSize: "24px",
                          }}
                        >
                          $63,489.50
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          Total Earnings
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack
                      spacing={2}
                      sx={{
                        width: {
                          xs: "400px",
                          sm: "100%",
                        },
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        width="100%"
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: "rgb(93, 135, 255)",
                          }}
                        />
                        <Box>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            fontSize="14px"
                            fontWeight="400px"
                          >
                            Earnings this month
                          </Typography>
                          <Typography
                            variant="h5"
                            fontSize="18px"
                            fontWeight="bold"
                          >
                            $48,820
                          </Typography>
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: "rgb(73, 190, 255)",
                          }}
                        />
                        <Box>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            fontSize="14px"
                            fontWeight="400px"
                          >
                            Expense this month
                          </Typography>
                          <Typography
                            variant="h5"
                            fontSize="18px"
                            fontWeight="bold"
                          >
                            $26,498
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ bgcolor: "#5D87FF", color: "#fff" }}
                    >
                      View Full Report
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid className={styles.break_chart_home}>
          <Grid className={styles.break_chart_home_sec1}>
            <Paper
              elevation={9}
              sx={{
                borderRadius: 2,
                boxShadow:
                  "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                p: 3,
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "20px", fontWeight: "500" }}
                >
                  Yearly Breakup
                </Typography>
                <Grid className={styles.grid}>
                  <Grid item className={styles.break_chart_home_sec1_first}>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "25px", fontWeight: "700" }}
                      marginTop={1}
                    >
                      $36,358
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      marginTop={6}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#E6F0FA",
                          width: 24,
                          height: 24,
                        }}
                      >
                        <ArrowUpwardIcon
                          sx={{ color: "#39B69A", fontSize: 20 }}
                        />
                      </Avatar>
                      <Typography variant="subtitle2" color="success.main">
                        +9%
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        last year
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} mt={2}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar
                          sx={{ bgcolor: "#E6F0FA", width: 24, height: 24 }}
                        >
                          <CurrencyBitcoinIcon />
                        </Avatar>
                        <Typography variant="subtitle2" color="text.secondary">
                          2025
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar
                          sx={{ bgcolor: "#E6F0FA", width: 24, height: 24 }}
                        >
                          <CurrencyBitcoinIcon />
                        </Avatar>
                        <Typography variant="subtitle2" color="text.secondary">
                          2025
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid className={styles.break_chart_home_sec1_second}>
                    <Chart
                      options={pieChartOptions}
                      series={pieChartOptions.series}
                      type="pie"
                      width="100%"
                      height={128.7}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Paper>
          </Grid>
          <Grid className={styles.break_chart_home_sec2}>
            <Paper
              elevation={9}
              sx={{
                borderRadius: 2,
                boxShadow:
                  "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                p: 2,
              }}
            >
              <Stack spacing={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", fontWeight: "500" }}
                  >
                    Monthly Earnings
                  </Typography>
                  <Fab
                    color="secondary"
                    size="medium"
                    sx={{ boxShadow: "none" }}
                  >
                    <CurrencyBitcoinIcon />
                  </Fab>
                </Stack>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "25px",
                    fontWeight: "700",
                  }}
                  marginTop={1}
                >
                  $6,820
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{
                      bgcolor: "#E6F0FA",
                      width: 24,
                      height: 24,
                    }}
                  >
                    <ArrowDownwardIcon
                      sx={{ color: "#FA896B", fontSize: 20 }}
                    />
                  </Avatar>
                  <Typography variant="subtitle2" color="success.main">
                    +9%
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    last year
                  </Typography>
                </Stack>
                <Chart
                  options={areaChartOptions}
                  series={areaChartOptions.series}
                  type="area"
                  width="100%"
                  height={60}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfitHome;
