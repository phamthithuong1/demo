import React from "react";
import { X, ExternalLink, Star, Heart, CheckCircle, Percent, AlertCircle } from "lucide-react";
import { Product } from "../types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  isFavorited,
  onToggleFavorite,
}: ProductDetailModalProps) {
  if (!product) return null;

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
    description = "Sản phẩm chính hãng chất lượng cao, đầy đủ hóa đơn bảo hành của hãng.",
  } = product;

  const discountPercent = Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  const moneySaved = originalPrice - salePrice;

  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " ₫";
  };

  const handleBuyNow = () => {
    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="product-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop blur overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Positioning Container */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6 lg:p-8">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl my-8 animate-in fade-in zoom-in-95 duration-200">
          {/* Close trigger top-right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            aria-label="Đóng bảng thông tin"
          >
            <X className="w-5 h-5 focus:outline-none" />
          </button>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Column Left: Visuals */}
            <div className="md:col-span-5 bg-gray-50 p-6 flex flex-col justify-center relative border-b md:border-b-0 md:border-r border-gray-100">
              <div 
                onClick={handleBuyNow}
                className="aspect-square rounded-2xl overflow-hidden shadow-sm relative cursor-pointer group/modalimage"
                title="Bấm để đến Shopee mua sản phẩm"
              >
                <img
                  src={image}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/modalimage:scale-105 transition-transform duration-300"
                />

                {/* Overlays */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  {shopBadge}
                </span>

                {discountPercent > 0 && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-yellow-950 font-black text-xs px-2 py-1 rounded-lg">
                    -{discountPercent}%
                  </span>
                )}
              </div>

              {/* Badges footer info */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="text-[11px] font-semibold bg-orange-50 text-[var(--color-shopee)] px-2.5 py-1 rounded-full border border-orange-100">
                  {badge}
                </span>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-100">
                  ✓ Cam kết chính hãng
                </span>
              </div>
            </div>

            {/* Column Right: Information and Affiliate Action */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-snug">
                  {name}
                </h3>

                {/* Rating line */}
                <div className="flex items-center space-x-3 mt-3">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="text-sm font-bold ml-1 text-gray-800">{rating}</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <span className="text-xs font-semibold text-gray-500">{salesCount}</span>
                  <span className="text-gray-200">|</span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Sẵn hàng
                  </span>
                </div>

                <div className="border-t border-b border-gray-100 py-4 my-4">
                  {/* Pricing Details */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-black text-red-600 tracking-tight">
                      {formatPrice(salePrice)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(originalPrice)}
                    </span>
                  </div>

                  {/* Calculations of savings */}
                  {moneySaved > 0 && (
                    <p className="text-[11px] sm:text-xs text-orange-600 font-bold mt-1.5 flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Tiết kiệm ngay {formatPrice(moneySaved)} ({discountPercent}%) so với giá gốc</span>
                    </p>
                  )}
                </div>

                {/* Product Description */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Mô Tả Sản Phẩm & Điều Kiện Ưu Đãi
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                    {description}
                  </p>
                </div>

                {/* Trust guarantee box */}
                <div className="mt-4 flex items-start gap-2 text-xs text-amber-700 bg-amber-50/70 p-3 rounded-xl border border-amber-100">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong>Lưu ý:</strong> Giá ưu đãi Shopee có thể thay đổi tùy theo thời gian diễn ra Flash Sale của Shopee hoặc số lượng mã giảm giá được tung ra. Ấn nút mua ngay để kiểm tra giá mới nhất!
                  </p>
                </div>
              </div>

              {/* Footer CTA & Save */}
              <div className="mt-8 grid grid-cols-6 gap-3">
                {/* Toggle Favorite button */}
                <button
                  onClick={() => onToggleFavorite(id)}
                  className={`col-span-2 py-3 rounded-2xl border text-sm font-semibold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                    isFavorited
                      ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
                      : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
                  <span>{isFavorited ? "Đã Lưu" : "Lưu Deal"}</span>
                </button>

                {/* Main affiliate redirect CTA */}
                <button
                  onClick={handleBuyNow}
                  className="col-span-4 bg-[var(--color-shopee)] text-white hover:bg-[var(--color-shopee-hover)] shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 font-extrabold rounded-2xl py-3 text-sm flex items-center justify-center space-x-2 cursor-pointer group"
                >
                  <span>MUA NGAY TRÊN SHOPEE</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
