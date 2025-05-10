
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface TeacherCardProps {
  img: string;
  name: string;
  position: string;
  experience: string;
  specialization: string[];
  delay: number;
}

const TeacherCard = ({ img, name, position, experience, specialization, delay }: TeacherCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Card 
      ref={cardRef}
      className="animate-on-scroll overflow-hidden group"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-vocal-purple shadow-lg">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-1">{name}</h3>
            <p className="text-vocal-grey mb-2">{position}</p>
            <p className="text-sm mb-3">Опыт работы: {experience}</p>
            <div className="flex flex-wrap gap-2">
              {specialization.map((spec, i) => (
                <Badge key={i} variant="outline" className="bg-vocal-light text-vocal-purple">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeachersSection = () => {
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

  const teachers = [
    {
      img: "https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Елена Соколова",
      position: "Руководитель школы, педагог по вокалу",
      experience: "15 лет",
      specialization: ["Эстрадный вокал", "Джаз", "Академический вокал"]
    },
    {
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Александр Петров",
      position: "Педагог по вокалу",
      experience: "12 лет",
      specialization: ["Рок-вокал", "Поп-музыка", "Актерское мастерство"]
    },
    {
      img: "https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      name: "Мария Иванова",
      position: "Педагог по вокалу",
      experience: "8 лет",
      specialization: ["Детский вокал", "Народное пение", "Эстрадный вокал"]
    }
  ];

  return (
    <section id="teachers" className="py-20">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Наши <span className="text-vocal-purple">преподаватели</span>
          </h2>
          <p className="text-vocal-grey max-w-2xl mx-auto">
            Наши педагоги — профессиональные вокалисты и музыканты с большим опытом
            выступлений и преподавания. Они помогут раскрыть ваш уникальный голос.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              img={teacher.img}
              name={teacher.name}
              position={teacher.position}
              experience={teacher.experience}
              specialization={teacher.specialization}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
