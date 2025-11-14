import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ProgressCircle } from "./components/ProgressCircle";
import { StatsShowcase } from "./components/StatsShowcase";
import { StatCard } from "./components/StatCard";
import { BikeCard } from "./components/BikeCard";
import { PowerComparison } from "./components/PowerComparison";
import { EfficiencyChart } from "./components/EfficiencyChart";
import { BikeTypeDistribution } from "./components/BikeTypeDistribution";
import { EngineSizeChart } from "./components/EngineSizeChart";
import { ownedMotorcycles, riddenMotorcycles } from "./data/motorcycles";
import { 
  Zap, 
  Calendar, 
  Fuel, 
  TrendingUp, 
  Target, 
  Award,
  Code,
  Palette,
  BarChart3,
  Gauge
} from "lucide-react";
import { motion } from "motion/react";

// Custom images for latest bikes
const customBikeImages: Record<string, string> = {
  'Ducati M600': 'https://s1.cdn.autoevolution.com/images/moto_gallery/DUCATI-Monster-600-Dark-11808_1.jpg',
  'Triumph Tiger 1200 Explorer': 'https://www.motoplanete.com/triumph/zoom-700px/Triumph-Tiger-1200-Explorer-XC-2015-700px.webp',
  'Suzuki GSXR 1000': 'https://cloudfront-us-east-1.images.arcpublishing.com/octane/YQAHEU3YDSXAHB7BBYASNTGGC4.jpg',
  'Kawasaki ZX9R': 'https://bringatrailer.com/wp-content/uploads/2023/02/2000_kawasaki_zx-9r-ninja_pxl_20230225_183059570-86845.jpg',
  'Yamaha YZF 600R Thundercat': 'https://global.yamaha-motor.com/showroom/cp/collection/yzf600rthundercat/img/1998_YZF600R_Thundercat.jpg',
};

// Get image for bike
function getBikeImage(bike: any): string | undefined {
  const bikeKey = `${bike.make} ${bike.model}`;
  return customBikeImages[bikeKey];
}

