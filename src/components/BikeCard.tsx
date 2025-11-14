import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Motorcycle } from "../types/bike";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Gauge, Fuel, Zap, Bike } from "lucide-react";

interface BikeCardProps {
  bike: Motorcycle;
  imageUrl?: string;
}

export function BikeCard({ bike, imageUrl }: BikeCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl hover:border-blue-500/50 transition-all bg-card/50 backdrop-blur group">
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 relative">
        {imageUrl ? (
          <ImageWithFallback
            src={imageUrl}
            alt={`${bike.make} ${bike.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Bike className="h-16 w-16 text-zinc-700" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="flex-1">
            {bike.make} {bike.model}
          </CardTitle>
          <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
            {bike.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Calendar className="h-4 w-4 text-blue-400" />
            <span>{bike.year}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Gauge className="h-4 w-4 text-blue-400" />
            <span>{bike.engineCC}cc</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Zap className="h-4 w-4 text-blue-400" />
            <span>{bike.horsePower} HP</span>
          </div>
          {bike.mpg !== null && (
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Fuel className="h-4 w-4 text-blue-400" />
              <span>{bike.mpg} MPG</span>
            </div>
          )}
          {bike.mpg === null && (
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Fuel className="h-4 w-4 text-blue-400" />
              <span>Track Only</span>
            </div>
          )}
        </div>
        {bike.yearsOwned && (
          <div className="mt-3 pt-3 border-t border-zinc-800">
            <p className="text-xs text-zinc-500">Owned: {bike.yearsOwned}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
