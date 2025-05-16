// src/components/PieChart.jsx
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF5E5E"];

const PieChart = ({ options, votes }) => {
  const totalVotes = votes.reduce((a, b) => a + b, 0);
  const data = options.map((opt, i) => ({
    name: opt,
    value: votes[i],
  }));

  if (totalVotes === 0) {
    return <p className="text-gray-500">No votes yet.</p>;
  }

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <RePieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