function App() {
  const TARGET_BIKES = 100;
  
  // Owned bike stats
  const mostPowerful = ownedMotorcycles.reduce((prev, current) =>
    current.horsePower > prev.horsePower ? current : prev
  );
  const mostEfficient = ownedMotorcycles.reduce((prev, current) =>
    current.mpg > prev.mpg ? current : prev
  );
  const newest = ownedMotorcycles.reduce((prev, current) =>
    current.year > prev.year ? current : prev
  );
  const oldest = ownedMotorcycles.reduce((prev, current) =>
    current.year < prev.year ? current : prev
  );
  const largest = ownedMotorcycles.reduce((prev, current) =>
    current.engineCC > prev.engineCC ? current : prev
  );

  // All ridden stats
  const mostPowerfulEver = riddenMotorcycles.reduce((prev, current) =>
    current.horsePower > prev.horsePower ? current : prev
  );
  
  const totalHP = ownedMotorcycles.reduce((sum, bike) => sum + bike.horsePower, 0);
  const avgHP = Math.round(totalHP / ownedMotorcycles.length);
  const totalCC = ownedMotorcycles.reduce((sum, bike) => sum + bike.engineCC, 0);
  const avgCC = Math.round(totalCC / ownedMotorcycles.length);

  const uniqueTypes = new Set(ownedMotorcycles.map(b => b.type)).size;
  const uniqueTypesRidden = new Set(riddenMotorcycles.map(b => b.type)).size;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section with Background Images */}
      <div className="relative overflow-hidden">
        {/* Background motorcycle images */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1656414760392-5dbd778c59e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMG1vdG9yY3ljbGV8ZW58MXx8fHwxNzYzMTQ0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmlkZXJ8ZW58MXx8fHwxNzYzMTAyODM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-full opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1638820371370-da1816ec56af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmJpa2UlMjByYWNpbmd8ZW58MXx8fHwxNzYzMTYxNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-900 to-zinc-950"></div>
        
        <div className="container mx-auto px-4 py-20 max-w-7xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-800 mb-6">
              <Target className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-300">Portfolio Project</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
              The Journey to 100
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-4 max-w-3xl mx-auto">
              A data-driven visualization of every motorcycle I've owned and ridden
            </p>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-12">
              From dirt bikes to superbikes, this interactive experience showcases my passion for motorcycles 
              while demonstrating modern web development capabilities with React, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex flex-col items-center gap-8">
              <ProgressCircle current={riddenMotorcycles.length} target={TARGET_BIKES} size={240} />
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-950/50 text-blue-300 border-blue-800 px-4 py-2">
                  {ownedMotorcycles.length} Owned • {uniqueTypes} Types
                </Badge>
                <Badge className="bg-purple-950/50 text-purple-300 border-purple-800 px-4 py-2">
                  {riddenMotorcycles.length} Ridden • {uniqueTypesRidden} Types
                </Badge>
                <Badge className="bg-green-950/50 text-green-300 border-green-800 px-4 py-2">
                  {TARGET_BIKES - riddenMotorcycles.length} To Go
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <StatsShowcase
            title="Most Powerful"
            value={`${mostPowerful.horsePower} HP`}
            subtitle={`${mostPowerful.make} ${mostPowerful.model}`}
            icon={Zap}
            index={0}
            gradient="bg-gradient-to-br from-yellow-500 to-orange-600"
          />
          <StatsShowcase
            title="Average Power"
            value={`${avgHP} HP`}
            subtitle="Across all owned bikes"
            icon={TrendingUp}
            index={1}
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
          />
          <StatsShowcase
            title="Average Engine"
            value={`${avgCC} cc`}
            subtitle="Mean displacement"
            icon={Gauge}
            index={2}
            gradient="bg-gradient-to-br from-purple-500 to-purple-600"
          />
          <StatsShowcase
            title="Total Experience"
            value={`${riddenMotorcycles.length}`}
            subtitle="Bikes ridden overall"
            icon={Award}
            index={3}
            gradient="bg-gradient-to-br from-green-500 to-green-600"
          />
        </div>

        {/* The Story */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur border-zinc-800">
            <CardHeader>
              <CardTitle className="text-2xl text-center font-bold">The Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p className="text-zinc-300 text-center text-lg mb-6">
                It all started with a belt-driven Italian 50cc unknown pedalo scooter—an unconventional first ride 
                that sparked a lifelong passion. In 2010, I obtained my full motorcycle license, marking the beginning 
                of a serious journey through the world of motorcycles. From dirt bikes and motocross to supersport 
                machines, each bike has taught me something new about speed, control, and the pure joy of riding.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-3">🛵</div>
                  <h3 className="text-lg text-blue-400 mb-2">The Beginning</h3>
                  <p className="text-sm text-zinc-400">
                    A 50cc Italian scooter and dirt bikes—learning the fundamentals before getting fully licensed in 2010
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏍️</div>
                  <h3 className="text-lg text-purple-400 mb-2">The Evolution</h3>
                  <p className="text-sm text-zinc-400">
                    Transitioned to street bikes, exploring different types from sport to adventure across {uniqueTypes} categories
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-lg text-green-400 mb-2">The Goal</h3>
                  <p className="text-sm text-zinc-400">
                    On a mission to ride 100 different motorcycles, currently at {riddenMotorcycles.length} and counting
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Collection Highlights - Superlatives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Collection Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatCard
              title="Most Powerful Owned"
              bike={mostPowerful}
              value={`${mostPowerful.horsePower} HP`}
              icon={Zap}
              description={`${mostPowerful.engineCC}cc engine`}
            />
            <StatCard
              title="Most Powerful Ever Ridden"
              bike={mostPowerfulEver}
              value={`${mostPowerfulEver.horsePower} HP`}
              icon={Zap}
              description={`${mostPowerfulEver.engineCC}cc beast`}
            />
            <StatCard
              title="Best Fuel Economy Owned"
              bike={mostEfficient}
              value={`${mostEfficient.mpg} MPG`}
              icon={Fuel}
              description="Most efficient ride"
            />
            <StatCard
              title="Newest Bike Owned"
              bike={newest}
              value={newest.year.toString()}
              icon={Calendar}
              description="Latest model owned"
            />
            <StatCard
              title="Oldest Bike Owned"
              bike={oldest}
              value={oldest.year.toString()}
              icon={Calendar}
              description="First to join collection"
            />
            <StatCard
              title="Largest Engine Owned"
              bike={largest}
              value={`${largest.engineCC}cc`}
              icon={TrendingUp}
              description={`${largest.horsePower} HP output`}
            />
          </div>
        </motion.div>

        {/* Performance Insights - Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Performance Insights
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PowerComparison bikes={ownedMotorcycles} />
            <EfficiencyChart bikes={ownedMotorcycles} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BikeTypeDistribution bikes={ownedMotorcycles} />
            <EngineSizeChart bikes={ownedMotorcycles} />
          </div>
        </motion.div>

        {/* Latest Additions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Latest Additions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {ownedMotorcycles
              .filter(bike => bike.yearsOwned?.includes('Present'))
              .sort((a, b) => {
                const yearA = parseInt(a.yearsOwned?.split('-')[0] || '0');
                const yearB = parseInt(b.yearsOwned?.split('-')[0] || '0');
                return yearB - yearA;
              })
              .map((bike, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BikeCard bike={bike} imageUrl={getBikeImage(bike)} />
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Bikes Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
            Complete Collection
          </h2>
          
          <Tabs defaultValue="owned" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="owned">Owned ({ownedMotorcycles.length})</TabsTrigger>
              <TabsTrigger value="ridden">All Ridden ({riddenMotorcycles.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="owned">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ownedMotorcycles.map((bike, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <BikeCard bike={bike} imageUrl={getBikeImage(bike)} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ridden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {riddenMotorcycles.map((bike, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <BikeCard bike={bike} imageUrl={getBikeImage(bike)} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border-blue-800/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Code className="h-6 w-6 text-blue-400" />
                <CardTitle className="text-2xl font-bold">Technical Implementation</CardTitle>
              </div>
              <p className="text-zinc-400">
                Built as a portfolio piece to showcase modern web development skills
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg text-white font-bold">Frontend Stack</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• React 18 with TypeScript</li>
                    <li>• Tailwind CSS v4.0</li>
                    <li>• Motion (Framer Motion) animations</li>
                    <li>• Recharts for data visualization</li>
                    <li>• Shadcn/ui components</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Palette className="h-5 w-5 text-purple-400" />
                    <h3 className="text-lg text-white font-bold">Design Features</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Scroll-based animations</li>
                    <li>• Responsive grid layouts</li>
                    <li>• WCAG accessible colors</li>
                    <li>• Dark mode optimized</li>
                    <li>• Interactive data visualizations</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-5 w-5 text-green-400" />
                    <h3 className="text-lg text-white font-bold">Data & Analytics</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Type-safe data structures</li>
                    <li>• Real-world motorcycle data</li>
                    <li>• Statistical calculations</li>
                    <li>• Comparative visualizations</li>
                    <li>• Progress tracking</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <p className="text-sm text-zinc-300 mb-2">
                  <strong className="text-blue-400">About this project:</strong> This application demonstrates 
                  my ability to transform personal interests into engaging, data-driven web experiences. 
                  It showcases proficiency in modern React patterns, TypeScript, animation libraries, and 
                  creating intuitive user interfaces that tell a story.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="text-center py-12 mt-20 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            Built by Aaron Slater • {new Date().getFullYear()} • React + TypeScript + Tailwind CSS
          </p>
          <p className="text-zinc-600 text-xs mt-2">
            {riddenMotorcycles.length} of {TARGET_BIKES} bikes ridden • {TARGET_BIKES - riddenMotorcycles.length} to go
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
