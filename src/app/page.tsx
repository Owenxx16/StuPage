import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import NewsSections from "@/components/NewsSections";
import StudentSection from "@/components/StudentSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroCarousel />
        <NewsSections />
        <StudentSection />
      </main>
      <Footer />
    </div>
  );
}
