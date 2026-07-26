import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", amount: 2400 },
  { day: "Tue", amount: 3200 },
  { day: "Wed", amount: 1800 },
  { day: "Thu", amount: 4200 },
  { day: "Fri", amount: 3500 },
  { day: "Sat", amount: 5100 },
  { day: "Sun", amount: 2800 },
];

export default function SpendingChart() {
  return (
    <div className="mx-5 mt-8 rounded-3xl bg-white p-6 shadow-lg">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-bold">
            Spending Analytics
          </h2>

          <p className="text-sm text-gray-500">
            Last 7 Days
          </p>
        </div>

        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          ₹23,000
        </span>

      </div>

      <div className="h-56">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="day" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#7A1FA2"
              fill="#D81B60"
              fillOpacity={0.25}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}