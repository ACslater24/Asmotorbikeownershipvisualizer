import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Motorcycle } from "../types/bike";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from "recharts";

interface EngineComparisonProps {
  bikes: Motorcycle[];
}

export function EngineComparison({ bikes }: EngineComparisonProps) {
  const data = bikes.map(bike => ({
    name: `${bike.make} ${bike.model}`,
    cc: bike.engineCC,
    hp: bike.horsePower,
    year: bike.year
  }));

  return (
    <Card className="bg-card/50 backdrop-blur border-zinc-800">
      <CardHeader>
        <CardTitle>Engine Size vs Power Output</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis 
              dataKey="cc" 
              name="Engine CC" 
              unit="cc"
              stroke="#71717a"
              tick={{ fill: '#a1a1aa' }}
            />
            <YAxis 
              dataKey="hp" 
              name="Horsepower" 
              unit="HP"
              stroke="#71717a"
              tick={{ fill: '#a1a1aa' }}
            />
            <ZAxis range={[60, 400]} />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{ 
                backgroundColor: '#18181b', 
                border: '1px solid #3f3f46',
                borderRadius: '8px',
                color: '#f4f4f5'
              }}
            />
            <Scatter name="Bikes" data={data} fill="#8b5cf6" />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
