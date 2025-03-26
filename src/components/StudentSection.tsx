"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Event {
  id: string;
  date: string;
  day: string;
  month: string;
  year: string;
  title: string;
  link: string;
}

interface Notice {
  id: string;
  title: string;
  date: string;
  isNew?: boolean;
  link: string;
}

const events: Event[] = [
  {
    id: "1",
    date: "12/03/2025",
    day: "Thứ 4",
    month: "03",
    year: "2025",
    title: "Lễ ký kết hợp tác giữa Trường Đại học Công nghệ Sài Gòn STU và Trường Đại học Thompson Rivers TRU",
    link: "/vi/2/event/98/le-ky-ket-hop-tac-giua-truong-dai-hoc-cong-nghe-sai-gon-stu-va-truong-dai-hoc-thompson-rivers-tru.html"
  },
  {
    id: "2",
    date: "01/03/2025",
    day: "Thứ 7",
    month: "03",
    year: "2025",
    title: "Chương trình trải nghiệm \"Một ngày làm sinh viên STU\"",
    link: "/vi/2/event/97/chuong-trinh-trai-nghiem-mot-ngay-lam-sinh-vien-stu.html"
  },
  {
    id: "3",
    date: "22/02/2025",
    day: "Thứ 7",
    month: "02",
    year: "2025",
    title: "Giải Cờ tướng Nam Khối thi đua 21 năm học 2024-2025",
    link: "/vi/2/event/96/giai-co-tuong-nam-khoi-thi-dua-21-nam-hoc-2024-2025.html"
  }
];

const importantNotices: Notice[] = [
  {
    id: "1",
    title: "Thông báo thực hiện khảo sát ý kiến sinh viên về hiệu quả giảng dạy học kỳ 2 năm học 2024 - 2025_Môn học thuộc giai đoạn 1 học kỳ cuối khóa",
    date: "19/03/2025",
    isNew: true,
    link: "/vi/2/20602/thong-bao-thuc-hien-khao-sat-y-kien-sinh-vien-ve-hieu-qua-giang-day-hoc-ky-2-nam-hoc-2024-2025mon-hoc-thuoc-giai-doan-1-hoc-ky-cuoi-khoa.html"
  },
  {
    id: "2",
    title: "Kết quả xử lý học vụ cuối học kỳ 1 năm học 2024 - 2025",
    date: "19/03/2025",
    isNew: true,
    link: "/vi/2/20601/ket-qua-xu-ly-hoc-vu-cuoi-hoc-ky-1-nam-hoc-2024-2025.html"
  },
  {
    id: "3",
    title: "Thông báo thay đổi phòng học vào buổi chiều Thứ Tư ngày 27/03/2025 và sáng Thứ Năm ngày 27/03/2025 đối với một số lớp học",
    date: "13/03/2025",
    isNew: true,
    link: "/vi/2/20586/thong-bao-thay-doi-phong-hoc-vao-buoi-chieu-thu-tu-ngay-26-03-2025-va-sang-thu-nam-ngay-27-03-2025-doi-voi-mot-so-lop-hoc.html"
  },
  {
    id: "4",
    title: "Lịch thi giai đoạn 1 học kỳ cuối khóa năm học 2024 - 2025_Đại học và liên thông đại học các khóa và lịch thi Tiếng Anh cuối khóa_Đợt học 10/02/2025 - 23/03/2025_Thi lần 1",
    date: "05/03/2025",
    isNew: true,
    link: "/vi/2/20571/lich-thi-giai-doan-1-hoc-ky-cuoi-khoa-nam-hoc-2024-2025dai-hoc-va-lien-thong-dai-hoc-cac-khoa-va-lich-thi-tieng-anh-cuoi-khoadot-hoc-10-02-2025-23-03-2025thi-lan-1.html"
  }
];

export default function StudentSection() {
  return (
    <div className="stu-container py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Student Notifications */}
        <div className="md:col-span-2">
          <Card className="border-t-4 border-t-accent">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-md font-bold">
                <div className="bg-accent w-6 h-6 text-white flex items-center justify-center mr-2 rounded-sm">
                  <span>S</span>
                </div>
                STU - Nơi chắp cánh những ước mơ
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <Tabs defaultValue="notices">
                <TabsList className="w-full mb-2">
                  <TabsTrigger value="notices" className="flex-1">Tin Nổi Bật</TabsTrigger>
                  <TabsTrigger value="videos" className="flex-1">Videos</TabsTrigger>
                </TabsList>

                <TabsContent value="notices">
                  <ul className="space-y-3">
                    {importantNotices.map((notice) => (
                      <li key={notice.id} className="border-b pb-2">
                        <Link href={notice.link}>
                          <h3 className="font-medium hover:text-secondary transition-colors text-sm">
                            {notice.title}
                            {notice.isNew && <span className="ml-1 bg-red-500 text-white text-xs px-1 rounded">mới</span>}
                          </h3>
                          <div className="text-xs text-gray-600 mt-1">
                            ({notice.date})
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="text-right mt-4">
                    <Link href="#" className="text-primary hover:underline text-sm">
                      Xem tất cả
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="videos">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <div className="bg-gray-200 h-24 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-xs">STU - Nơi chắp cánh những ước mơ</p>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-gray-200 h-24 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-xs">Đánh thức đam mê, Chinh phục ước mơ</p>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-gray-200 h-24 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-xs">STU - Ngày tốt nghiệp</p>
                    </div>
                  </div>
                  <div className="text-right mt-4">
                    <Link href="/vi/1/1022/hinhAnh.html" className="text-primary hover:underline text-sm">
                      Xem tất cả
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Calendar Events */}
        <div>
          <Card className="border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-md font-bold text-primary">
                Lịch Sự Kiện
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {events.map((event) => (
                <div key={event.id} className="flex mb-3 border-b pb-3 last:border-0">
                  <div className="mr-3 flex flex-col items-center justify-center bg-primary text-white p-2 rounded min-w-14 text-center">
                    <span className="text-xs">Thứ {event.day}</span>
                    <span className="text-lg font-bold">{event.date.split('/')[0]}/{event.month}</span>
                    <span className="text-xs">{event.year}</span>
                  </div>
                  <div>
                    <Link href={event.link} className="text-sm font-medium hover:text-secondary">
                      {event.title}
                    </Link>
                  </div>
                </div>
              ))}
              <div className="text-right mt-2">
                <Link href="/vi/2/event.html" className="text-primary hover:underline text-sm">
                  Xem tất cả
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
