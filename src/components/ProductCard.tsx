import React from "react";
import { Star, Heart, ExternalLink, Percent } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  key?: string | number;
  product: Product;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  isFavorited,
  onToggleFavorite,
  onViewDetails,
}: ProductCardProps) {
  const {
    id,
    name,
    originalPrice,
    salePrice,
    badge,
    image,
    rating = 4.8,
    salesCount = "Đã bán 100+",
    shopBadge = "Mall",
    affiliateUrl,
  } = product;

  // Calculate discount percentage
  const discountPercent = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

  // Format currency in VND (e.g., 29.490.000 ₫)
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + "đ";
  };

  // Badge background mapper matching sleek flat color schemes
  const badgeColors: Record<string, string> = {
    "Deal hot": "bg-[#EE4D2D] text-white",
    "Bán chạy": "bg-amber-500 text-white",
    "Giảm sâu": "bg-[#EE4D2D] text-white",
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal opening
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      id={`product-card-${id}`}
      onClick={() => onViewDetails(product)}
      className="group bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-[#EE4D2D] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 relative flex flex-col h-full cursor-pointer"
    >
      {/* Product Image Wrapper */}
      <div 
        onClick={(e) => {
          e.stopPropagation(); // Prevent modal opening
          window.open(affiliateUrl, "_blank", "noopener,noreferrer");
        }}
        className="relative aspect-square w-full overflow-hidden bg-gray-50/50 cursor-pointer group/image"
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 group-hover/image:scale-110 transition-transform duration-500"
        />

        {/* Discount Tag */}
        {discountPercent > 0 && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-950 font-bold text-[10px] px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 shadow-sm">
            <Percent className="w-2.5 h-2.5 stroke-[2.5]" />
            <span>{discountPercent}%</span>
          </div>
        )}

        {/* Quick Save Hover Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          className="absolute bottom-2 right-2 p-1.5 bg-white/90 hover:bg-white text-gray-400 hover:text-red-500 rounded-full shadow-sm backdrop-blur-xs transition-all duration-200 cursor-pointer"
          title={isFavorited ? "Xóa khỏi mục đã yêu thích" : "Lưu deal này"}
        >
          <Heart className={`w-3.5 h-3.5 transition-all ${isFavorited ? "fill-red-500 text-red-500 scale-110" : ""}`} />
        </button>
      </div>

      {/* Product Info Block */}
      <div className="p-3 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-semibold text-gray-850 group-hover:text-[#EE4D2D] transition-colors leading-tight line-clamp-2 text-xs sm:text-sm h-10 flex-1">
          {name}
        </h3>

        {/* Rating and sales stats */}
        <div className="flex items-center space-x-1.5 mt-1 py-0.5 text-[10px] text-gray-405 font-medium">
          <div className="flex items-center text-amber-500">
            <Star className="w-3 h-3 fill-amber-500" />
            <span className="font-bold ml-0.5 text-gray-700">{rating}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">{salesCount}</span>
        </div>

        {/* Pricing block - cleanly styled matching Sleek layout */}
        <div className="mt-2 bg-gray-50 p-2 rounded-lg border border-gray-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 line-through leading-none mb-0.5">
              {formatPrice(originalPrice)}
            </span>
            <span className="text-sm font-black text-[#EE4D2D] tracking-tight leading-none">
              {formatPrice(salePrice)}
            </span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="mt-2.5">
          <button
            onClick={handleBuyNow}
            className="w-full text-xs font-extrabold bg-[#EE4D2D] text-white hover:bg-[#D83C1A] rounded-lg py-2 shadow-xs transition-all flex items-center justify-center space-x-1 cursor-pointer"
          >
            <span>MUA NGAY</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
