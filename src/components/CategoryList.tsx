import React from "react";
import { Baby, Sparkles, Puzzle, ArrowRight } from "lucide-react";
import { Category } from "../types";

// Icon mapper to dynamically render Lucide icons in React safely
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Baby,
  Sparkles,
  Puzzle,
};

interface CategoryListProps {
  categories: Category[];
  activeCategoryId: string | null;
  onSelectCategory: (id: string | null) => void;
  products: Array<{ categoryId: string }>;
}

export default function CategoryList({
  categories,
  activeCategoryId,
  onSelectCategory,
  products,
}: CategoryListProps) {
  // Calculate product counts per category
  const getProductCount = (catId: string) => {
    return products.filter((p) => p.categoryId === catId).length;
  };

  return (
    <div id="categories-section" className="py-8 border-b border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            Khám phá danh mục nổi bật
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Tìm sản phẩm theo nhu cầu của bạn nhanh chóng
          </p>
        </div>

        {/* Clear filter / Show all button */}
        {activeCategoryId !== null && (
          <button
            onClick={() => onSelectCategory(null)}
            className="mt-2 sm:mt-0 text-sm font-semibold text-[var(--color-shopee)] hover:text-[var(--color-shopee-hover)] transition-colors self-start flex items-center gap-1 cursor-pointer"
          >
            <span>Hiển thị tất cả ({products.length} sản phẩm)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Grid of category cards - optimized for 3 columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => {
          const IconComponent = iconMap[category.iconName] || Sparkles;
          const isActive = activeCategoryId === category.id;
          const count = getProductCount(category.id);

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                isActive
                  ? "bg-white border-[var(--color-shopee)] ring-2 ring-[var(--color-shopee)]/15 shadow-md shadow-orange-500/10"
                  : "bg-white border-gray-200/80 hover:border-orange-300 hover:shadow-lg hover:shadow-gray-100"
              }`}
            >
              {/* Highlight background element for active card */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl transition-opacity duration-300 pointer-events-none ${
                  isActive ? "bg-orange-100/60" : "bg-orange-100/10 group-hover:bg-orange-100/30"
                }`}
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive
                      ? "bg-[var(--color-shopee)] text-white"
                      : "bg-orange-50 text-[var(--color-shopee)] group-hover:bg-[var(--color-shopee)] group-hover:text-white"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[var(--color-shopee)] transition-colors text-sm sm:text-base">
                    {category.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
                    {category.description.substring(0, 48)}...
                  </p>
                  <span className="inline-block mt-3 px-2 py-0.5 rounded-full bg-gray-50 text-[10px] font-bold text-gray-500 border border-gray-100">
                    {count} sản phẩm
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
