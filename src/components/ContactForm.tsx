import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast"; // Исправлен импорт toast
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    lessonType: "individual",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast(); // Используем хук useToast

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, lessonType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        lessonType: "individual",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-vocal-dark text-white">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                <span className="text-vocal-purple">Записаться</span> на пробный
                урок
              </h2>
              <p className="mb-8">
                Оставьте свои контактные данные, и мы свяжемся с вами для записи
                на бесплатный пробный урок вокала.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vocal-purple/20 p-2 rounded-full">
                    <Icon
                      name="CheckCircle"
                      className="text-vocal-purple h-6 w-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Бесплатный пробный урок
                    </h3>
                    <p className="text-gray-300">
                      Познакомьтесь с педагогом и методикой преподавания
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-vocal-purple/20 p-2 rounded-full">
                    <Icon name="Users" className="text-vocal-purple h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      Индивидуальный подход
                    </h3>
                    <p className="text-gray-300">
                      Программа обучения подбирается для каждого ученика
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-vocal-purple/20 p-2 rounded-full">
                    <Icon
                      name="Calendar"
                      className="text-vocal-purple h-6 w-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Гибкий график</h3>
                    <p className="text-gray-300">
                      Выбирайте удобное время для занятий
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Тип занятий</Label>
                  <RadioGroup
                    value={formData.lessonType}
                    onValueChange={handleRadioChange}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual">Индивидуальные</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="group" id="group" />
                      <Label htmlFor="group">Групповые</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение (необязательно)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о своих целях или задайте вопрос..."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-vocal-purple hover:bg-vocal-purple/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon
                        name="Loader2"
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                      Отправка...
                    </>
                  ) : (
                    "Записаться на пробный урок"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
