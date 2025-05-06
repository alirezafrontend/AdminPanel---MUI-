"use client";
import React from "react";
import dynamic from "next/dynamic";
import styles from "./style.module.css";
import {
  Box,
  Grid,
  CardContent,
  Typography,
  Card,
  Stack,
  Select,
  MenuItem,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  InputLabel,
  Chip,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { projects } from "./constantHome";
import { chartOptions1 } from "./constantHome";
import { chartSeries1 } from "./constantHome";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <Box>Loading chart...</Box>,
});

const ProjectHome = () => {
  const [month, setMonth] = React.useState("1");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Box className={styles.grid} sx={{ marginTop: "20px" }}>
      <Grid className={styles.weekly_home}>
        <Card
          className={styles.weekly_home_card}
          elevation={9}
          sx={{
            borderRadius: 2,
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          }}
        >
          <CardContent>
            <Stack spacing={1}>
              <Box>
                <Typography variant="h5">Weekly Stats</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Average sales
                </Typography>
              </Box>
            </Stack>

            <Stack sx={{ minHeight: 130, mt: 2 }}>
              <Chart
                options={chartOptions1}
                series={chartSeries1}
                type="area"
                height={130}
                sx={{ width: "100%" }}
              />
            </Stack>

            <Stack spacing={2} sx={{ mt: 2 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{
                      bgcolor: "rgb(93, 135, 255)",
                      width: 40,
                      height: 40,
                    }}
                    variant="rounded"
                  >
                    <GridViewIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">Top Sales</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Johnathan Doe
                    </Typography>
                  </Box>
                </Stack>
                <Avatar sx={{ bgcolor: "rgb(93, 135, 255)" }}>
                  <Typography variant="subtitle2" color="#fff">
                    +68
                  </Typography>
                </Avatar>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{
                      bgcolor: "rgb(19, 222, 185)",
                      width: 40,
                      height: 40,
                    }}
                    variant="rounded"
                  >
                    <GridViewIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">Best Seller</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Footware
                    </Typography>
                  </Box>
                </Stack>
                <Avatar sx={{ bgcolor: "rgb(19, 222, 185)" }}>
                  <Typography variant="subtitle2" color="#fff">
                    +45
                  </Typography>
                </Avatar>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    sx={{
                      bgcolor: "rgb(250, 137, 107)",
                      width: 40,
                      height: 40,
                    }}
                    variant="rounded"
                  >
                    <GridViewIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">Most Commented</Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Fashionware
                    </Typography>
                  </Box>
                </Stack>
                <Avatar sx={{ bgcolor: "rgb(250, 137, 107)" }}>
                  <Typography variant="subtitle2" color="#fff">
                    +14
                  </Typography>
                </Avatar>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={styles.Projects_home}>
        <Card
          className={styles.weekly_home_card}
          elevation={9}
          sx={{
            borderRadius: 2,
            boxShadow:
              "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            width: "100%",
          }}
        >
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Box>
                <Typography variant="h5">Top Projects</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Best Products
                </Typography>
              </Box>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="month-dd-label">Month</InputLabel>
                <Select
                  labelId="month-dd-label"
                  id="month-dd"
                  value={month}
                  label="Month"
                  onChange={handleChange}
                >
                  <MenuItem value="1">March 2025</MenuItem>
                  <MenuItem value="2">February 2025</MenuItem>
                  <MenuItem value="3">January 2025</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <TableContainer sx={{ mt: 2 }}>
              <Table aria-label="top projects table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle2">Assigned</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Project</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Priority</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">Budget</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Avatar
                            src={project.assigned.avatar}
                            alt={project.assigned.name}
                            sx={{ width: 40, height: 40 }}
                          />
                          <Box>
                            <Typography variant="subtitle2">
                              {project.assigned.name}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {project.assigned.role}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2">
                          {project.project}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={project.priority}
                          size="small"
                          color={
                            project.priority === "Low"
                              ? "default"
                              : project.priority === "Medium"
                              ? "warning"
                              : project.priority === "High"
                              ? "error"
                              : "success"
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle2">
                          {project.budget}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default ProjectHome;
