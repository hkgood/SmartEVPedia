import { Cpu } from 'lucide-react';
import { Brand } from '../data/types';

interface SidebarProps {
  brands: Brand[];
  activeBrand: string;
  activePage: 'brand' | 'chips';
  onSelectBrand: (id: string) => void;
  onSelectChips: () => void;
}

export default function Sidebar({ 
  brands, 
  activeBrand, 
  activePage,
  onSelectBrand, 
  onSelectChips
}: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-slate-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <img src="logo.svg" alt="SmartEVPedia" className="w-10 h-10" />
          <div>
            <h1 className="font-bold text-slate-900">SmartEVPedia</h1>
            <p className="text-xs text-slate-500">智能电动车百科</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          数据导航
        </div>
        
        <button
          onClick={onSelectChips}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
            activePage === 'chips' 
              ? 'bg-slate-100 text-slate-900 font-medium' 
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Cpu className="w-5 h-5" />
          <span>芯片平台</span>
        </button>
      </nav>

      {/* Brands */}
      <div className="flex-1 overflow-y-auto p-4 pt-0">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-4">
          品牌
        </div>
        
        <div className="space-y-1">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                activeBrand === brand.id && activePage === 'brand'
                  ? 'bg-slate-100 text-slate-900 font-medium' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className={`w-6 h-6 rounded-md ${brand.color} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{brand.name[0]}</span>
              </div>
              <span className="truncate">{brand.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        <a 
          href="https://github.com/hkgood/SmartEVPedia" 
          target="_blank" 
          rel="noreferrer"
          className="text-xs text-slate-400 hover:text-slate-600"
        >
          GitHub · 提交更新
        </a>
      </div>
    </div>
  );
}
