
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryItemProps {
  img: string;
  caption: string;
  delay: number;
}

const GalleryItem = ({ img, caption, delay }: GalleryItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          ref={itemRef}
          className="animate-on-scroll group cursor-pointer overflow-hidden rounded-lg"
        >
          <AspectRatio ratio={1}>
            <img
              src={img}
              alt={caption}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="font-medium">{caption}</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <img
          src={img}
          alt={caption}
          className="w-full h-auto rounded-md"
        />
        <p className="text-center mt-2">{caption}</p>
      </DialogContent>
    </Dialog>
  );
};

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const galleryItems = [
    {
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Отчетный концерт учеников, весна 2024"
    },
    {
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Урок эстрадного вокала"
    },
    {
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Запись в студии"
    },
    {
      img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Международный конкурс вокалистов"
    },
    {
      img: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Мастер-класс джазового вокала"
    },
    {
      img: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Детский музыкальный спектакль"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Наша <span className="text-vocal-purple">галерея</span>
          </h2>
          <p className="text-vocal-grey max-w-2xl mx-auto">
            Фотографии с концертов, конкурсов и занятий наших учеников. 
            Прикоснитесь к атмосфере нашей школы вокала.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              img={item.img}
              caption={item.caption}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
