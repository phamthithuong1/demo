import React, { useState, useEffect, useMemo } from "react";
import {
  Flame,
  Award,
  TrendingDown,
  RotateCcw,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Tag,
  ThumbsUp,
  X,
  Info
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { CATEGORIES, PRODUCTS, fetchProductsFromSheet } from "./productsData";
import { Product } from "./types";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryList from "./components/CategoryList";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";

export default function App() {
  // State definitions
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<"not_started" | "syncing" | "success" | "error">("not_started");
  const [syncMessage, setSyncMessage] = useState<string>("");

  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [badgeFilter, setBadgeFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");
  const [showNotification, setShowNotification] = useState<boolean>(true);

  // Load Google Sheets data automatically on mount
  const handleSyncFromSheet = async () => {
    setIsSyncing(true);
    setSyncStatus("syncing");
    try {
      const data = await fetchProductsFromSheet();
      if (data && data.length > 0) {
        setProducts(data);
        setSyncStatus("success");
        setSyncMessage(`Đã đồng bộ thành công ${data.length} sản phẩm từ Google Sheets!`);
      } else {
        throw new Error("Không lấy được dữ liệu sản phẩm nào từ Google Sheets.");
      }
    } catch (e: any) {
      console.error(e);
      setSyncStatus("error");
      setSyncMessage(e?.message || "Lỗi đồng bộ hóa dữ liệu từ Google Sheets");
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    handleSyncFromSheet();
  }, []);

  // Load favorites from local storage on first mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("shopee_affiliate_catalogs_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites from localStorage:", e);
    }
  }, []);

  // Save favorites to local storage when changed
  const handleToggleFavorite = (productId: string) => {
    let updated;
    if (favorites.includes(productId)) {
      updated = favorites.filter((id) => id !== productId);
    } else {
      updated = [...favorites, productId];
    }
    setFavorites(updated);
    try {
      localStorage.setItem("shopee_affiliate_catalogs_favorites", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to persist favorites to localStorage:", e);
    }
  };

  // Smooth scroll helper to navigate directly to the catalog area
  const handleScrollToCatalog = () => {
    const element = document.getElementById("catalog-showcase");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Clear all filters to default state
  const handleResetFilters = () => {
    setActiveCategoryId(null);
    setSearchQuery("");
    setBadgeFilter(null);
    setSortBy("default");
    setShowFavoritesOnly(false);
  };

  // Filter & Sort Logic
  const processedProducts = useMemo(() => {
    let result = [...products];

    // 1. Filter by category
    if (activeCategoryId) {
      result = result.filter((p) => p.categoryId === activeCategoryId);
    }

    // 2. Filter by search query (accent-insensitive custom check)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query) ||
          p.categoryId.toLowerCase().includes(query)
      );
    }

    // 3. Filter by Badge (Deal hot, Bán chạy, Giảm sâu)
    if (badgeFilter) {
      result = result.filter((p) => p.badge === badgeFilter);
    }

    // 4. Filter by Favorites Only
    if (showFavoritesOnly) {
      result = result.filter((p) => favorites.includes(p.id));
    }

    // 5. Apply sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => a.salePrice - b.salePrice);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.salePrice - a.salePrice);
    } else if (sortBy === "discount") {
      // Sort by highest discount percentage
      const getDisc = (p: Product) => ((p.originalPrice - p.salePrice) / p.originalPrice) * 100;
      result.sort((a, b) => getDisc(b) - getDisc(a));
    }

    return result;
  }, [products, activeCategoryId, searchQuery, badgeFilter, showFavoritesOnly, favorites, sortBy]);

  return (
    <div id="root-theme-wrapper" className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Main Header Component */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        favoritesCount={favorites.length}
        setShowFavoritesOnly={setShowFavoritesOnly}
        showFavoritesOnly={showFavoritesOnly}
      />

      {/* Hero Visual Section */}
      <HeroSection
        onCtaClick={() => window.open("https://s.shopee.vn/2g8c80NsQP", "_blank", "noopener,noreferrer")}
        productsCount={products.length}
      />

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Core Category Navigation Cards */}
        <CategoryList
          categories={CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={(id) => {
            setActiveCategoryId(id);
            // Auto scroll to products when category is selected
            setTimeout(handleScrollToCatalog, 150);
          }}
          products={products}
        />

        {/* Catalog Section Section */}
        <div id="catalog-showcase" className="mt-16 pt-6ScrollScroll">
          {/* Section Heading & Utility line */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-5 mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {showFavoritesOnly ? "Danh sách Deal Đã Lưu" : activeCategoryId ? `Deal Hot ${CATEGORIES.find(c => c.id === activeCategoryId)?.name}` : "Tất Cả Deal Hot Hôm Nay"}
              </h2>
            </div>

            {/* Quick Action Filters bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Badge Filters togglers */}
              <div className="flex items-center gap-1 bg-gray-50 p-1.5 rounded-xl border border-gray-200">
                <button
                  onClick={() => setBadgeFilter(badgeFilter === "Deal hot" ? null : "Deal hot")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    badgeFilter === "Deal hot"
                      ? "bg-red-500 text-white shadow-xs"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>Deal Hot</span>
                </button>
                <button
                  onClick={() => setBadgeFilter(badgeFilter === "Bán chạy" ? null : "Bán chạy")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    badgeFilter === "Bán chạy"
                      ? "bg-amber-500 text-white shadow-xs"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Bán Chạy</span>
                </button>
                <button
                  onClick={() => setBadgeFilter(badgeFilter === "Giảm sâu" ? null : "Giảm sâu")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                    badgeFilter === "Giảm sâu"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Giảm Sâu</span>
                </button>
              </div>

              {/* Sorting Down Selector */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 hover:border-gray-300 rounded-xl px-4 py-2 pr-8 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500/15 cursor-pointer"
                >
                  <option value="default">Sắp xếp: Mặc Định</option>
                  <option value="discount">Giảm nhiều nhất</option>
                  <option value="price-low">Giá: Thấp tới Cao</option>
                  <option value="price-high">Giá: Cao xuống Thấp</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Filters Status Indicator strip */}
          {(activeCategoryId || searchQuery || badgeFilter || showFavoritesOnly || sortBy !== "default") && (
            <div className="flex flex-wrap items-center gap-2 mb-6 bg-orange-50/50 p-3 rounded-2xl border border-orange-100/60">
              <span className="text-xs font-bold text-orange-850 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--color-shopee)]" />
                <span>Đang lọc theo:</span>
              </span>

              {activeCategoryId && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-100 text-[var(--color-shopee)] text-xs font-bold">
                  <span>Mục: {CATEGORIES.find((c) => c.id === activeCategoryId)?.name}</span>
                  <button onClick={() => setActiveCategoryId(null)} className="hover:text-red-650 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-100 text-[var(--color-shopee)] text-xs font-bold">
                  <span>Từ khóa: "{searchQuery}"</span>
                  <button onClick={() => setSearchQuery("")} className="hover:text-red-650 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {badgeFilter && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-100 text-[var(--color-shopee)] text-xs font-bold">
                  <span>Nhãn: {badgeFilter}</span>
                  <button onClick={() => setBadgeFilter(null)} className="hover:text-red-650 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {showFavoritesOnly && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-100 text-red-700 text-xs font-bold">
                  <span>Danh mục yêu thích ♥</span>
                  <button onClick={() => setShowFavoritesOnly(false)} className="hover:text-red-900 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {sortBy !== "default" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-100 text-[var(--color-shopee)] text-xs font-bold">
                  <span>
                    {sortBy === "discount" && "Ưu tiên giảm sâu"}
                    {sortBy === "price-low" && "Giá tăng dần"}
                    {sortBy === "price-high" && "Giá giảm dần"}
                  </span>
                  <button onClick={() => setSortBy("default")} className="hover:text-red-650 cursor-pointer">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                onClick={handleResetFilters}
                className="text-xs font-extrabold text-[var(--color-shopee)] hover:text-[var(--color-shopee-hover)] underline ml-auto flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Đặt Lại</span>
              </button>
            </div>
          )}

          {/* Product Grid Showcase container */}
          {processedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {processedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorited={favorites.includes(product.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onViewDetails={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </div>
          ) : (
            /* Empty State Container */
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[var(--color-shopee)] mx-auto mb-4 border border-orange-100">
                <Tag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Không tìm thấy deal phù hợp</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Rất tiếc, các tiêu chí lọc hiện tại không khớp với bất kỳ sản phẩm nào. Bạn hãy thử bỏ bớt lọc hoặc tìm kiếm từ khóa khác xem nhé!
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-[var(--color-shopee)] hover:bg-[var(--color-shopee-hover)] text-white text-xs font-bold rounded-xl shadow-md shadow-orange-500/10 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Hiển thị toàn bộ sản phẩm
              </button>
            </div>
          )}
        </div>
      </main>



      {/* Interactive Detail Modal portal overlay */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isFavorited={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
