// Attendance graph screen

import { useEffect, useState } from "react";
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
import { Navbar } from "../components/navbar";
import axios from "axios";

// Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraficoPresenca() {
  // Set the state for the data
  const [presencaData, setPresencaData] = useState({
    labels: [],
    datasets: [
      {
        label: "Presentes",
        data: [],
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderWidth: 1,
      },
      {
        label: "Ausentes",
        data: [],
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        borderWidth: 1,
      },
    ],
  });

  // Function to make the request and update the data
  const PresencaData = async () => {
    try {
      const response = await axios.get("REACT_APP_API_URL");
      const data = response.data;

      //data needed for the graph
      const labels = data.map((item) => item.data); // a data
      const presentes = data.map((item) => item.presentes); // presentes
      const ausentes = data.map((item) => item.ausentes); // ausentes

      // Update the state with the formatted data
      setPresencaData({
        labels: labels,
        datasets: [
          {
            label: "Presentes",
            data: presentes,
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Ausentes",
            data: ausentes,
            backgroundColor: "rgba(255, 99, 132, 0.7)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Erro ao carregar os dados", error);
    }
  };

  // Call the function when the component is mounted
  useEffect(() => {
    PresencaData();
  }, []);

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Número de Pessoas",
        },
        ticks: {
          callback: function (value) {
            return Math.round(value);
          },
          stepSize: 1,
        },
        min: 0,
        max: 40,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Relatório de Presença Semanal",
      },
    },
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid h-50 d-flex flex-column justify-content-center">
        <h1 className="text-start mt-3 mb-3">Gráfico de Frequência</h1>
        <div className="card shadow-sm p-4 flex-grow-1">
          <Bar data={presencaData} options={options} />
        </div>
      </div>
    </div>
  );
};