import React from 'react';
import { Clock, Users, Leaf, AlertCircle, Droplet, Fish, Trash2, Recycle, TrendingUp, Globe } from 'lucide-react';

const App = () => {
  const team = [
    { name: "Иван Иванов", role: "Backend / Logic", task: "Интеграция API данных о загрязнении воздуха" },
    { name: "Анна Смирнова", role: "Design / Content", task: "Копирайт, подбор визуала и структура лендинга" },
    { name: "Дмитрий Петров", role: "AI Operator", task: "Промпт-инжиниринг фронтенда и сборка на Tailwind" }
  ];

  const statistics = [
    { icon: TrendingUp, value: "400M", label: "Tons Produced Annually", color: "text-red-600" },
    { icon: Droplet, value: "8M", label: "Tons Enter Oceans/Year", color: "text-blue-600" },
    { icon: Fish, value: "100K+", label: "Marine Animals Die/Year", color: "text-cyan-600" },
    { icon: Globe, value: "5.25T", label: "Plastic Pieces in Ocean", color: "text-emerald-600" }
  ];

  const impacts = [
    {
      title: "Marine Life Threat",
      description: "Sea turtles, whales, and seabirds mistake plastic for food. Over 700 marine species are affected by plastic pollution, with ingestion and entanglement being the primary causes of death.",
      icon: Fish
    },
    {
      title: "Ecosystem Disruption",
      description: "Microplastics infiltrate every level of the food chain, from plankton to apex predators. These particles carry toxic chemicals that accumulate in organisms and disrupt natural ecosystems.",
      icon: Leaf
    },
    {
      title: "Human Health Risk",
      description: "Microplastics have been found in human blood, lungs, and placentas. Chemicals from plastics can disrupt hormones and may contribute to serious health conditions.",
      icon: AlertCircle
    }
  ];

  const solutions = [
    "Reduce single-use plastics: Choose reusable bags, bottles, and containers",
    "Support plastic-free alternatives: Opt for bamboo, glass, or metal products",
    "Proper waste disposal: Recycle correctly and participate in beach cleanups",
    "Advocate for change: Support legislation that limits plastic production",
    "Educate others: Share knowledge about plastic pollution impact",
    "Choose sustainable brands: Buy from companies committed to reducing plastic"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Droplet className="w-4 h-4 mr-2" />
            <span className="text-sm font-bold uppercase tracking-wider">Environmental Crisis</span>
          </div>
          <h1 className="text-6xl font-extrabold mb-4 tracking-tight">Plastic Pollution</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            An urgent global challenge threatening our oceans, wildlife, and human health
          </p>
        </div>
      </header>

      {/* Key Statistics */}
      <section className="max-w-6xl mx-auto px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 transform hover:scale-105 transition-transform">
              <stat.icon className={`w-10 h-10 mb-3 ${stat.color}`} />
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Trash2 className="w-8 h-8 mr-3 text-red-500" />
            Understanding the Crisis
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              Plastic pollution has become one of the most pressing environmental issues of our time. Since the 1950s, over <strong>9.2 billion tons</strong> of plastic have been produced, with only 9% being recycled. The rest ends up in landfills, incinerators, or our natural environment.
            </p>
            <p>
              Every year, approximately <strong>8 million tons</strong> of plastic waste enters our oceans from coastal nations. This is equivalent to dumping one garbage truck of plastic into the ocean every single minute. At the current rate, by 2050, there will be more plastic than fish in the ocean by weight.
            </p>
            <p>
              Plastic takes <strong>hundreds to thousands of years</strong> to decompose. Instead of biodegrading, it breaks down into smaller pieces called microplastics, which persist in the environment indefinitely and enter the food chain at every level.
            </p>
          </div>
        </div>

        {/* Environmental Impacts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Environmental & Health Impacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <impact.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                <p className="text-slate-600 leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-10 shadow-xl mb-12">
          <div className="flex items-center mb-6">
            <Recycle className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-bold">What Can We Do?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <p className="leading-relaxed">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="max-w-6xl mx-auto px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-start space-x-4">
            <Clock className="text-orange-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Deadline: March 31st</h3>
              <p className="text-slate-500">Осталось совсем немного времени на финальные правки.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-start space-x-4">
            <AlertCircle className="text-blue-500 w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Format: Interactive Page</h3>
              <p className="text-slate-500">Выбрали формат лендинга вместо постера для наглядности.</p>
            </div>
          </div>
        </div>

        {/* Contributors */}
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <div className="flex items-center mb-8">
            <Users className="w-6 h-6 mr-3 text-blue-600" />
            <h2 className="text-2xl font-bold">Project Credits / Contributions</h2>
          </div>

          <div className="space-y-6">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-100 pb-4 last:border-0 space-y-2 md:space-y-0">
                <div>
                  <h4 className="font-bold text-slate-800">{member.name}</h4>
                  <p className="text-sm text-blue-600 font-medium uppercase">{member.role}</p>
                </div>
                <p className="text-slate-600 italic md:text-right md:max-w-xs">{member.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        Built with AI for Homework: Group Project — 2026
      </footer>
    </div>
  );
};

export default App;
