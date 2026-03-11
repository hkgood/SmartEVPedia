import { useState } from 'react';
import { Car, Cpu, MonitorSmartphone, ShieldCheck, ExternalLink, ChevronRight, CircleDot, History, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { Brand } from '../data/types';

export default function BrandDetail({ brand }: { brand: Brand }) {
  const [activePlatforms, setActivePlatforms] = useState<string[]>([]);

  const isPlatformActive = (platformName: string) => activePlatforms.length === 0 || activePlatforms.includes(platformName);
  const isSoftwareActive = (supportedPlatforms: string[]) => activePlatforms.length === 0 || supportedPlatforms.some(p => activePlatforms.includes(p));

  return (
    <motion.div
      key={brand.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto pb-24"
    >
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
            {brand.logoUrl ? (
              <img 
                src={brand.logoUrl} 
                alt={brand.name} 
                className="w-full h-full object-contain p-2" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = `text-2xl font-bold ${brand.color} bg-clip-text text-transparent`;
                  span.innerText = brand.name[0];
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            ) : (
              <span className={`text-2xl font-bold ${brand.color} bg-clip-text text-transparent`}>{brand.name[0]}</span>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              {brand.name}
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-lg font-medium text-slate-500 uppercase tracking-wider">
                {brand.englishName}
              </span>
              <a
                href={brand.officialLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>官网</span>
              </a>
            </div>
          </div>
        </div>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
          {brand.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Hardware Platforms */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
            <Cpu className="w-6 h-6 text-slate-400" />
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">车型硬件平台</h2>
          </div>
          
          <div className="space-y-6">
            {brand.hardwarePlatforms.map((platform, idx) => {
              const active = isPlatformActive(platform.name);
              const isHovered = activePlatforms.includes(platform.name) && activePlatforms.length === 1;

              return (
                <div 
                  key={idx} 
                  onMouseEnter={() => setActivePlatforms([platform.name])}
                  onMouseLeave={() => setActivePlatforms([])}
                  className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 cursor-default
                    ${active ? 'opacity-100' : 'opacity-40 scale-[0.98]'}
                    ${isHovered ? 'border-slate-400 shadow-md ring-1 ring-slate-400' : 'border-slate-200'}
                  `}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{platform.name}</h3>
                      <div className="text-sm font-medium text-slate-500 mt-1">{platform.releaseDate}</div>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {platform.generation}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <MonitorSmartphone className="w-3 h-3" /> 座舱芯片
                        </div>
                        <div className="text-sm font-medium text-slate-800">{platform.cockpitChip}</div>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> 智驾芯片
                        </div>
                        <div className="text-sm font-medium text-slate-800">{platform.adChip}</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <CircleDot className="w-3 h-3" /> 传感器配置
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {platform.sensors.map((sensor, sIdx) => (
                          <span key={sIdx} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md shadow-sm">
                            {sensor}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Car className="w-3 h-3" /> 搭载车型
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {platform.models.map(model => (
                          <span key={model} className="px-3 py-1 bg-slate-800 text-white text-xs font-medium rounded-full">
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Software & AD Timeline */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
            <History className="w-6 h-6 text-slate-400" />
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">软件与智驾演进史</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:via-slate-200 before:to-transparent">
              {brand.softwareHistory.map((event, idx) => {
                const active = isSoftwareActive(event.supportedPlatforms);
                const isHovered = activePlatforms.length > 0 && activePlatforms.every(p => event.supportedPlatforms.includes(p)) && activePlatforms.length === event.supportedPlatforms.length;

                return (
                  <div 
                    key={idx} 
                    className={`relative flex items-start gap-6 group transition-all duration-300 cursor-default
                      ${active ? 'opacity-100' : 'opacity-30 grayscale-[50%]'}
                    `}
                    onMouseEnter={() => setActivePlatforms(event.supportedPlatforms)}
                    onMouseLeave={() => setActivePlatforms([])}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white bg-slate-100 text-slate-500 shadow-sm shrink-0 z-10 mt-0.5 transition-colors duration-300`}>
                      <MonitorSmartphone className="w-4 h-4" />
                    </div>
                    <div className={`flex-1 bg-slate-50 p-5 rounded-xl border shadow-sm transition-all duration-300
                      ${isHovered ? 'border-slate-400 shadow-md bg-white' : 'border-slate-100 hover:border-slate-300'}
                    `}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-lg text-slate-900">{event.version}</span>
                          <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-600">
                            {event.type}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                          {event.date}
                        </span>
                      </div>
                      
                      {event.description && (
                        <p className="text-sm text-slate-700 mb-4 leading-relaxed font-medium">
                          {event.description}
                        </p>
                      )}
                      
                      <ul className="space-y-2.5">
                        {event.features.map((feature, fIdx) => {
                          const isADHighlight = feature.includes('[智驾核心]');
                          const cleanFeature = feature.replace('[智驾核心] ', '');
                          
                          return (
                            <li key={fIdx} className={`text-sm flex items-start gap-2 leading-relaxed ${isADHighlight ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
                              <ChevronRight className={`w-4 h-4 shrink-0 mt-0.5 ${isADHighlight ? 'text-blue-500' : 'text-slate-300'}`} />
                              <span>{cleanFeature}</span>
                            </li>
                          );
                        })}
                      </ul>
                      
                      {event.supportedPlatforms && event.supportedPlatforms.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-slate-200/60">
                          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                            <Layers className="w-3 h-3" /> 依赖硬件平台
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {event.supportedPlatforms.map(sp => {
                              const isPlatformHighlighted = activePlatforms.includes(sp);
                              return (
                                <span 
                                  key={sp} 
                                  className={`px-2 py-0.5 text-[10px] rounded-md font-medium transition-colors duration-300
                                    ${isPlatformHighlighted ? 'bg-slate-800 text-white' : 'bg-slate-200/50 text-slate-600'}
                                  `}
                                >
                                  {sp}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      
                      {event.detailsUrl && (
                        <div className="mt-4 pt-4 border-t border-slate-200/60">
                          <a 
                            href={event.detailsUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                          >
                            查看官方版本说明 <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
