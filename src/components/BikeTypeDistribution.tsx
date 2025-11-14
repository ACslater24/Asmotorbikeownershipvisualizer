import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Motorcycle } from "../types/bike";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface BikeTypeDistributionProps {
  bikes: Motorcycle[];
}

// WCAG compliant colors for accessibility
const COLORS = ['#3b82f6', '#22c55e', '#eab308', '#dc2626', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316', '#14b8a6'];

export function BikeTypeDistribution({ bikes }: BikeTypeDistributionProps) {
  const typeCount = bikes.reduce((acc, bike) => {
    acc[bike.type] = (acc[bike.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.entries(typeCount).map(([name, value]) => ({
    name,
    value
  }));

  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#ffffff" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={14}
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="bg-card/50 backdrop-blur border-zinc-800">
      <CardHeader>
        <CardTitle>Bike Type Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={renderLabel}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              stroke="#18181b"
              strokeWidth={2}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#18181b', 
                border: '1px solid #3f3f46',
                borderRadius: '8px',
                color: '#ffffff'
              }}
              labelStyle={{ color: '#ffffff' }}
              itemStyle={{ color: '#ffffff' }}
            />
            <Legend wrapperStyle={{ color: '#ffffff' }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
