import { useState, useMemo } from "react";
import { Menu } from "lucide-react";
import { brands, chipPlatforms } from "./data/brands";
import Sidebar from "./components/Sidebar";
import BrandDetail from "./components/BrandDetail";
import ChipPlatforms from "./components/ChipPlatforms";

type PageType = 'brand' | 'chips';

export default function App() {
  const [activeBrandId, setActiveBrandId] = useState(brands[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageType>('brand');

  const activeBrand = useMemo(
    () => brands.find((b) => b.id === activeBrandId) || brands[0],
    [activeBrandId]
  );

  const handleSelectBrand = (id: string) => {
    setActiveBrandId(id);
    setActivePage('brand');
    setIsSidebarOpen(false);
  };

  const handleSelectChips = () => {
    setActivePage('chips');
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar
          brands={brands}
          activeBrand={activeBrandId}
          activePage={activePage}
          onSelectBrand={handleSelectBrand}
          onSelectChips={handleSelectChips}
        />
      </div>

      <main className="flex-1 overflow-y-auto w-full h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="font-bold text-lg text-slate-900">SmartEVPedia</div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-8 lg:p-12">
          {activePage === 'brand' ? (
            <BrandDetail brand={activeBrand} />
          ) : (
            <ChipPlatforms chips={chipPlatforms} />
          )}
        </div>
      </main>
    </div>
  );
}
