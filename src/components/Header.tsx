"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-1">
        <div className="stu-container flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/vi/365/tap-chi-da-xuat-ban.html" className="hover:underline">
              Tạp chí khoa học và đào tạo
            </Link>
            <Link href="/vi/451/tuyen-dung.html" className="hover:underline">
              Tuyển dụng
            </Link>
            <Link href="#" className="hover:underline">
              Doanh nghiệp
            </Link>
            <Link href="#" className="hover:underline">
              Góp ý
            </Link>
          </div>
          <div className="flex space-x-2">
            <Link href="/" className="flex items-center space-x-1 hover:underline">
              <Image
                src="https://ext.same-assets.com/31895267/3672022986.png"
                alt="Tiếng Việt"
                width={16}
                height={16}
              />
              <span>Tiếng Việt</span>
            </Link>
            <Link href="/en" className="flex items-center space-x-1 hover:underline">
              <Image
                src="https://ext.same-assets.com/31895267/1621165918.png"
                alt="Tiếng Anh"
                width={16}
                height={16}
              />
              <span>Tiếng Anh</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Logo and School Code */}
      <div className="py-2">
        <div className="stu-container flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/31895267/686663040.png"
              alt="STU Logo"
              width={60}
              height={60}
              className="mr-2"
            />
            <div className="flex flex-col">
              <span className="text-[#1b436d] text-sm font-bold uppercase">Trường Đại học</span>
              <span className="text-[#c02c3c] text-xl font-bold uppercase">Công nghệ Sài Gòn</span>
            </div>
          </Link>

          <div className="flex items-center">
            <div className="flex flex-col items-end mr-4">
              <span className="text-sm">Mã Trường</span>
              <span className="bg-[#17a9d0] text-white font-bold px-3 py-1 rounded">DSG</span>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Gõ thông tin cần tìm..."
                className="pl-2 pr-8 py-1 border rounded text-sm w-40"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-primary text-white">
        <div className="stu-container">
          <ul className="flex">
            <NavItem href="/vi/1/trang-chu.html" label="Trang Chủ" />
            <NavItem href="/vi/2/gioi-thieu.html" label="Giới thiệu" />

            <DropdownNavItem label="Đào tạo">
              <DropdownMenuItem asChild>
                <Link href="/vi/302/bieu-do-giang-day-hoc-tap.html">Biểu đồ Giảng Dạy & Học Tập</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/303/cam-nang.html">Cẩm nang</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/304/chuong-trinh-dao-tao.html">Chương Trình Đào Tạo</Link>
              </DropdownMenuItem>
            </DropdownNavItem>

            <DropdownNavItem label="Tuyển sinh">
              <DropdownMenuItem asChild>
                <Link href="/vi/267/huong-nghiep.html">Hướng Nghiệp</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/268/thong-tin-tuyen-sinh-stu.html">Thông tin tuyển sinh STU</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/269/cau-hoi-tu-van.html">Câu Hỏi Tư Vấn</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/285/trac-nghiem-chon-nghe.html">Trắc Nghiệm Chọn Nghề</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/286/trac-nghiem-iq.html">Trắc Nghiệm IQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/330/ban-do-den-stu.html">Bản Đồ Đến STU</Link>
              </DropdownMenuItem>
            </DropdownNavItem>

            <DropdownNavItem label="Phòng ban">
              <DropdownMenuItem asChild>
                <Link href="/vi/370/gioi-thieu-phong.html">Phòng Đào Tạo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/364/gioi-thieu-phong.html">Phòng Hành Chính Nhân Sự Pháp Chế</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/357/gioi-thieu-phong.html">Phòng QLKH & SH</Link>
              </DropdownMenuItem>
            </DropdownNavItem>

            <DropdownNavItem label="Khoa">
              <DropdownMenuItem asChild>
                <Link href="/vi/388/gioi-thieu-khoa.html">Khoa Công Nghệ Thông Tin</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/419/gioi-thieu.html">Khoa Kỹ Thuật Công Trình</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/433/gioi-thieu.html">Khoa Công Nghệ Thực Phẩm</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/425/gioi-thieu.html">Khoa Điện - Điện Tử</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/445/gioi-thieu.html">Khoa Cơ Khí</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/395/gioi-thieu-khoa.html">Khoa Quản Trị Kinh Doanh</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/439/gioi-thieu.html">Khoa Design</Link>
              </DropdownMenuItem>
            </DropdownNavItem>

            <NavItem href="http://www.itpc.edu.vn/" label="Trung tâm" />
            <NavItem href="https://thuvien.stu.edu.vn" label="Thư viện" />
            <NavItem href="/vi/274/lien-he.html" label="Liên hệ" />

            <DropdownNavItem label="Sinh viên">
              <DropdownMenuItem asChild>
                <Link href="/vi/339/gioi-thieu.html">Đoàn Thanh Niên</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="http://daotao1.stu.edu.vn/">Cổng thông tin đào tạo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="http://daotao3.stu.edu.vn/tracuutotnghiep/">Tra cứu dữ liệu tốt nghiệp</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/350/bieu-mau.html">Biểu mẫu</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/351/huong-dan.html">Hướng dẫn</Link>
              </DropdownMenuItem>
            </DropdownNavItem>

            <DropdownNavItem label="Đoàn thể">
              <DropdownMenuItem asChild>
                <Link href="/vi/273/van-ban.html">Văn bản</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/408/gioi-thieu.html">Đảng Bộ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vi/299/cong-doan.html">Công đoàn</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://www.google.com/a/stu.edu.vn/ServiceLogin">Email: @stu.edu.vn</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="http://personnel.stu.edu.vn/">Nhân sự</Link>
              </DropdownMenuItem>
            </DropdownNavItem>

            <NavItem href="/vi/401/gioi-thieu.html" label="Tạp chí" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

interface NavItemProps {
  href: string;
  label: string;
}

function NavItem({ href, label }: NavItemProps) {
  return (
    <li>
      <Link href={href} className="stu-nav-item inline-block">
        {label}
      </Link>
    </li>
  );
}

interface DropdownNavItemProps {
  label: string;
  children: React.ReactNode;
}

function DropdownNavItem({ label, children }: DropdownNavItemProps) {
  return (
    <li>
      <DropdownMenu>
        <DropdownMenuTrigger className="stu-nav-item inline-block cursor-pointer">
          {label}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}
