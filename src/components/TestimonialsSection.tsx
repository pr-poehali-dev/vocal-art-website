
import { useRef, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ quote, author, role, avatar }: TestimonialProps) => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="pt-6">
        <div className="mb-6 text-vocal-purple">
          <Icon name="Quote" className="h-8 w-8 rotate-180" />
        </div>
        <p className="text-lg italic mb-6">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-vocal-grey">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      quote: "Школа Vocal Art полностью преобразила мой голос. Я всегда хотела петь, но боялась, что слишком поздно начинать. Елена развеяла мои страхи с первого урока!",
      author: "Марина Светлова",
      role: "Ученица, 35 лет",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Благодаря занятиям в Vocal Art мой сын не только научился петь, но и стал более уверенным в себе. Педагоги нашли подход к ребенку и сделали уроки интересными.",
      author: "Андрей Васильев",
      role: "Родитель ученика",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "За год обучения в школе я смогла расширить диапазон, научилась контролировать дыхание и даже записала свою первую песню в студии. Спасибо моему педагогу Александру!",
      author: "Ольга Петрова",
      role: "Ученица, 28 лет",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Я перепробовал несколько школ вокала, но только в Vocal Art ко мне подошли по-настоящему индивидуально. Теперь я уверенно исполняю даже сложные рок-композиции.",
      author: "Дмитрий Карпов",
      role: "Ученик, 32 года",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Отзывы <span className="text-vocal-purple">учеников</span>
          </h2>
          <p className="text-vocal-grey max-w-2xl mx-auto">
            Послушайте, что говорят наши ученики о занятиях в школе вокала VocalArt
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 space-x-4">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
