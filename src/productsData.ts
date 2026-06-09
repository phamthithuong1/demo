import { Product, Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "girl",
    name: "Đồ dành cho bé gái",
    iconName: "Sparkles",
    description: "Váy đầm công chúa lộng lẫy, phụ kiện xinh xắn, đồ chơi sáng tạo cho bé gái."
  },
  {
    id: "boy",
    name: "Đồ dành cho bé trai",
    iconName: "Baby",
    description: "Thời trang năng động, đồ chơi vận động, xếp hình phát triển tư duy bé trai."
  },
  {
    id: "school",
    name: "Đồ chơi thông minh",
    iconName: "Puzzle",
    description: "Đồ chơi ghép hình, rubik, lego sáng tạo, robot và học cụ phát triển tư duy thông minh cho bé."
  }
];

export const PRODUCTS: Product[] = [
  // ================= BÉ TRAI (12 Products) =================
  {
    id: "boy-1",
    name: "Bộ Đồ Chơi Xếp Hình LEGO City Cảnh Sát Biển Đặc Nhiệm",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=600&auto=format&fit=crop",
    originalPrice: 750000,
    salePrice: 429000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=lego%20city%20canh%20sat",
    rating: 4.9,
    salesCount: "Đã bán 1.1k+",
    shopBadge: "Mall",
    description: "Giúp rèn luyện trí thông minh, tư duy lắp ráp logic hiệu quả dưới thương hiệu LEGO chuẩn 100% không lo độc hại."
  },
  {
    id: "boy-2",
    name: "Set Áo Thun Quần Jean Khỏe Khoắn Bé Trai 2-8 Tuổi",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop",
    originalPrice: 280000,
    salePrice: 149000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=set%20ao%20thun%20quan%20jean%20be%20trai",
    rating: 4.8,
    salesCount: "Đã bán 5.4k+",
    shopBadge: "Yêu Thích",
    description: "Vải 100% cotton mềm mại thấm hút mồ hôi cực chất, quần denim mềm co giãn giúp bé thoải mái chạy nhảy cả ngày."
  },
  {
    id: "boy-3",
    name: "Xe Ô Tô Đồ Chơi Địa Hình Điều Khiển Từ Xa Siêu Tốc Độ Vượt Vật Cản",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=600&auto=format&fit=crop",
    originalPrice: 450000,
    salePrice: 249000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=xe%20dieu%20khien%20tu%20xa%20dia%25hinh",
    rating: 4.7,
    salesCount: "Đã bán 3.8k+",
    shopBadge: "Chính Hãng",
    description: "Lốp cao su đệm khí đàn hồi cực mạnh, thích hợp đi trên mọi bề mặt cát, đá, cỏ. Tay cầm điều khiển tiện nghi."
  },
  {
    id: "boy-4",
    name: "Giày Thể Thao Trẻ Em Sneaker Có Quai Dán Phong Cách Cho Bé Trai",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=600&auto=format&fit=crop",
    originalPrice: 380000,
    salePrice: 199000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=giay%20the%20thao%20be%20trai",
    rating: 4.8,
    salesCount: "Đã bán 1.5k+",
    shopBadge: "Yêu Thích",
    description: "Đế giày cao su đúc nguyên khối chống trơn trượt hiệu quả, quai dán xỏ chân cực nhanh giúp bé tự đi học không cần trợ giúp."
  },
  {
    id: "boy-5",
    name: "Bộ Đồ Sợi Tre Sát Nách Combo 3 Bộ Siêu Mát Mùa Hè Cho Bé Trai",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop",
    originalPrice: 350000,
    salePrice: 165000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=do%20soi%20tre%20be%20trai",
    rating: 4.9,
    salesCount: "Đã bán 12.3k+",
    shopBadge: "Mall",
    description: "Chất liệu sợi tre organic mát lạnh lịm tim, kháng khuẩn tự nhiên, dẻo dai siêu bền, tuyệt vời cho những đêm hè oi ả bớt nóng."
  },
  {
    id: "boy-6",
    name: "Phao Bơi Robot Cực Ngầu Cho Bé Trai Đập Tan Nắng Hè",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop",
    originalPrice: 220000,
    salePrice: 119000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=phao%20boi%20cho%20be%25trai",
    rating: 4.8,
    salesCount: "Đã bán 890",
    shopBadge: "Chính Hãng",
    description: "Nhựa PVC dẻo cao cấp chống rò rỉ khí tốt, hình thù ngộ nghĩnh năng động giúp bé hăng say tập bơi nâng cao thể chất."
  },
  {
    id: "boy-7",
    name: "Bộ Đồ Chơi Gỗ Câu Cá Và Ghép Số Sáng Tạo Đa Năng Cho Bé",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1539627831859-a911cf04b3cd?q=80&w=600&auto=format&fit=crop",
    originalPrice: 300000,
    salePrice: 159000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=do%20choi%20cau%25ca%20go",
    rating: 4.8,
    salesCount: "Đã bán 2.1k+",
    shopBadge: "Yêu Thích",
    description: "Sản phẩm làm từ gỗ tự nhiên mài nhẵn mịn màng, giúp bé làm quen với các con số, hình khối và trải nghiệm câu cá nam nam châm hết sức kỳ thú."
  },
  {
    id: "boy-8",
    name: "Lều Bóng Lâu Đài Hoàng Tử Siêu Đẹp Dành Cho Bé Trai Quậy Nghịch",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=600&auto=format&fit=crop",
    originalPrice: 450000,
    salePrice: 219000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=leu%20bong%20co%20tich%20be%25trai",
    rating: 4.7,
    salesCount: "Đã bán 1.1k+",
    shopBadge: "Mall",
    description: "Tạo không gian vui chơi bí mật đầy tính cổ tích ngay tại phòng ngủ hoặc phòng khách. Khung lều chắc chắn, dễ lắp và gấp gọn."
  },
  {
    id: "boy-9",
    name: "Đồng Hồ Điện Tử Trẻ Em Chống Nước Siêu Bền Chống Va Đập",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=600&auto=format&fit=crop",
    originalPrice: 290000,
    salePrice: 135000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=dong%20ho%20tre%20em%20be%25trai",
    rating: 4.8,
    salesCount: "Đã bán 3.2k+",
    shopBadge: "Mall",
    description: "Chức năng hiển thị giờ điện tử siêu nét, hẹn giờ báo thức thông minh, tích hợp đèn LED ban đêm cùng độ chịu nước chuẩn đi mưa, rửa tay thoải mái."
  },
  {
    id: "boy-10",
    name: "Bộ Kiếm Và Mặt Nạ Đồ Chơi Siêu Nhân Anh Hùng Có Hộp Đèn LED",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?q=80&w=600&auto=format&fit=crop",
    originalPrice: 190000,
    salePrice: 99000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=mat%20na%20kiem%20sieu%20nhan",
    rating: 4.6,
    salesCount: "Đã bán 980+",
    shopBadge: "Chính Hãng",
    description: "Món đồ chơi đóng vai siêu anh hùng vũ trụ cực phấn khích, dập nổi khuôn nét chi tiết, phát ra âm thanh và ánh sáng dịu mắt an toàn cho bé."
  },
  {
    id: "boy-11",
    name: "Kính Bơi Trẻ Em Chống Mờ Sương Và Chống Tia UV Cao Cấp",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop",
    originalPrice: 180000,
    salePrice: 89000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=kinh%20boi%20tre%20em",
    rating: 4.9,
    salesCount: "Đã bán 4.6k+",
    shopBadge: "Yêu Thích",
    description: "Mắt kính polycarbonate trong suốt tuyệt đối không bám nước mờ sương, đệm silicon y tế khóa nước không lem mắt, dây quai co giãn linh hoạt cực êm."
  },
  {
    id: "boy-12",
    name: "Combo 5 Đôi Tất Sợi Cotton Organic Kháng Khuẩn Cho Bé Trai",
    categoryId: "boy",
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?q=80&w=600&auto=format&fit=crop",
    originalPrice: 120500,
    salePrice: 59000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=tat%20cotton%25be%20trai",
    rating: 4.9,
    salesCount: "Đã bán 15k+",
    shopBadge: "Mall",
    description: "Chất liệu cotton dệt kim dày dặn ôm khít gót chân giúp chống tuột, mồ hôi chân bay hơi nhanh chóng không lo mùi bí bách suốt ngày dài."
  },

  // ================= BÉ GÁI (12 Products) =================
  {
    id: "girl-1",
    name: "Váy Đầm Công Chúa Bé Gái Voan Kim Tuyến Đính Hoa Lấp Lánh",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=600&auto=format&fit=crop",
    originalPrice: 390000,
    salePrice: 199000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=vay%20cong%20chua%20be%25gai",
    rating: 4.9,
    salesCount: "Đã bán 4.2k+",
    shopBadge: "Mall",
    description: "Thiết kế voan lưới nhiều lớp bồng bềnh như mây, lót lớp cotton tinh khiết bảo vệ làn da nhạy cảm tuyệt đối, bé mặc lộng lẫy như nữ hoàng cổ tích."
  },
  {
    id: "girl-2",
    name: "Set Hộp Kẹp Tóc 18 Món Hàn Quốc Cao Cấp Cho Bé Gái Quà Tặng Đẹp",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    originalPrice: 150000,
    salePrice: 49000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=hop%20kep%20toc%20be%20gai",
    rating: 4.8,
    salesCount: "Đã bán 25.1k+",
    shopBadge: "Yêu Thích",
    description: "Hàng chục mẫu bờm tóc, thắt tóc, kẹp nơ bọc vải bông êm ái đi kèm hộp đựng vali hồng đáng yêu, món quà sinh nhật bé vô cùng phấn khích."
  },
  {
    id: "girl-3",
    name: "Búp Bê Công Chúa Elsa Frozen Có Khớp Linh Hoạt Phát Sáng Nhạc",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=600&auto=format&fit=crop",
    originalPrice: 250000,
    salePrice: 125000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=bup%20be%20elsa%20frozen",
    rating: 4.7,
    salesCount: "Đã bán 2.1k",
    shopBadge: "Yêu Thích",
    description: "Chất liệu nhựa nguyên sinh dày dặn, tóc tơ mượt óng ả có thể tết bím, khả năng xoay khớp tạo đa dạng tư thế khi chơi."
  },
  {
    id: "girl-4",
    name: "Bộ Đồ Bé Gái Thêu Hoa Nhí Quây Cổ Điển Thô Boil Mát Lịm",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop",
    originalPrice: 240000,
    salePrice: 119000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=bo%20do%20to%20boil%20be%20gai",
    rating: 4.8,
    salesCount: "Đã bán 5.4k+",
    shopBadge: "Chính Hãng",
    description: "Dòng thô boil mỏng nhẹ thông thoáng, bảo chứng không kích ứng da bé, thêu tỉ mỉ chuẩn từng đường kim mũi chỉ tuyệt đối phong cách vintage."
  },
  {
    id: "girl-5",
    name: "Giày Búp Bê Da Mềm Đính Nơ Óng Ánh Điệu Đà Cho Bé Gái",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
    originalPrice: 320000,
    salePrice: 169000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=giay%20bup%20be%20be%20gai",
    rating: 4.9,
    salesCount: "Đã bán 1.2k",
    shopBadge: "Mall",
    description: "Lớp da polyurethane siêu mềm không lo trầy mũi chân gót chân bé, quai chun đàn hồi ôm chân dễ đi, hoàn hảo diện cùng đầm công chúa."
  },
  {
    id: "girl-6",
    name: "Bếp Đồ Chơi Nấu Ăn Đa Năng Có Hiệu Ứng Bơm Nước Và Khói Ảo",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600&auto=format&fit=crop",
    originalPrice: 680000,
    salePrice: 395000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=bo%20do%20choi%20nau%20an%20be%20gai",
    rating: 4.8,
    salesCount: "Đã bán 950+",
    shopBadge: "Mall",
    description: "Kích thích niềm vui sáng tạo đầu bếp tương lai cho bé, kèm 42 món phụ kiện mini dĩa nồi muỗng y như thật cho bé thỏa sức hóa thân."
  },
  {
    id: "girl-7",
    name: "Bộ Đồ Chơi Trang Điểm Phấn Son Thật Vali 4 Tầng Cho Bé Gái An Toàn",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    originalPrice: 380000,
    salePrice: 189000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=do%20choi%20trang%20diem%20be%25gai",
    rating: 4.8,
    salesCount: "Đã bán 3.3k+",
    shopBadge: "Mall",
    description: "Phấn má hồng, son môi organic tự nhiên dễ dàng lau sạch bằng khăn ẩm không độc hại cho da bé. Đi kèm hộp vali kim tuyến sang trọng."
  },
  {
    id: "girl-8",
    name: "Giày Sandal Công Chúa Quai Ren Da Lộn Điệu Đà Cho Bé Gái Đi Học",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=600&auto=format&fit=crop",
    originalPrice: 290000,
    salePrice: 149000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=sandal%20cong%25chua%20be%20gai",
    rating: 4.9,
    salesCount: "Đã bán 1.4k+",
    shopBadge: "Yêu Thích",
    description: "Đế cao su nhiệt dẻo đàn hồi tốt đi siêu êm chân, quai dán đính voan ren lãng mạn nhẹ nhõm, phù hợp mọi dịp cưới hỏi tiệc tùng hoặc dạo chơi."
  },
  {
    id: "girl-9",
    name: "Set 5 Chiếc Băng Đô Cài Tóc Nơ Lớn Đáng Yêu Co Giãn Mềm Mại",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop",
    originalPrice: 110000,
    salePrice: 45000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=bang%20do%20nơ%20be%25gai",
    rating: 4.8,
    salesCount: "Đã bán 18.5k+",
    shopBadge: "Mall",
    description: "Chất thun nylon co giãn siêu mềm nhẹ, vô cùng thân thiện không lo cấn đau đầu các bé sơ sinh hay bé nhỏ, đa dạng màu pastel kẹo ngọt duyên dáng."
  },
  {
    id: "girl-10",
    name: "Bộ Đồ Chơi Luồn Hạt Vòng Cổ Sáng Tạo Bé Thỏa Sức Tự Làm",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
    originalPrice: 150000,
    salePrice: 69000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=bo%20xau%20vong%20hat%20be%25gai",
    rating: 4.7,
    salesCount: "Đã bán 4.1k+",
    shopBadge: "Chính Hãng",
    description: "Trọn bộ chứa hơn 500 hạt nhựa màu sắc, đa dạng hình hoa quả, con thú, chuỗi cước bền bỉ cho bé thỏa sứ sáng tạo xâu chuỗi trang sức độc bản."
  },
  {
    id: "girl-11",
    name: "Đầm Thô Hoa Nhí Tay Bồng Phong Cách Tiểu Thư Sành Điệu",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop",
    originalPrice: 320000,
    salePrice: 179000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=dam%20hoa%20nhi%20be%25gai",
    rating: 4.9,
    salesCount: "Đã bán 2.1k+",
    shopBadge: "Yêu Thích",
    description: "Bề mặt đầm thô mát cao cấp mát mịn thấm hút hoàn hảo, tay bồng cổ xếp ly cổ điển thướt tha quý phái cho bé gái thêm rạng ngời."
  },
  {
    id: "girl-12",
    name: "Bộ Đồ Chơi Câu Cá 2 Tầng Cỡ Lớn Có Nhạc Và Đèn Xoay 3D",
    categoryId: "girl",
    image: "https://images.unsplash.com/photo-1539627831859-a911cf04b3cd?q=80&w=600&auto=format&fit=crop",
    originalPrice: 280000,
    salePrice: 155000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=do%20choi%20cau%20ca%202%20tang",
    rating: 4.8,
    salesCount: "Đã bán 1.1k+",
    shopBadge: "Mall",
    description: "Hệ thống trục xoáy 2 tầng thông minh cùng 4 cần câu tiện lợi cho bé say sưa liên kết tranh tài câu cá với gia đình và bạn bè buổi tối."
  },

  // ================= ĐỒ DÙNG HỌC TẬP (12 Products) =================
  {
    id: "school-1",
    name: "Balo Chống Gù Lưng Học Sinh Tiểu Học Siêu Nhẹ Kháng Nước Cao Cấp",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    originalPrice: 490000,
    salePrice: 249000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=balo%20chong%20gu%20hoc%20sinh",
    rating: 4.9,
    salesCount: "Đã bán 10.5k+",
    shopBadge: "Mall",
    description: "Đệm lưng thiết kế 3D thoát khí, nâng đỡ cột sống tuyệt đối chống bò cong gù khi vật nặng đựng nhiều tập vở, vải chống nước bền dai."
  },
  {
    id: "school-2",
    name: "Hộp Bút Đa Năng 2 Ngăn Có Khoá Mật Mã Bảo Mật Chống Thất Lạc",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop",
    originalPrice: 150000,
    salePrice: 79000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=hop%20but%20mat%20ma%25da%20nang",
    rating: 4.8,
    salesCount: "Đã bán 3.4k",
    shopBadge: "Yêu Thích",
    description: "Tích hợp gọt bút chì tự động, giá đỡ sách mini thông minh, nhiều ngăn trữ bút riêng tinh xảo giúp góc bàn học bé luôn gọn gẽ tươm tất."
  },
  {
    id: "school-3",
    name: "Set 12 Bút Gel Bấm Deli Ngòi 0.5mm Chữ Viết Êm Mượt Siêu Bền",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=600&auto=format&fit=crop",
    originalPrice: 95000,
    salePrice: 42000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=but%20gel%20deli%20gire",
    rating: 4.9,
    salesCount: "Đã bán 45k+",
    shopBadge: "Mall",
    description: "Thương hiệu Deli nổi tiếng về chất mực đậm sắc, nét trơn tru không lem nhòe giấy, tay cầm lót rãnh cao su chống trượt ngón mỏi tay."
  },
  {
    id: "school-4",
    name: "Bảng Vẽ Điện Tử Tự Xóa LCD 12 Inch Cho Bé Tập Tô Vẽ Học Tập",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=600&auto=format&fit=crop",
    originalPrice: 180050,
    salePrice: 78000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=bang%20ve%20dien%20tu%20lcd%2012%20inch",
    rating: 4.7,
    salesCount: "Đã bán 22k+",
    shopBadge: "Chính Hãng",
    description: "Tiết kiệm hàng ngàn tờ giấy vẽ, kích hoạt sáng tạo viết vẽ, xóa nhanh chỉ bằng 1 nút ấn, màn hình dịu mắt bảo vệ thị lực tuyệt hảo."
  },
  {
    id: "school-5",
    name: "Đèn Học Để Bàn LED Chống Cận Thị 3 Mức Sáng Cảm Ứng LocknLock",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
    originalPrice: 650000,
    salePrice: 389000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=den%20hoc%20cam%25ung%20locklock",
    rating: 4.9,
    salesCount: "Đã bán 1.8k+",
    shopBadge: "Mall",
    description: "Ánh sáng đồng đều không nhấp nháy, tái tạo màu tự nhiên giúp mắt làm việc lâu dài không căng thẳng mệt mỏi, tích hợp pin sạc tiện lợi."
  },
  {
    id: "school-6",
    name: "Bộ Dụng Cụ Màu Vẽ Đa Năng 150 Món Hộp Gỗ Cao Cấp",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
    originalPrice: 350000,
    salePrice: 189000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=bo%20mau%20ve%20150%20mon%20hop%20go",
    rating: 4.8,
    salesCount: "Đã bán 6.8k+",
    shopBadge: "Yêu Thích",
    description: "Trọn bộ màu sáp, màu nước, bút chì màu, cọ vẽ đựng sang chảnh trong hộp gỗ tự nhiên, thôi thúc giấc mơ hội họa mỹ thuật thỏa sức bay xa."
  },
  {
    id: "school-7",
    name: "Set Bút Lông Màu Marker 2 Đầu Chuyên Nghiệp 48 Màu Deli Có Túi Đựng",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
    originalPrice: 280000,
    salePrice: 139000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=marker%20deli%2048%25mau",
    rating: 4.8,
    salesCount: "Đã bán 1.9k+",
    shopBadge: "Mall",
    description: "Hai đầu ngòi dẹt và ngòi nét nhọn đa công dụng tiện tô phủ mảng màu nhanh chóng, chất mực khô nhanh, màu loang cực đều tuyệt đẹp không lem mấp mực."
  },
  {
    id: "school-8",
    name: "Giá Đỡ Sách Chống Cận Thị Bảo Vệ Tư Thế Ngồi Đọc Học Tập Cho Bé",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
    originalPrice: 190000,
    salePrice: 95000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=gia%20do%20sach%20chong%25can%20thi",
    rating: 4.9,
    salesCount: "Đã bán 2.4k+",
    shopBadge: "Yêu Thích",
    description: "Bộ đỡ thép chắc chắn chịu được sách và máy tính bảng cỡ lớn, điều khiển góc nghiêng thông minh, giúp giữ khoảng cách an toàn tránh mỏi mắt gù cổ."
  },
  {
    id: "school-9",
    name: "Bộ Thước Kẻ Và Dụng Cụ Toán Học Compa Kim Loại Deli Hộp Thiết",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=600&auto=format&fit=crop",
    originalPrice: 85000,
    salePrice: 39000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=bo%25e-ke%20compass%20deli",
    rating: 4.8,
    salesCount: "Đã bán 14.2k+",
    shopBadge: "Mall",
    description: "Tích hợp đầy đủ thước kẻ, ê-ke, thước đo độ và compa lõi kim loại cứng cáp tinh xảo, cất gọn gàng trong hộp thiết bảo đảm độ bền lâu dài."
  },
  {
    id: "school-10",
    name: "Sổ Tay Nhật Ký Bìa Da PU Nhám A5 Cao Cấp Có Khóa Mật Mã Bảo Mật",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600&auto=format&fit=crop",
    originalPrice: 180000,
    salePrice: 99000,
    badge: "Bán chạy",
    affiliateUrl: "https://shopee.vn/search?keyword=so%20tay%20khoa%20so%20a5",
    rating: 4.8,
    salesCount: "Đã bán 890+",
    shopBadge: "Chính Hãng",
    description: "Bìa da sinh học êm ái chống thấm nước, khóa mã số kim loại đồng sang trọng bảo vệ những ghi chép riêng tư đầy cá tính của bé học sinh."
  },
  {
    id: "school-11",
    name: "Máy Gọt Bút Chi Điện Tử Pin Sạc Tự Động Thông Minh Siêu Tốc",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop",
    originalPrice: 250000,
    salePrice: 119000,
    badge: "Deal hot",
    affiliateUrl: "https://shopee.vn/search?keyword=may%20got%20but%20chi%20tu%20dong",
    rating: 4.9,
    salesCount: "Đã bán 1.1k+",
    shopBadge: "Mall",
    description: "Động cơ thế hệ mới gọt chì nhọn nhanh chỉ trong 3 giây, chế độ tự ngắt khi gọt xong tiện lợi và an toàn tuyệt đối tránh gãy vỡ ngòi chì."
  },
  {
    id: "school-12",
    name: "Set 6 Cuộn Băng Keo Trang Trí Washi Tape Sắc Màu Cho Bé Học Tập",
    categoryId: "school",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=600&auto=format&fit=crop",
    originalPrice: 75000,
    salePrice: 35000,
    badge: "Giảm sâu",
    affiliateUrl: "https://shopee.vn/search?keyword=washi%20tape%20trang%25tri%20so",
    rating: 4.8,
    salesCount: "Đã bán 8.3k+",
    shopBadge: "Yêu Thích",
    description: "Bộ keo dán giấy dệt mỏng dễ xé tay cùng họa tiết trang nhã, sắc nét giúp bé tha hồ trang trí sổ tay lưu bút học tập sinh động và cuốn hút."
  }
];

