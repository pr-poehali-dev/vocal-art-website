
import ContactFeatureItem from "./ContactFeatureItem";

const ContactFeatures = () => {
  const features = [
    {
      icon: "CheckCircle",
      title: "Бесплатный пробный урок",
      description: "Познакомьтесь с педагогом и методикой преподавания"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Программа обучения подбирается для каждого ученика"
    },
    {
      icon: "Calendar",
      title: "Гибкий график",
      description: "Выбирайте удобное время для занятий"
    }
  ];

  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <ContactFeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default ContactFeatures;
