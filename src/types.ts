export interface Product {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  badge: "Deal hot" | "Bán chạy" | "Giảm sâu";
  affiliateUrl: string;
  rating?: number;
  salesCount?: string;
  shopBadge?: "Mall" | "Yêu Thích" | "Chính Hãng" | "Premium";
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string; // Used to dynamic render Lucide icons
  description: string;
}
