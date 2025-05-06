export const chartOptions = {
  chart: {
    type: "area",
    height: 35,
    width: 100,
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  fill: {
    type: "solid",
    opacity: 0.05,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
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
    show: false,
  },
  grid: {
    show: false,
  },
};

export const products = [
  {
    name: "Gaming Console",
    category: "Electronics",
    image: "/product/s6.jpg",
    progress: "78.5%",
    priority: "Low",
    color: "rgb(19, 222, 185)",
    bg: "rgb(230, 255, 250)",
    budget: "$3.9k",
    chartSeries: [
      {
        name: "Customers",
        data: [30, 30, 50, 10, 10, 30],
      },
    ],
    chartColor: "#5d87ff",
  },
  {
    name: "Leather Purse",
    category: "Fashion",
    image: "/product/s2.jpg",
    progress: "58.6%",
    priority: "Medium",
    color: "rgb(255, 174, 31)",
    bg: "rgb(254, 245, 229)",
    budget: "$3.5k",
    chartSeries: [
      {
        name: "Customers",
        data: [30, 30, 50, 10, 10, 30],
      },
    ],
    chartColor: "#dfe5ef",
  },
  {
    name: "Red Velvate Dress",
    category: "Womens Fashion",
    image: "/product/s3.jpg",
    progress: "25%",
    priority: "Very High",
    color: "rgb(93, 135, 255)",
    bg: "rgb(236, 242, 255)",
    budget: "$3.5k",
    chartSeries: [
      {
        name: "Customers",
        data: [30, 30, 50, 10, 10, 30],
      },
    ],
    chartColor: "#5d87ff",
  },
  {
    name: "Headphone Boat",
    category: "Electronics",
    image: "/product/s4.jpg",
    progress: "96.3%",
    priority: "High",
    color: "rgb(250, 137, 107)",
    bg: "rgb(253, 237, 232)",
    budget: "$3.5k",
    chartSeries: [
      {
        name: "series-1",
        data: [30, 30, 50, 10, 10, 30],
      },
    ],
    chartColor: "#dfe5ef",
  },
];

export const donutChartOptions = {
  chart: {
    type: "donut",
    height: 105,
    width: 250,
  },
  series: [60, 25, 15],
  labels: ["Profit", "Revenue", "Expense"],
  colors: ["#5D87FF", "#FA896B", "#49BEFF"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
    theme: "light",
    y: {
      formatter: (val) => val,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
    },
  },
};

export const barChartOptions = {
  chart: {
    type: "bar",
    height: 150,
    width: 250,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  series: [
    {
      name: "Series 1",
      data: [35, 45, 30, 35, 50, 35],
    },
    {
      name: "Series 2",
      data: [45, 50, 30, 45, 50, 45],
    },
    {
      name: "Series 3",
      data: [50, 35, 70, 50, 30, 50],
    },
  ],
  colors: ["#5D87FF", "#49BEFF", "#EAEFF4"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
    theme: "light",
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: "60%",
    },
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
    show: false,
  },
  grid: {
    show: false,
  },
};
