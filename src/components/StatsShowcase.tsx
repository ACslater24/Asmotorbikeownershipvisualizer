import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface StatShowcaseProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  index: number;
  gradient: string;
}

export function StatsShowcase({
  title,
  value,
  subtitle,
  icon: Icon,
  index,
  gradient,
}: StatShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card/50 backdrop-blur border-zinc-800 hover:border-zinc-700 transition-all group">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm text-zinc-400">{title}</CardTitle>
            <div className={`p-2 rounded-lg ${gradient}`}>
              <Icon className="h-4 w-4 text-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl text-white mb-1">{value}</div>
          <p className="text-xs text-zinc-500">{subtitle}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
