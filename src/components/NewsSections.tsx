"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  isNew?: boolean;
  link: string;
  content?: string;
  imageSrc?: string;
}

const stuNewsItems: NewsItem[] = [
  {
    id: "1",
    title: "STU tổ chức Hội thảo chuyên đề \"Development of Intelligent Packaging and Packaging Trends in Thailand\"",
    date: "19/03/2025",
    isNew: true,
    link: "/vi/1/20603/stu-to-chuc-hoi-thao-chuyen-de-development-of-intelligent-packaging-and-packaging-trends-in-thailand.html",
    content: "Nhằm nâng cao kiến thức chuyên môn của giảng viên và sinh viên đồng thời mở rộng cơ hội hợp tác nghiên cứu với các...",
    imageSrc: "https://ext.same-assets.com/1236969615/3507020589.jpeg"
  },
  {
    id: "2",
    title: "Trường Đại học Công nghệ Sài Gòn (STU) đón tiếp đại diện Trường Đại học Troy (Hoa Kỳ)",
    date: "11/03/2025",
    isNew: true,
    link: "/vi/1/20580/truong-dai-hoc-cong-nghe-sai-gon-stu-don-tiep-dai-dien-truong-dai-hoc-troy-hoa-ky.html",
  },
  {
    id: "3",
    title: "Trường Đại học Công nghệ Sài Gòn tổ chức Chương trình trải nghiệm \"Một ngày làm sinh viên STU\"",
    date: "03/03/2025",
    link: "/vi/1/20568/truong-dai-hoc-cong-nghe-sai-gon-to-chuc-chuong-trinh-trai-nghiem-mot-ngay-lam-sinh-vien-stu.html",
  },
  {
    id: "4",
    title: "STU tổ chức Giải Cờ tướng Nam Khối thi đua 21 năm học 2024 -2025",
    date: "24/02/2025",
    link: "/vi/1/20534/stu-to-chuc-giai-co-tuong-nam-khoi-thi-dua-21-nam-hoc-2024-2025.html",
  }
];

const admissionsItems: NewsItem[] = [
  {
    id: "1",
    title: "Tuyển sinh đại học 2025",
    date: "02/01/2025",
    link: "/vi/1/20444/tuyen-sinh-dai-hoc-2025.html",
  },
  {
    id: "2",
    title: "STU tuyển sinh bổ sung 500 chỉ tiêu đại học hệ chính quy",
    date: "23/08/2024",
    link: "/vi/1/20147/stu-tuyen-sinh-bo-sung-500-chi-tieu-dai-hoc-he-chinh-quy.html",
  },
  {
    id: "3",
    title: "Công bố điểm chuẩn trúng tuyển đại học đợt 1 và các bước nhập học tại STU",
    date: "20/08/2024",
    link: "/vi/1/20139/cong-bo-diem-chuan-trung-tuyen-dai-hoc-dot-1-va-cac-buoc-nhap-hoc-tai-stu.html",
  }
];

const careerItems: NewsItem[] = [
  {
    id: "1",
    title: "Tổng quan về ngành Công nghệ thông tin",
    date: "18/03/2025",
    isNew: true,
    link: "/vi/1/20597/tong-quan-ve-nganh-cong-nghe-thong-tin.html",
    content: "Công nghệ thông tin (CNTT) là một trong những ngành học và lĩnh vực phát triển nhanh nhất trong thời đại số. Với vai trò..."
  },
  {
    id: "2",
    title: "Đảm bảo chất lượng và An Toàn Thực phẩm: ngành học đang thiếu nhân lực",
    date: "31/12/2024",
    link: "/vi/1/20440/dam-bao-chat-luong-va-an-toan-thuc-pham-nganh-hoc-dang-thieu-nhan-luc.html",
  },
  {
    id: "3",
    title: "Không phải cứ học Tài chính – Ngân hàng là làm việc ở Ngân hàng",
    date: "30/12/2024",
    link: "/vi/1/20434/khong-phai-cu-hoc-tai-chinh-ngan-hang-la-lam-viec-o-ngan-hang.html",
  }
];

