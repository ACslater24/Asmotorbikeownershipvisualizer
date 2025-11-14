import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Motorcycle } from "../types/bike";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  bike: Motorcycle;
  value: string;
  icon: LucideIcon;
  description?: string;
}

export function StatCard({ title, bike, value, icon: Icon, description }: StatCardProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-950/50 to-indigo-950/30 border-blue-600/30 hover:border-blue-500/50 transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-zinc-400">{title}</CardTitle>
        <Icon className="h-5 w-5 text-blue-400" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl text-blue-400">{value}</div>
        <p className="text-xs text-zinc-300 mt-1">
          {bike.make} {bike.model} ({bike.year})
        </p>
        {description && (
          <p className="text-xs text-zinc-500 mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
