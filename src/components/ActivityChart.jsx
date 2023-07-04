import { useParams } from "react-router-dom";
import { getUserActivity } from "../services/getDataMock";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ActivityChart() {
  const { userId } = useParams();

  const user = getUserActivity(userId);

  const data = user.sessions.map((item) => ({
    name: item.day,
    uv: item.kilogram,
    pv: 2400,
    amt: 2400,
  }));

  return (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

// tu pourrais modifier tes donnees directement ici, dans data - name: ici, mais il est demandé de le faire dans une fonction a part, avant
