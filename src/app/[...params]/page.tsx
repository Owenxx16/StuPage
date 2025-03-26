import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Simplified version to avoid TypeScript build issues
export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow stu-container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Trang Đang Phát Triển</h1>
          <p className="text-gray-600 mb-8">
            Chúng tôi đang phát triển trang này. Vui lòng quay lại sau hoặc trở về trang chủ.
          </p>
          <Link href="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors">
            Về Trang Chủ
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
