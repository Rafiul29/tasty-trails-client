import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample sales data for the last few months
  const salesData = [
    { date: "2024-01-15", sales: 1500 },
    { date: "2024-02-12", sales: 2300 },
    { date: "2024-03-18", sales: 1800 },
    { date: "2024-04-10", sales: 2500 },
    { date: "2024-04-15", sales: 3000 },
    { date: "2024-05-10", sales: 1700 },
    { date: "2024-06-20", sales: 3200 },
    { date: "2024-07-05", sales: 2800 },
    { date: "2024-08-15", sales: 3500 },
    { date: "2024-09-25", sales: 4000 },
    { date: "2024-10-02", sales: 4500 },
    { date: "2023-11-20", sales: 2200 },
    { date: "2023-12-15", sales: 3700 },
  ];

  // Function to get the month name from the date
  const getMonthName = (date) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const d = new Date(date);
    return monthNames[d.getMonth()];
  };

  // Function to get the year from the date
  const getYear = (date) => {
    const d = new Date(date);
    return d.getFullYear();
  };

  // Aggregate sales data by month, filtered by the selected year
  const aggregateMonthlySales = (data, selectedYear) => {
    const monthlySales = {};

    data.forEach((item) => {
      const year = getYear(item.date);
      if (year === selectedYear) {
        const month = getMonthName(item.date);
        if (!monthlySales[month]) {
          monthlySales[month] = 0; // Initialize the month if not already present
        }
        monthlySales[month] += item.sales; // Add sales to the respective month
      }
    });

    return monthlySales;
  };

  const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value)); // Update the selected year
  };

  const monthlySales = aggregateMonthlySales(salesData, selectedYear);

  const labels = Object.keys(monthlySales); // Month names
  const salesValues = Object.values(monthlySales); // Corresponding sales

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Monthly Sales ($) for ${selectedYear}`,
        data: salesValues, // Aggregated monthly sales
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 20, // Set the bar width
        maxBarThickness: 60, // Maximum width if the chart resizes
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Monthly Sales Data for ${selectedYear}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-white rounded-lg shadow-lg">
      {/* Dropdown to select the year */}
      <div className="flex flex-col ">
        <select
          id="year"
          value={selectedYear}
          onChange={handleYearChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={2024}>2024</option>
          <option value={2023}>2023</option>
        </select>
      </div>

      {/* Bar chart */}
      <div className="w-full h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
