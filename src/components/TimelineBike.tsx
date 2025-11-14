import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Motorcycle } from "../types/bike";
import { Calendar, Gauge, Zap, Fuel } from "lucide-react";
import { motion } from "motion/react";

interface TimelineBikeProps {
  bike: Motorcycle;
  index: number;
  customImage?: string;
}

export function TimelineBike({ bike, index, customImage }: TimelineBikeProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-center justify-center mb-16"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-zinc-900 z-10 shadow-lg shadow-blue-500/50"></div>
        <div className="w-1 h-full bg-gradient-to-b from-blue-500/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
        }`}
      >
        <Card className="bg-card/50 backdrop-blur border-zinc-800 hover:border-blue-500/50 transition-all overflow-hidden group">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
            {customImage ? (
              <img
                src={customImage}
                alt={`${bike.make} ${bike.model}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl opacity-20">🏍️</div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            
            {/* Year badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-blue-600 text-white border-0 shadow-lg">
                {bike.year}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl text-blue-400 mb-1">
                  {bike.make} {bike.model}
                </h3>
                <Badge variant="outline" className="text-xs border-zinc-700">
                  {bike.type}
                </Badge>
              </div>
            </div>

            {bike.yearsOwned && (
              <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                <Calendar className="h-4 w-4" />
                <span>Owned: {bike.yearsOwned}</span>
              </div>
            )}

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-zinc-500 mb-1">
                  <Zap className="h-3 w-3" />
                </div>
                <div className="text-sm text-white">{bike.horsePower}</div>
                <div className="text-xs text-zinc-500">HP</div>
              </div>
              <div className="text-center border-l border-r border-zinc-800">
                <div className="flex items-center justify-center gap-1 text-zinc-500 mb-1">
                  <Gauge className="h-3 w-3" />
                </div>
                <div className="text-sm text-white">{bike.engineCC}</div>
                <div className="text-xs text-zinc-500">CC</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-zinc-500 mb-1">
                  <Fuel className="h-3 w-3" />
                </div>
                <div className="text-sm text-white">{bike.mpg}</div>
                <div className="text-xs text-zinc-500">MPG</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
