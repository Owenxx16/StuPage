"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer>
      {/* Partner Links Carousel */}
      <div className="bg-white py-4 border-t border-b">
        <div className="stu-container">
          <h3 className="text-primary font-medium mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Liên Kết
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            <PartnerLink
              href="https://www.troy.edu/"
              imageSrc="https://ext.same-assets.com/1236969615/3507020589.jpeg"
              title="Đại học Troy - Hoa kỳ"
            />
            <PartnerLink
              href="http://cesti.gov.vn/"
              imageSrc="https://ext.same-assets.com/1236969615/3507020589.jpeg"
              title="Trung tâm Thông tin KHCN TP. HCM"
            />
            <PartnerLink
              href="https://www.dost.hochiminhcity.gov.vn/"
              imageSrc="https://ext.same-assets.com/1236969615/3507020589.jpeg"
              title="Sở KHCN TP. HCM"
            />
            <PartnerLink
              href="https://moet.gov.vn/Pages/home.aspx"
              imageSrc="https://ext.same-assets.com/1236969615/3507020589.jpeg"
              title="Bộ Giáo dục & Đào tạo"
            />
            <PartnerLink
              href="http://www.vinif.org/"
              imageSrc="https://ext.same-assets.com/1236969615/3507020589.jpeg"
              title="Quỹ đổi mới sáng tạo Vingroup"
            />
            <PartnerLink
              href="https://www.most.gov.vn/vn/Pages/Trangchu.aspx"
              imageSrc="https://ext.same-assets.com/1236969615/3507020589.jpeg"
              title="Bộ KH & CN"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-primary text-white py-8">
        <div className="stu-container grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">KHOA ĐÀO TẠO</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/vi/388/gioi-thieu-khoa.html" label="Khoa Công Nghệ Thông Tin" />
              <FooterLink href="/vi/419/gioi-thieu.html" label="Khoa Kỹ Thuật Công Trình" />
              <FooterLink href="/vi/433/gioi-thieu.html" label="Khoa Công Nghệ Thực Phẩm" />
              <FooterLink href="/vi/425/gioi-thieu.html" label="Khoa Điện - Điện Tử" />
              <FooterLink href="/vi/445/gioi-thieu.html" label="Khoa Cơ Khí" />
              <FooterLink href="/vi/395/gioi-thieu-khoa.html" label="Khoa Quản Trị Kinh Doanh" />
              <FooterLink href="/vi/439/gioi-thieu.html" label="Khoa Design" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">TUYỂN SINH</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/vi/1/20068/thong-bao-thay-doi-lich-tuyen-sinh-trinh-do-thac-si-nam-2024.html" label="Trình độ thạc sĩ" />
              <FooterLink href="http://daotao2.stu.edu.vn/thongtintuyensinh/" label="Tuyển sinh đại học" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">SINH VIÊN</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="http://daotao3.stu.edu.vn/tracuutotnghiep/" label="Tra cứu dữ liệu tốt nghiệp" />
              <FooterLink href="/vi/350/bieu-mau.html" label="Biểu mẫu" />
              <FooterLink href="http://daotao1.stu.edu.vn/" label="Cổng thông tin đào tạo" />
              <FooterLink href="/vi/cat/95/nghien-cuu-khoa-hoc.html" label="Nghiên cứu khoa học" />
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-sm">TÍNH NĂNG THƯỜNG DÙNG</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink href="http://www.stu.edu.vn/site/login" label="Đăng nhập" icon="login" />
              <FooterLink href="https://www.google.com/a/stu.edu.vn/ServiceLogin" label="Email: @stu.edu.vn" icon="email" />
              <FooterLink href="https://www.google.com/a/student.stu.edu.vn/ServiceLogin" label="Email: @student.stu.edu.vn" icon="email" />
              <FooterLink href="/vi/362/tuyen-sinh.html" label="Tuyển sinh & Hướng nghiệp" />
              <FooterLink href="/vi/330/so-do-duong-di-den-stu.html" label="Đường đến STU" />
              <FooterLink href="/vi/361/hoat-dong-khcn.html" label="Nghiên cứu khoa học" />
              <FooterLink href="/vi/329/gioi-thieu.html" label="Thư viện điện tử" />
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary text-white py-4 border-t border-gray-700">
        <div className="stu-container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="https://ext.same-assets.com/31895267/3345058214.png"
              alt="STU Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <div>
              <h4 className="font-bold text-sm">Trường Đại học Công nghệ Sài Gòn - STU</h4>
              <p className="text-xs mt-1">180 Cao Lỗ, Phường 4, Quận 8, Tp. Hồ Chí Minh</p>
              <p className="text-xs mt-1">
                T: (028) 38 505 520; Fax: (84.8) 3850 6595; Email: contact@stu.edu.vn
              </p>
              <p className="text-xs mt-1">
                BẢN QUYỀN THUỘC VỀ TRƯỜNG ĐẠI HỌC CÔNG NGHỆ SÀI GÒN
              </p>
              <p className="text-xs mt-1">
                Phòng Quản lý khoa học & Sau đại học thiết kế và thực hiện
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-sm mb-2">CỘNG ĐỒNG STU</h4>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/DHCNSG" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/31895267/2186315580.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://twitter.com/DHCNSG" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/31895267/2186315580.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="http://www.youtube.com/c/ihcCngNghSiGnSTU" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://ext.same-assets.com/31895267/1783026556.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface PartnerLinkProps {
  href: string;
  imageSrc: string;
  title: string;
}

function PartnerLink({ href, imageSrc, title }: PartnerLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="border p-2 flex flex-col items-center hover:shadow-md transition-shadow rounded">
      <div className="h-12 w-full relative mb-1">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xs text-center line-clamp-2">{title}</span>
    </Link>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  icon?: "login" | "email";
}

function FooterLink({ href, label, icon }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="hover:underline flex items-center">
        {icon === "login" && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        )}
        {icon === "email" && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        <span className="inline-block">{label}</span>
      </Link>
    </li>
  );
}
