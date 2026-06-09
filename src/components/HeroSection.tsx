import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
  productsCount: number;
}

export default function HeroSection({ onCtaClick, productsCount }: HeroSectionProps) {
  const [bannerImage, setBannerImage] = useState<string>("https://i.postimg.cc/kX9BcqCk/image.png");

  // Load persisted custom banner on mount if it exists
  useEffect(() => {
    try {
      const saved = localStorage.getItem("shopee_affiliate_custom_hero_banner");
      if (saved) {
        setBannerImage(saved);
      }
    } catch (e) {
      console.error("Failed to load custom banner:", e);
    }
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full cursor-pointer overflow-hidden bg-[#e5c3b2] hover:opacity-99 transition-all"
      onClick={onCtaClick}
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-6 md:py-8">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/7.5] lg:aspect-[16/6.5] w-full overflow-hidden sm:rounded-3xl shadow-xl border border-white/10 group bg-[#e5c2b1]">
          
          <img
            src={bannerImage}
            alt="BST Đầm Hè Bé Gái"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-center select-none transform transition-transform duration-700 group-hover:scale-[1.015]"
          />
          
          {/* Elegant overlay hint for user instruction */}
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center pointer-events-none">
            <span className="bg-[#EE4D2D] text-white border border-[#EE4D2D]/20 text-xs sm:text-sm font-bold tracking-wide px-5 py-2.5 rounded-full shadow-xl flex items-center gap-1.5 transition-all duration-300 transform group-hover:scale-105">
              <span>Xem ngay BST Deal Hot</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          {/* Constant visual hint on mobile */}
          <div className="absolute bottom-3 right-3 sm:hidden bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <span>Chạm để chọn deal</span>
            <ArrowRight className="w-3 h-3 text-yellow-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

