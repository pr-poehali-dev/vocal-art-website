
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import DirectionsSection from "@/components/DirectionsSection";
import TeachersSection from "@/components/TeachersSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  useEffect(() => {
    // Add animation observer for scroll animations
    const addScrollObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });
      
      return observer;
    };
    
    const observer = addScrollObserver();
    
    return () => {
      if (observer) {
        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
  
  return (
    <Layout>
      <HeroSection />
      <DirectionsSection />
      <TeachersSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactForm />
    </Layout>
  );
};

export default Index;
