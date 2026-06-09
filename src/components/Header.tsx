import React, { useState } from "react";
import { ShoppingBag, Search, Tag, Sparkles, Heart } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  favoritesCount: number;
  setShowFavoritesOnly: (show: boolean) => void;
  showFavoritesOnly: boolean;
}

export default function Header({
  searchQuery,
  setSearchQuery,
  favoritesCount,
  setShowFavoritesOnly,
  showFavoritesOnly,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-app-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-[var(--color-shopee)] rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-gray-900 flex items-center">
                  MILAN<span className="text-[var(--color-shopee)]">KIDS</span>
                </span>
                <span className="block text-[10px] font-semibold text-gray-400 tracking-wider uppercase">
                  Mua đúng giá • Đúng chỗ
                </span>
              </div>
            </a>

            {/* Mobile Favorites Button */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className="md:hidden p-2 rounded-xl border border-gray-100 bg-gray-50 text-gray-600 hover:bg-orange-50 hover:text-[var(--color-shopee)] hover:border-orange-200 transition-colors relative"
              title="Yêu thích của bạn"
            >
              <Heart className={`w-5 h-5 ${showFavoritesOnly ? "fill-[var(--color-shopee)] text-[var(--color-shopee)]" : ""}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>

          {/* Search Box and Favorite filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Tìm deal ngon, tên sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-shopee)]/25 focus:border-[var(--color-shopee)] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 text-xs"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Desktop Favorites Selector button */}
            <button
              onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all cursor-pointer ${
                showFavoritesOnly
                  ? "bg-orange-50 border-orange-200 text-[var(--color-shopee)]"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Heart className={`w-4 h-4 ${showFavoritesOnly ? "fill-[var(--color-shopee)] text-[var(--color-shopee)]" : ""}`} />
              <span>Đã lưu ({favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
