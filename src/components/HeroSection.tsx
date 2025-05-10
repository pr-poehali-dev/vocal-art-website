
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fade-in");
    }
    
    // Add decorative music notes
    const addMusicNotes = () => {
      const notes = ["♪", "♫", "♬", "♩"];
      const container = document.querySelector(".hero-container");
      
      if (container) {
        for (let i = 0; i < 15; i++) {
          const note = document.createElement("div");
          note.textContent = notes[Math.floor(Math.random() * notes.length)];
          note.classList.add("note-decoration", "text-vocal-purple", "opacity-10");
          note.style.fontSize = `${Math.random() * 30 + 16}px`;
          note.style.left = `${Math.random() * 100}%`;
          note.style.top = `${Math.random() * 100}%`;
          note.style.transform = `rotate(${Math.random() * 360}deg)`;
          container.appendChild(note);
        }
      }
    };
    
    addMusicNotes();
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-container">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-playfair font-bold mb-6"
        >
          Найди свой <span className="text-vocal-purple">уникальный</span> голос
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in" style={{animationDelay: "300ms"}}>
          Школа вокала VocalArt поможет вам раскрыть потенциал вашего голоса,
          независимо от возраста и уровня подготовки
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "600ms"}}>
          <Button size="lg" className="bg-vocal-purple hover:bg-vocal-purple/90 text-white px-8 py-6 text-lg">
            Записаться на пробный урок
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            Узнать больше
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#directions" className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
