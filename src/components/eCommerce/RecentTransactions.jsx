"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import dynamic from "next/dynamic";
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Stack,
  Link,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { chartOptions } from "./constantEcommerce"
import { products } from "./constantEcommerce"



const RecentTransactions = () => {
  const [month, setMonth] = useState("March 2025");

  return (
    <Grid className={styles.grid}>
      <Grid className={styles.transactions}>
        <Paper
          elevation={9}
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            width: "100%",
          }}
        >
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Stack direction="column" spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 600, fontSize: 20 }}>
                  Recent Transactions
                </Typography>
              </Stack>
              <Timeline position="right" sx={{ p: 0, m: 2 }}>
                <TimelineItem>
                  <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">
                      09:30 am
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">
                      Payment received from John Doe of $385.90
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">10:00 am</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" component="span" fontSize="14px">
                      New sale recorded{" "}
                    </Typography>
                    <Link href="/" underline="none" color="inherit" fontSize="14px">
                      #ML-3467
                    </Link>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">12:00 am</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">
                      Payment was made of $64.95 to Michael
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">09:30 am</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="warning" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" component="span" fontSize="14px">
                      New sale recorded{" "}
                    </Typography>
                    <Link href="/" underline="none" color="inherit" fontSize="14px">
                      #ML-3467
                    </Link>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">09:30 am</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="error" variant="outlined" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" component="span" fontSize="14px">
                      New arrival recorded{" "}
                    </Typography>
                    <Link href="/" underline="none" color="inherit" fontSize="14px">
                      #ML-3467
                    </Link>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">12:00 am</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="body1" fontSize="14px">Payment Done</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid className={styles.Product}>
        <Paper
          elevation={9}
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            width: "100%",
          }}
        >
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h5" sx={{ fontWeight: 600, fontSize: 20 }}>
                  Product Performance
                </Typography>
                <Select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  size="small"
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="January 2025">January 2025</MenuItem>
                  <MenuItem value="February 2025">February 2025</MenuItem>
                  <MenuItem value="March 2025">March 2025</MenuItem>
                  <MenuItem value="April 2025">April 2025</MenuItem>
                </Select>
              </Stack>
              <TableContainer sx={{marginTop: 3 , marginBottom: 3}}>
                <Table aria-label="product performance table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          Product
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          Progress
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          Priority
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          Budget
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          Chart
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Avatar
                              src={product.image}
                              alt={product.name}
                              variant="rounded"
                              sx={{ width: 55, height: 55 }}
                            />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 600, fontSize: 14 }}
                              >
                                {product.name}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                color="text.secondary"
                                fontSize="12px"
                              >
                                {product.category}
                              </Typography>
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {product.progress}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            sx={{
                              color: `${product.color}`,
                              bgcolor: `${product.bg}`,
                            }}
                            label={product.priority}
                            size="small"
                            color={product.color}
                            variant="filled"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {product.budget}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ minHeight: 35 }}>
                            <Chart
                              options={{
                                ...chartOptions,
                                colors: [product.chartColor],
                                fill: {
                                  ...chartOptions.fill,
                                  colors: [`${product.chartColor}1A`],
                                },
                              }}
                              series={product.chartSeries}
                              type="area"
                              width={100}
                              height={35}
                            />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RecentTransactions;
