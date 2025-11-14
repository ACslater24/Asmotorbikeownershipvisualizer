export interface Motorcycle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: 'Sport' | 'Cruiser' | 'Touring' | 'Adventure' | 'Naked' | 'Standard' | 'Motocross' | 'Minibike' | 'Retro';
  engineCC: number;
  horsePower: number;
  mpg: number | null; // null for dirt bikes
  yearsOwned?: string;
  color: string;
  imageQuery: string;
}
