import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Motorcycle } from "../types/bike";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface EngineSizeChartProps {
  bikes: Motorcycle[];
}

export function EngineSizeChart({ bikes }: EngineSizeChartProps) {
  // Group bikes by engine size ranges with WCAG compliant colors
  const ranges = [
    { min: 0, max: 125, label: '0-125cc', color: '#3b82f6' },
    { min: 126, max: 250, label: '126-250cc', color: '#8b5cf6' },
    { min: 251, max: 600, label: '251-600cc', color: '#06b6d4' },
    { min: 601, max: 900, label: '601-900cc', color: '#22c55e' },
    { min: 901, max: 999, label: '901-999cc', color: '#eab308' },
    { min: 1000, max: 2000, label: '1000cc+', color: '#dc2626' }
  ];

  const data = ranges.map(range => {
    const count = bikes.filter(
      bike => bike.engineCC >= range.min && bike.engineCC <= range.max
    ).length;
    return {
      range: range.label,
      count,
      color: range.color
    };
  }).filter(item => item.count > 0);

  return (
    <Card className="bg-card/50 backdrop-blur border-zinc-800">
      <CardHeader>
        <CardTitle>Engine Size Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis 
              dataKey="range"
              stroke="#ffffff"
              tick={{ fill: '#ffffff' }}
            />
            <YAxis 
              stroke="#ffffff"
              tick={{ fill: '#ffffff' }}
              allowDecimals={false}
              label={{ value: 'Number of Bikes', angle: -90, position: 'insideLeft', fill: '#ffffff' }}
            />
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
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
