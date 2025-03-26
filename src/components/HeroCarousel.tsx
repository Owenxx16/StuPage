"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface SlideProps {
  imageSrc: string;
  href: string;
  alt: string;
}

const slides: SlideProps[] = [
  {
    imageSrc: "https://ext.same-assets.com/1236969615/2170519067.png",
    href: "http://stu.edu.vn/vi/1/19960/tuyen-sinh-stu-nam-2025.html",
    alt: "Tuyển sinh đại học 2025"
  },
  {
    imageSrc: "https://ext.same-assets.com/1236969615/1737394928.png",
    href: "http://stu.edu.vn/vi/1/19961/le-ky-ket-MOU-giua-truong-dai-hoc-cong-nghe-sai-gon-stu-va-truong-dai-hoc-thompson-rivers-tru.html",
    alt: "Lễ ký kết MOU giữa trường đại học công nghệ Sài Gòn STU và trường đại học Thompson Rivers TRU"
  },
  {
    imageSrc: "https://ext.same-assets.com/1236969615/3507020589.jpeg",
    href: "http://stu.edu.vn/vi/1/20603/stu-to-chuc-hoi-thao-chuyen-de-development-of-intelligent-packaging-and-packaging-trends-in-thailand.html",
    alt: "STU tổ chức hội thảo chuyên đề Development of Intelligent Packaging"
  }
];

export default function HeroCarousel() {
  return (
    <div className="relative bg-[#0e2551] py-8">
      <div className="stu-container relative">
        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="max-w-4xl mx-auto"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Link href={slide.href}>
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/30 hover:bg-white/50" />
          <CarouselNext className="right-2 bg-white/30 hover:bg-white/50" />
        </Carousel>

        {/* Hotline */}
        <div className="absolute bottom-4 left-4 text-white flex items-center">
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Hotline: 0902.992.306
          </span>
          <span className="ml-4 inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            stu.edu.vn
          </span>
        </div>

        {/* Admissions Badge */}
        <div className="absolute right-4 top-4 bg-secondary rounded-lg shadow-md p-2 text-white text-center">
          <div className="text-sm font-medium">mã trường</div>
          <div className="text-xl font-bold">DSG</div>
        </div>
      </div>
    </div>
  );
}
