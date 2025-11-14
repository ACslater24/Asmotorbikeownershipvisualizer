import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Motorcycle } from "../types/bike";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PowerComparisonProps {
  bikes: Motorcycle[];
}

export function PowerComparison({ bikes }: PowerComparisonProps) {
  const data = bikes
    .sort((a, b) => b.horsePower - a.horsePower)
    .map(bike => ({
      name: `${bike.make} ${bike.model.substring(0, 10)}`,
      power: bike.horsePower,
      cc: bike.engineCC,
      year: bike.year
    }));

  return (
    <Card className="bg-card/50 backdrop-blur border-zinc-800">
      <CardHeader>
        <CardTitle>Power Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              stroke="#ffffff"
              tick={{ fill: '#ffffff', fontSize: 12 }}
            />
            <YAxis 
              stroke="#ffffff"
              tick={{ fill: '#ffffff' }}
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
            <Legend wrapperStyle={{ color: '#a1a1aa' }} />
            <Bar dataKey="power" fill="#3b82f6" name="Horsepower" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
