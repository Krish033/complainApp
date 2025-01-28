import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

const Dashboard = () => {
  // Register Chart.js components
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

  // Data for the line chart
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 30, 50, 20, 300, 250],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Options for the line chart
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Sales Trend (Line Chart)" },
    },
  };

  // Data for the bar chart
  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue",
        data: [400, 600, 300, 800],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" as const },
      title: { display: true, text: "Quarterly Revenue (Bar Chart)" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Data for the doughnut chart
  const doughnutData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Product Distribution",
        data: [30, 25, 20, 25],
        backgroundColor: ["#f94144", "#f3722c", "#f8961e", "#f9c74f"],
        hoverOffset: 10,
      },
    ],
  };

  // Options for the doughnut chart
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" as const },
      title: { display: true, text: "Product Distribution (Doughnut Chart)" },
    },
  };

  return (
    <div className="rounded-sm min-h-[83vh]">
      <div className="p-2 space-y-6">
        {/* First row: Line and Bar charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <Line data={lineData} options={lineOptions} />
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="bg-white  p-4 rounded-2xl shadow-md">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