export async function fetchProductsFromSheet(): Promise<Product[]> {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ55yWtIg6LE-by9Q2qgH9s92F3D0K6PpguZTSLT1DfW71Hi1DAczRVJL4Bp33H9qhT_AY4fITuFOCQ/pub?gid=0&single=true&output=csv";
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Không thể tải dữ liệu từ Google Sheets: " + response.statusText);
  }
  
  const csvText = await response.text();
  
  // Custom RFC-compliant CSV parser to handle nested double quotes and commas
  const parseCSV = (text: string): string[][] => {
    const result: string[][] = [];
    let row: string[] = [];
    let currentVal = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          currentVal += '"';
          i++; // skip next quote
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        row.push(currentVal.trim());
        currentVal = "";
      } else if ((char === '\r' || char === '\n') && !insideQuotes) {
        if (char === '\r' && nextChar === '\n') {
          i++; // skip \n
        }
        row.push(currentVal.trim());
        result.push(row);
        row = [];
        currentVal = "";
      } else {
        currentVal += char;
      }
    }
    if (currentVal || row.length > 0) {
      row.push(currentVal.trim());
      result.push(row);
    }
    return result;
  };

  const rows = parseCSV(csvText);
  if (rows.length <= 1) {
    throw new Error("Không tìm thấy dữ liệu hợp lệ trong Google Sheet.");
  }

  // Column definitions (fallbacks set based on Sheet format)
  let colCategory = 0;
  let colName = 1;
  let colAffiliate = 2;
  let colImage = 3;
  let colOriginalPrice = 4;
  let colSalePrice = 5;

  const headers = rows[0].map(h => h.toLowerCase().trim());
  headers.forEach((h, index) => {
    if (h.includes("hạng mục") || h.includes("category")) colCategory = index;
    else if (h.includes("tên sản phẩm") || h.includes("tên")) colName = index;
    else if (h.includes("link") || h.includes("affilate") || h.includes("affiliate")) colAffiliate = index;
    else if (h.includes("ảnh") || h.includes("image")) colImage = index;
    else if (h.includes("giá gốc") || h.includes("gốc")) colOriginalPrice = index;
    else if (h.includes("giá ưu đãi") || h.includes("ưu đãi")) colSalePrice = index;
  });

  const parsedProducts: Product[] = [];
  let lastActiveCategory: "boy" | "girl" | "school" = "boy";

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (row.length < 2) continue; // skip invalid empty lines

    const categoryStr = row[colCategory] || "";
    const name = row[colName] || "";
    const affiliateUrl = row[colAffiliate] || "";
    const image = row[colImage] || "";
    const originalPriceStr = row[colOriginalPrice] || "";
    const salePriceStr = row[colSalePrice] || "";

    // If name is empty, skip this line
    if (!name.trim()) continue;

    // Check if category is declared in this row
    if (categoryStr.trim() !== "") {
      const norm = categoryStr.toLowerCase().trim();
      if (norm.includes("bé trai")) {
        lastActiveCategory = "boy";
      } else if (norm.includes("bé gái")) {
        lastActiveCategory = "girl";
      } else if (norm.includes("học tập") || norm.includes("đồ dùng") || norm.includes("đồ chơi") || norm.includes("thông minh")) {
        lastActiveCategory = "school";
      }
    }

    // Parse prices (remove all non-digit characters)
    const originalPrice = parseInt(originalPriceStr.replace(/\D/g, ""), 10) || 0;
    const salePrice = parseInt(salePriceStr.replace(/\D/g, ""), 10) || 0;

    // Calculate discount percent dynamically
    const discountPercent = originalPrice > salePrice && originalPrice > 0
      ? Math.round(((originalPrice - salePrice) / originalPrice) * 100)
      : 0;

    // Determine badge based on discount
    let badge: "Giảm sâu" | "Deal hot" | "Bán chạy" = "Bán chạy";
    if (discountPercent >= 40) {
      badge = "Giảm sâu";
    } else if (discountPercent >= 20) {
      badge = "Deal hot";
    }

    // Determine stable randomized properties
    const rating = parseFloat((4.7 + ((name.length % 3) * 0.1)).toFixed(1));
    const salesCount = "Đã bán " + (100 + (name.length * 7) % 2000) + "+";
    const shopBadge = name.length % 3 === 0 ? "Mall" : name.length % 3 === 1 ? "Yêu Thích" : "Chính Hãng";
    const description = "Sản phẩm tuyển chọn chất lượng cao từ các Shop uy tín trên Shopee.";

    parsedProducts.push({
      id: `sheet-${r}`,
      name: name,
      categoryId: lastActiveCategory,
      image: image || "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600&auto=format&fit=crop",
      originalPrice: originalPrice,
      salePrice: salePrice,
      badge: badge,
      affiliateUrl: affiliateUrl || "https://shopee.vn",
      rating: rating,
      salesCount: salesCount,
      shopBadge: shopBadge as any,
      description: description
    });
  }

  return parsedProducts;
}
