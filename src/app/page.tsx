import PageSubHeader from "@/components/navigation/sub-header";
import TopNavigation from "@/components/navigation/top-navigation";
import AboutUs from "@/components/ui/about-us";
import ApplyNow from "@/components/ui/apply-now";
import FeaturedCourses from "@/components/ui/featured-courses";
import Footer from "@/components/ui/footer";
import HeroBanner from "@/components/ui/hero-banner";
import WhatWeOffer from "@/components/ui/what-we-offer";

export default function Home() {
  return (
    <>
      <PageSubHeader />
      <TopNavigation />
      <HeroBanner />
      <main>
        <FeaturedCourses />
        <ApplyNow />
        <WhatWeOffer />
        <AboutUs />
        {/* <ContactUs /> */}
      </main>

      <Footer />
    </>
  );
}
