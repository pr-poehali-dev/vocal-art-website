import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface DirectionCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const DirectionCard = ({
  icon,
  title,
  description,
  delay,
}: DirectionCardProps) => {
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
      { threshold: 0.1 },
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
      className="animate-on-scroll hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-vocal-purple/10 hover:border-vocal-purple/40"
    >
      <CardHeader className="pb-2">
        <div className="mb-2 h-12 w-12 rounded-full bg-vocal-light flex items-center justify-center">
          <Icon name={icon} className="h-6 w-6 text-vocal-purple" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const DirectionsSection = () => {
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
      { threshold: 0.1 },
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

  const directions = [
    {
      icon: "Mic2",
      title: "Академический вокал",
      description:
        "Классическое пение, техника bel canto, работа с дыханием и опорой звука.",
    },
    {
      icon: "Music",
      title: "Эстрадный вокал",
      description:
        "Современная манера исполнения, работа с микрофоном, развитие индивидуального стиля.",
    },
    {
      icon: "Saxophone",
      title: "Джазовый вокал",
      description:
        "Импровизация, скэт, свинг, блюзовые ноты и фразировка в джазовой манере.",
    },
    {
      icon: "Podcast",
      title: "Рок-вокал",
      description:
        "Мощный звук, расширение диапазона, техники экстремального вокала безопасным способом.",
    },
    {
      icon: "Star",
      title: "Детское пение",
      description:
        "Бережное развитие детского голоса, игровые методики обучения, подготовка к выступлениям.",
    },
    {
      icon: "Mic",
      title: "Студийная запись",
      description:
        "Подготовка к записи в студии, работа над чистотой интонации и фразировкой.",
    },
  ];

  return (
    <section id="directions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Направления <span className="text-vocal-purple">обучения</span>
          </h2>
          <p className="text-vocal-grey max-w-2xl mx-auto mb-8">
            Выберите стиль, который вам ближе, или попробуйте разные
            направления, чтобы найти свое звучание. Наши преподаватели помогут
            вам в любом выбранном пути.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-vocal-light rounded-lg p-4 text-center">
              <p className="text-xl font-medium text-vocal-purple mb-1">
                1500 ₽
              </p>
              <p className="text-sm text-vocal-grey">Индивидуальное занятие</p>
              <p className="text-xs text-vocal-grey">60 минут</p>
            </div>
            <div className="bg-vocal-light rounded-lg p-4 text-center">
              <p className="text-xl font-medium text-vocal-purple mb-1">
                1200 ₽
              </p>
              <p className="text-sm text-vocal-grey">Групповое занятие</p>
              <p className="text-xs text-vocal-grey">60 минут</p>
            </div>
            <div className="bg-vocal-light rounded-lg p-4 text-center">
              <p className="text-xl font-medium text-vocal-purple mb-1">
                6000 ₽
              </p>
              <p className="text-sm text-vocal-grey">Абонемент 5 занятий</p>
              <p className="text-xs text-vocal-grey">экономия 1500 ₽</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((direction, index) => (
            <DirectionCard
              key={index}
              icon={direction.icon}
              title={direction.title}
              description={direction.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
