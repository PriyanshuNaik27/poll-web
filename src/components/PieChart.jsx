// src/components/PieChart.jsx
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6", "#E6B333",
  "#3366E6", "#999966", "#99FF99", "#B34D4D", "#80B300", "#809900",
  "#E6B3B3", "#6680B3", "#66991A", "#FF99E6", "#CCFF1A", "#FF1A66",
  "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300",
  "#CC80CC", "#66664D", "#991AFF", "#E666FF", "#4DB3FF", "#1AB399",
  "#E666B3", "#33991A", "#CC9999", "#B3B31A", "#00E680", "#4D8066",
  "#809980", "#999933", "#FF3380", "#CCCC00", "#66E64D", "#4D80CC",
  "#9900B3", "#E64D66", "#6666FF", "#33FF66", "#FFB347", "#C0C0C0"
];


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
