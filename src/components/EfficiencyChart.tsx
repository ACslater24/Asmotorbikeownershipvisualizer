import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Motorcycle } from "../types/bike";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface EfficiencyChartProps {
  bikes: Motorcycle[];
}

export function EfficiencyChart({ bikes }: EfficiencyChartProps) {
  const data = bikes
    .filter(bike => bike.mpg !== null)
    .sort((a, b) => (b.mpg || 0) - (a.mpg || 0))
    .map((bike, index) => ({
      name: `${bike.make} ${bike.model.substring(0, 8)}`,
      mpg: bike.mpg,
      index
    }));

  // WCAG compliant color gradient from green (most efficient) to red (least efficient)
  const getColor = (index: number, total: number) => {
    const ratio = index / (total - 1);
    if (ratio < 0.33) return '#22c55e'; // Accessible green
    if (ratio < 0.66) return '#eab308'; // Accessible yellow
    return '#dc2626'; // Accessible red
  };

  return (
    <Card className="bg-card/50 backdrop-blur border-zinc-800">
      <CardHeader>
        <CardTitle>Fuel Efficiency Ranking</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis 
              dataKey="name"
              stroke="#ffffff"
              tick={{ fill: '#ffffff', fontSize: 10 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              stroke="#ffffff"
              tick={{ fill: '#ffffff' }}
              label={{ value: 'MPG', angle: -90, position: 'insideLeft', fill: '#ffffff' }}
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
            <Bar dataKey="mpg" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(index, data.length)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