export default function NewsSections() {
  return (
    <div className="stu-container py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* STU News Section */}
      <Card className="border-t-4 border-t-primary">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-md font-bold text-primary">
            <div className="bg-primary w-6 h-6 text-white flex items-center justify-center mr-2 rounded-sm">
              <span>E</span>
            </div>
            Tin Tức STU
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {stuNewsItems.map((item, index) => (
            <div key={item.id} className={index === 0 ? "mb-4" : "stu-news-item py-2"}>
              {index === 0 && item.imageSrc && (
                <div className="relative h-48 w-full mb-2">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <Link href={item.link}>
                <h3 className="font-medium text-primary hover:text-secondary transition-colors">
                  {item.title}
                  {item.isNew && <span className="ml-1 bg-red-500 text-white text-xs px-1 rounded">mới</span>}
                </h3>
              </Link>
              <div className="text-sm text-gray-600 mt-1">
                {item.date}
              </div>
              {item.content && (
                <p className="text-sm mt-1">{item.content}
                  <Link href={item.link} className="text-primary hover:underline ml-1">
                    Chi tiết
                  </Link>
                </p>
              )}
            </div>
          ))}
          <div className="text-right mt-4">
            <Link href="/vi/cat/261/tin-tuc-stu.html" className="text-primary hover:underline text-sm">
              Xem tất cả
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Quick Links Section */}
      <Card className="border-t-4 border-t-accent">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-md font-bold text-primary">
            <div className="bg-accent w-6 h-6 text-white flex items-center justify-center mr-2 rounded-sm">
              <span>C</span>
            </div>
            Liên Kết Thường Dùng
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-2 gap-2">
            <Link href="/vi/330/ban-do-den-stu.html" className="p-2 text-sm bg-blue-500 text-white text-center hover:bg-blue-600 transition-colors rounded">
              Bản đồ đến STU
            </Link>
            <Link href="#" className="p-2 text-sm bg-red-500 text-white text-center hover:bg-red-600 transition-colors rounded">
              Công thông tin đào tạo
            </Link>
            <Link href="#" className="p-2 text-sm bg-green-500 text-white text-center hover:bg-green-600 transition-colors rounded">
              LMS Hệ Đại Học
            </Link>
            <Link href="#" className="p-2 text-sm bg-purple-500 text-white text-center hover:bg-purple-600 transition-colors rounded">
              Tra cứu thông tin
            </Link>
            <Link href="#" className="p-2 text-sm bg-orange-500 text-white text-center hover:bg-orange-600 transition-colors rounded">
              Tra cứu dữ liệu tốt nghiệp
            </Link>
            <Link href="#" className="p-2 text-sm bg-teal-500 text-white text-center hover:bg-teal-600 transition-colors rounded">
              Tra cứu kết quả trúng tuyển
            </Link>
            <Link href="/vi/1/20068/thong-bao-thay-doi-lich-tuyen-sinh-trinh-do-thac-si-nam-2024.html" className="p-2 text-sm bg-blue-600 text-white text-center hover:bg-blue-700 transition-colors rounded">
              Tuyển sinh thạc sĩ
            </Link>
            <Link href="http://daotao2.stu.edu.vn/thongtintuyensinh/" className="p-2 text-sm bg-red-600 text-white text-center hover:bg-red-700 transition-colors rounded">
              Tuyển sinh đại học
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Card className="border-t-4 border-t-secondary">
        <CardContent className="pt-4">
          <Tabs defaultValue="admissions">
            <TabsList className="w-full">
              <TabsTrigger value="admissions" className="flex-1">Tuyển Sinh STU</TabsTrigger>
              <TabsTrigger value="career" className="flex-1">Hướng Nghiệp</TabsTrigger>
            </TabsList>

            <TabsContent value="admissions">
              {admissionsItems.map((item) => (
                <div key={item.id} className="stu-news-item py-2">
                  <Link href={item.link}>
                    <h3 className="font-medium hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.date}
                  </div>
                </div>
              ))}
              <div className="text-right mt-4">
                <Link href="/vi/cat/304/tuyen-sinh-stu.html" className="text-primary hover:underline text-sm">
                  Xem tất cả
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="career">
              {careerItems.map((item) => (
                <div key={item.id} className="stu-news-item py-2">
                  <Link href={item.link}>
                    <h3 className="font-medium hover:text-secondary transition-colors">
                      {item.title}
                      {item.isNew && <span className="ml-1 bg-red-500 text-white text-xs px-1 rounded">mới</span>}
                    </h3>
                  </Link>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.date}
                  </div>
                  {item.content && (
                    <p className="text-sm mt-1">{item.content}
                      <Link href={item.link} className="text-primary hover:underline ml-1">
                        Chi tiết
                      </Link>
                    </p>
                  )}
                </div>
              ))}
              <div className="text-right mt-4">
                <Link href="/vi/cat/325/huong-nghiep.html" className="text-primary hover:underline text-sm">
                  Xem tất cả
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
