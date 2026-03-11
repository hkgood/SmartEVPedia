import { useState } from 'react';
import { Cpu, Zap, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { ChipPlatform } from '../data/types';

interface ChipPlatformsProps {
  chips: ChipPlatform[];
}

export default function ChipPlatforms({ chips }: ChipPlatformsProps) {
  const [filter, setFilter] = useState<'all' | '智驾芯片' | '座舱芯片'>('all');
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);

  const filteredChips = filter === 'all' ? chips : chips.filter(c => c.type === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto pb-24"
    >
      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Cpu className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              芯片平台
            </h1>
            <p className="text-lg text-slate-500 mt-1">
              智能电动车核心芯片参数与规格
            </p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-8">
        {(['all', '智驾芯片', '座舱芯片'] as const).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === type
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {type === 'all' ? '全部' : type}
          </button>
        ))}
      </div>

      {/* Chips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChips.map((chip) => (
          <div
            key={chip.id}
            onMouseEnter={() => setHoveredChip(chip.id)}
            onMouseLeave={() => setHoveredChip(null)}
            className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
              hoveredChip === chip.id
                ? 'border-slate-400 shadow-md'
                : 'border-slate-200'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{chip.name}</h3>
                <p className="text-sm text-slate-500">{chip.manufacturer}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                chip.type === '智驾芯片' 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'bg-purple-100 text-purple-600'
              }`}>
                {chip.type}
              </span>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-50 p-3 rounded-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> 算力
                </div>
                <div className="text-sm font-medium text-slate-800">{chip.toiPS}</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Layers className="w-3 h-3" /> 工艺
                </div>
                <div className="text-sm font-medium text-slate-800">{chip.process}</div>
              </div>
            </div>

            {/* Specs */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                规格
              </div>
              <p className="text-sm text-slate-600">{chip.specs}</p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                特性
              </div>
              <div className="flex flex-wrap gap-2">
                {chip.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Used By */}
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Cpu className="w-3 h-3" /> 搭载车型
              </div>
              <div className="flex flex-wrap gap-2">
                {chip.usedBy.map((model, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-slate-800 text-white text-xs font-medium rounded-full"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
