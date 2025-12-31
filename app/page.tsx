"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

// Type definitions
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  id: number;
  step: number;
  title: string;
  description: string;
}

interface DishImage {
  id: number;
  name: string;
  description: string;
  src: string;
  alt: string;
}

export default function Home() {
  // Scroll animation hooks
  const featuresAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const dishesAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();

  // Scroll to top button state
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dữ liệu đặc điểm nổi bật
  const features: Feature[] = [
    {
      id: 1,
      title: "Nguyên liệu tự nhiên 100%",
      description: "100% tinh bột dong riềng, không phẩm màu, không chất bảo quản, đảm bảo an toàn cho sức khỏe.",
      icon: "🌱",
    },
    {
      id: 2,
      title: "Quy trình sản xuất truyền thống",
      description: "Kế thừa bí quyết làm miến truyền thống, quy trình khép kín từ thu hoạch đến thành phẩm.",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Giá trị dinh dưỡng cao",
      description: "Giàu tinh bột tự nhiên, ít calo, dễ tiêu hóa, phù hợp cho mọi lứa tuổi.",
      icon: "💪",
    },
    {
      id: 4,
      title: "Dễ chế biến, đa dạng món ăn",
      description: "Có thể chế biến thành nhiều món ngon như miến gà, miến ngan, miến xào...",
      icon: "🍜",
    },
  ];

  // Quy trình sản xuất 6 bước
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      step: 1,
      title: "Thu hoạch & Lọc tinh bột",
      description: "Thu hoạch Dong riềng, lọc lấy tinh bột rồi phơi khô, lưu trữ khô",
    },
    {
      id: 2,
      step: 2,
      title: "Ngâm & Loại tạp chất",
      description: "Dùng nguồn nước sạch để ngâm tinh bột, loại toàn bộ tạp chất",
    },
    {
      id: 3,
      step: 3,
      title: "Hỗ hóa & Trộn bột",
      description: "Hỗ hóa bột, trộn đều ủ lệ bột nấu chín với bột sống",
    },
    {
      id: 4,
      step: 4,
      title: "Tráng & Hấp bánh",
      description: "Tráng lạo mỏng thành bánh, hấp chín sau đó đem bánh đi sấy khô",
    },
    {
      id: 5,
      step: 5,
      title: "Ủ & Thái sợi",
      description: "Ủ bánh với độ ẩm từ 22-25%, thái thành các sợi nhỏ rồi đem phơi khô",
    },
    {
      id: 6,
      step: 6,
      title: "Kiểm tra & Đóng gói",
      description: "Kiểm tra để đảm bảo chất lượng, đóng gói và xuất xưởng",
    },
  ];

  // Các món ăn từ miến
  const dishes: DishImage[] = [
    {
      id: 1,
      name: "Miến Gà",
      description: "Miến gà thơm ngon, bổ dưỡng với nước dùng đậm đà",
      src: "/images/mienga.jpg",
      alt: "Miến gà",
    },
    {
      id: 2,
      name: "Miến Ngan",
      description: "Miến ngan hấp dẫn, món ăn đặc sản miền Bắc",
      src: "/images/mienngan.jpg",
      alt: "Miến ngan",
    },
    {
      id: 3,
      name: "Miến Xào",
      description: "Miến xào giòn ngon, đậm vị với rau củ tươi",
      src: "/images/mienxao.jpg",
      alt: "Miến xào",
    },
    {
      id: 4,
      name: "Miến Lươn",
      description: "Miến lươn bổ dưỡng, món ăn truyền thống",
      src: "/images/mienluon.jpg",
      alt: "Miến lươn",
    },
    {
      id: 5,
      name: "Miến Trộn",
      description: "Miến trộn thanh mát, phù hợp cho ngày hè",
      src: "/images/mientron.jpg",
      alt: "Miến trộn",
    },
    {
      id: 6,
      name: "Lẩu Miến",
      description: "Lẩu miến ấm áp, món ăn sum họp gia đình",
      src: "/images/laumien.jpg",
      alt: "Lẩu miến",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/20 via-white to-emerald-50/20 dark:from-zinc-900 dark:to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm dark:bg-zinc-900/95 border-b border-emerald-200/50 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🍜</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-500">
              Miến dong Minh Khoa
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-zinc-700 hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors font-medium">
              Đặc điểm
            </a>
            <a href="#process" className="text-zinc-700 hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors font-medium">
              Quy trình
            </a>
            <a href="#dishes" className="text-zinc-700 hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors font-medium">
              Món ăn
            </a>
            <a href="#contact" className="text-zinc-700 hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors font-medium">
              Liên hệ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
              <span className="block whitespace-nowrap">Miến dong</span>
              <span className="block text-emerald-500 dark:text-emerald-400 whitespace-nowrap">
                Tinh hoa ẩm thực Việt
              </span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Sản phẩm miến dong được làm từ <strong className="text-emerald-600 dark:text-emerald-400">100% tinh bột dong riềng</strong>,
              không phẩm màu, không chất bảo quản. Kế thừa bí quyết truyền thống của làng nghề,
              mang đến hương vị đậm đà, bổ dưỡng cho mọi bữa ăn gia đình Việt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/order"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Đặt hàng ngay
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-600 bg-white border-2 border-emerald-500 rounded-lg hover:bg-emerald-50 transition-all dark:bg-zinc-800 dark:text-emerald-400 dark:border-emerald-500 dark:hover:bg-zinc-700 hover:-translate-y-0.5"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="/images/mienngan.jpg"
              alt="Miến ngan - Đặc sản miến dong Minh Khoa"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-emerald-50/30 to-white dark:from-zinc-900 dark:to-zinc-800 py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            ref={featuresAnimation.ref}
            className={`text-center mb-12 transition-all duration-700 ${featuresAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Đặc điểm nổi bật
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Miến dong Minh Khoa tự hào mang đến sản phẩm chất lượng cao với những ưu điểm vượt trội
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`bg-gradient-to-br from-white to-emerald-50/50 dark:from-zinc-800 dark:to-emerald-900/10 rounded-xl p-6 hover:shadow-xl transition-all duration-700 border border-emerald-200/50 dark:border-zinc-700 hover:-translate-y-1 ${featuresAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: featuresAnimation.isVisible
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  {feature.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white dark:from-zinc-800 dark:to-zinc-900 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            ref={processAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${processAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Quy trình sản xuất
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Quy trình sản xuất khép kín, đảm bảo chất lượng từ nguyên liệu đến thành phẩm
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-300 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-800 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row gap-8 items-center transition-all duration-700 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } ${processAnimation.isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                    }`}
                  style={{
                    transitionDelay: processAnimation.isVisible
                      ? `${index * 150}ms`
                      : "0ms",
                  }}
                >
                  {/* Content card */}
                  <div className="w-full lg:w-5/12">
                    <div className="bg-gradient-to-br from-white to-emerald-50/50 dark:from-zinc-800 dark:to-emerald-900/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-200/50 dark:border-emerald-900 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                            {step.title}
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-6 h-6 bg-emerald-400 dark:bg-emerald-600 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg z-10"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dishes Gallery Section */}
      <section id="dishes" className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/30 to-white dark:from-zinc-900 dark:to-zinc-800 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            ref={dishesAnimation.ref}
            className={`text-center mb-12 transition-all duration-700 ${dishesAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Các món ăn từ miến
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Khám phá những món ăn ngon được chế biến từ miến dong Minh Khoa
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {dishes.map((dish, index) => (
              <div
                key={dish.id}
                className={`group relative bg-white dark:from-zinc-800 dark:to-zinc-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${dishesAnimation.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: dishesAnimation.isVisible
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <div className="aspect-square relative overflow-hidden bg-emerald-50 dark:bg-zinc-800">
                  <Image
                    src={dish.src}
                    alt={dish.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-800 border-t border-emerald-100 dark:border-zinc-700">
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
                    {dish.name}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-900 dark:to-green-900 py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div
            ref={contactAnimation.ref}
            className={`transition-all duration-700 ${contactAnimation.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                Liên hệ với chúng tôi
              </span>
            </h3>
            <p className="text-lg md:text-xl text-emerald-50 mb-8 leading-relaxed">
              Để đặt hàng hoặc tìm hiểu thêm về sản phẩm Miến dong Minh Khoa,
              vui lòng liên hệ với chúng tôi qua các kênh sau:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-2xl">📞</span>
                <span className="text-lg font-semibold">0123 456 789</span>
              </div>
              <div className="hidden sm:block text-emerald-200">•</div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-2xl">✉️</span>
                <span className="text-lg font-semibold">contact@miendong.vn</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Đặt hàng ngay
              </Link>
              <a
                href="mailto:contact@miendong.vn"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/20 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Gửi email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black text-zinc-400 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍜</span>
                <h4 className="text-xl font-bold text-white">Miến dong Minh Khoa</h4>
              </div>
              <p className="text-sm leading-relaxed">
                Sản phẩm miến dong chất lượng cao từ 100% tinh bột dong riềng,
                kế thừa bí quyết truyền thống của làng nghề Việt Nam.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Liên kết</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-emerald-400 transition-colors">
                    Đặc điểm sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-emerald-400 transition-colors">
                    Quy trình sản xuất
                  </a>
                </li>
                <li>
                  <a href="#dishes" className="hover:text-emerald-400 transition-colors">
                    Món ăn từ miến
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-emerald-400 transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Thông tin liên hệ</h5>
              <ul className="space-y-2 text-sm">
                <li>📍 Địa chỉ: [Địa chỉ của bạn]</li>
                <li>📞 Điện thoại: 0123 456 789</li>
                <li>✉️ Email: contact@miendong.vn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Miến dong Minh Khoa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${showScrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
