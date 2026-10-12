import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Facilities from "@/components/Facilities";
import Location from "@/components/Location";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { kos, rooms } from "@/data/kos";

// Data terstruktur untuk Google (SEO lokal).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: kos.name,
  description: kos.description,
  url: kos.url,
  address: kos.address,
  priceRange: `Rp${Math.min(...rooms.map((r) => r.price)).toLocaleString("id-ID")} - Rp${Math.max(...rooms.map((r) => r.price)).toLocaleString("id-ID")} per bulan`,
};

export default function Home() {
  return (
    <>
      <main id="utama">
        <Hero />
        <Rooms />
        <Facilities />
        <Location />
        <Steps />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
