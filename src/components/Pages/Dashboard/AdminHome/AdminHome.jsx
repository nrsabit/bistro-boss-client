import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaShuttleVan, FaUsers, FaWallet } from "react-icons/fa";
import { TbChefHat } from "react-icons/tb";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AdminHome = () => {
  const { user, loader } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    enabled: !loader && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: reports = [] } = useQuery({
    queryKey: ["admin-reports"],
    enabled: !loader && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-reports");
      return res.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full p-6">
      <h3 className="text-3xl font-semibold mb-6">
        Welcome Back, {user?.displayName}
      </h3>
      <div className="stats shadow bg-base-200">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaWallet className="w-8 h-8"></FaWallet>
          </div>
          <div className="stat-title font-semibold">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="w-10 h-10"></FaUsers>
          </div>
          <div className="stat-title font-semibold">Customers</div>
          <div className="stat-value">{stats?.customers}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <TbChefHat className="w-10 h-10"></TbChefHat>
          </div>
          <div className="stat-title font-semibold">Products</div>
          <div className="stat-value">{stats?.products}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaShuttleVan className="w-10 h-10"></FaShuttleVan>
          </div>
          <div className="stat-title font-semibold">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={reports}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="totalSum"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {reports.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <ResponsiveContainer width="100%">
            <PieChart width={400} height={400}>
                <Legend></Legend>
              <Pie
                data={reports}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="totalCount"
                nameKey="category"
              >
                {reports.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    name={entry.category}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
