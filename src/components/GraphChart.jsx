import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57", "#8dd1e1", "#83a6ed",
];

const GraphChart = ({ options, votes }) => {
  const data = options.map((option, index) => ({
    name: option,
    votes: votes[index],
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip formatter={(value) => [`${value} vote${value !== 1 ? "s" : ""}`, "Votes"]} />
          <Legend />
          <Bar dataKey="votes" isAnimationActive fill="#8884d8">
            {data.map((entry, index) => (
              <cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphChart;
