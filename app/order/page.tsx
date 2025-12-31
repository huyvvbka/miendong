"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  quantity: number;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  address?: string;
  quantity?: string;
}

export default function OrderPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    quantity: 1,
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Họ và tên phải có ít nhất 2 ký tự";
    }

    // Validate phone
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = "Vui lòng nhập địa chỉ giao hàng";
    } else if (formData.address.trim().length < 10) {
      newErrors.address = "Địa chỉ phải có ít nhất 10 ký tự";
    }

    // Validate quantity
    if (formData.quantity < 1) {
      newErrors.quantity = "Số lượng phải lớn hơn 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        quantity: 1,
        notes: "",
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 1 : value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/20 via-white to-emerald-50/20 dark:from-zinc-900 dark:to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm dark:bg-zinc-900/95 border-b border-emerald-200/50 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-4xl">🍜</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-500">
              Miến dong Minh Khoa
            </h1>
          </Link>
          <Link
            href="/"
            className="text-zinc-700 hover:text-emerald-500 dark:text-zinc-300 dark:hover:text-emerald-400 transition-colors font-medium"
          >
            ← Quay lại
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <div className="bg-gradient-to-br from-white to-emerald-50/50 dark:from-zinc-800 dark:to-emerald-900/10 rounded-2xl shadow-xl p-6 md:p-10 border border-emerald-200/50 dark:border-zinc-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              Đặt hàng Miến dong
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Vui lòng điền đầy đủ thông tin để chúng tôi có thể liên hệ và giao hàng
            </p>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
              <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-center">
                ✓ Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 dark:border-zinc-600 focus:ring-emerald-500"
                  } bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 transition-colors`}
                placeholder="Nguyễn Văn A"
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && (
                <p id="fullName-error" className="mt-1 text-sm text-red-500">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 dark:border-zinc-600 focus:ring-emerald-500"
                  } bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 transition-colors`}
                placeholder="0912345678"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 dark:border-zinc-600 focus:ring-emerald-500"
                  } bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 transition-colors`}
                placeholder="example@email.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Địa chỉ giao hàng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.address
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 dark:border-zinc-600 focus:ring-emerald-500"
                  } bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 transition-colors`}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                aria-required="true"
                aria-invalid={!!errors.address}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
              {errors.address && (
                <p id="address-error" className="mt-1 text-sm text-red-500">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Số lượng (kg) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.quantity
                  ? "border-red-500 focus:ring-red-500"
                  : "border-zinc-300 dark:border-zinc-600 focus:ring-emerald-500"
                  } bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 transition-colors`}
                aria-required="true"
                aria-invalid={!!errors.quantity}
                aria-describedby={errors.quantity ? "quantity-error" : undefined}
              />
              {errors.quantity && (
                <p id="quantity-error" className="mt-1 text-sm text-red-500">
                  {errors.quantity}
                </p>
              )}
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
              >
                Ghi chú (không bắt buộc)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors resize-none"
                placeholder="Thời gian giao hàng mong muốn, yêu cầu đặc biệt..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:from-emerald-600 hover:to-green-700 disabled:bg-zinc-400 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Đang xử lý..." : "Đặt hàng ngay"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}


