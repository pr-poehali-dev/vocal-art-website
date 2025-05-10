
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  lessonType: string;
}

const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    lessonType: "individual",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Ваше имя"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Иван Иванов"
        required
      />

      <FormField
        label="Телефон"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+7 (___) ___-__-__"
        required
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your@email.com"
        required
      />

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
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          "Записаться на пробный урок"
        )}
      </Button>
    </form>
  );
};

// Вспомогательный компонент для полей формы
interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default ContactFormSection;
