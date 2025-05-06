export const cartHome = [
  {
    id: 1,
    title: "Employees",
    num: 96,
  },
  {
    id: 2,
    title: "Clients",
    num: "3,650",
  },
  {
    id: 3,
    title: "Projects",
    num: 356,
  },
  {
    id: 4,
    title: "Events",
    num: 696,
  },
  {
    id: 5,
    title: "Payroll",
    num: "$96K",
  },
  {
    id: 6,
    title: "Reports",
    num: 59,
  },
];

export const projects = [
  {
    assigned: {
      name: "Sunil Joshi",
      role: "Web Designer",
      avatar: "/Home/user-1.jpg",
    },
    project: "Elite Admin",
    priority: "Low",
    budget: "$3.9k",
  },
  {
    assigned: {
      name: "John Deo",
      role: "Web Developer",
      avatar: "/Home/user-2.jpg",
    },
    project: "Flexy Admin",
    priority: "Medium",
    budget: "$24.5k",
  },
  {
    assigned: {
      name: "Nirav Joshi",
      role: "Web Manager",
      avatar: "/Home/user-3.jpg",
    },
    project: "Material Pro",
    priority: "High",
    budget: "$12.8k",
  },
  {
    assigned: {
      name: "Yuvraj Sheth",
      role: "Project Manager",
      avatar: "/Home/user-4.jpg",
    },
    project: "Xtreme Admin",
    priority: "Very High",
    budget: "$2.4k",
  },
];

export const chartOptions1 = {
  chart: {
    id: "weekly-stats",
    type: "area",
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  dataLabels: { enabled: false },
  stroke: {
    curve: "smooth",
    width: 2,
    colors: ["#5d87ff"],
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.45,
      opacityTo: 0,
      stops: [20, 100],
      colorStops: [
        {
          offset: 20,
          color: "rgba(93,135,255,0.45)",
          opacity: 0.45,
        },
        {
          offset: 100,
          color: "rgba(93,135,255,0)",
          opacity: 0,
        },
      ],
    },
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { show: false },
    min: 0,
    max: 128,
  },
  grid: { show: false },
  tooltip: {
    enabled: true,
    theme: "light",
    y: {
      formatter: (val) => `${val}`,
      title: { formatter: () => "Weekly Stats: " },
    },
  },
};

export const chartSeries1 = [
  {
    name: "Weekly Stats",
    data: [0, 116, 117, 118, 128, 116, 0, 46, 110],
  },
];

export const chartOptions = {
  chart: {
    type: "bar",
    height: 360,
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      columnWidth: "20%",
    },
  },
  colors: ["rgba(93,135,255,0.85)", "rgba(73,190,255,0.85)"],
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08"],
    labels: {
      style: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        colors: "#adb0bb",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    tickAmount: 4,
    labels: {
      style: {
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        colors: "#adb0bb",
        fontSize: "11px",
      },
    },
  },
  tooltip: {
    theme: "light",
  },
};

export const chartSeries = [
  {
    name: "Earnings this month",
    data: [1.5, 2.7, 2.2, 3.6, 1.5, 1, 0],
  },
  {
    name: "Expense this month",
    data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8, 0],
  },
];

export const pieChartOptions = {
  chart: {
    type: "pie",
    height: 128.7,
  },
  series: [38, 40, 25],
  labels: ["Series 1", "Series 2", "Series 3"],
  colors: ["#5D87FF", "#ECF2FF", "#F9F9FD"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
};

export const areaChartOptions = {
  chart: {
    type: "area",
    height: 60,
    sparkline: {
      enabled: true,
    },
  },
  series: [
    {
      name: "",
      data: [43.5, 3.87, 48.33, 29, 56.07, 11.6, 48.33],
    },
  ],
  colors: ["#49BEFF"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.05,
      opacityTo: 0.05,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
};
