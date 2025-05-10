
import ContactFeatures from "./contact/ContactFeatures";
import ContactFormSection from "./contact/ContactFormSection";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Левая колонка - информация */}
            <div className="p-8 md:p-12 bg-vocal-dark text-white">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                <span className="text-vocal-purple">Записаться</span> на пробный
                урок
              </h2>
              <p className="mb-8">
                Оставьте свои контактные данные, и мы свяжемся с вами для записи
                на бесплатный пробный урок вокала.
              </p>

              <ContactFeatures />
            </div>

            {/* Правая колонка - форма */}
            <div className="p-8 md:p-12">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
