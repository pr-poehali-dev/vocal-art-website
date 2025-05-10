import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Направления", path: "#directions" },
    { name: "Преподаватели", path: "#teachers" },
    { name: "Галерея", path: "#gallery" },
    { name: "Контакты", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-black/30 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-vocal-purple text-3xl">♪</span>
          <span
            className={`font-playfair font-bold text-xl ${isScrolled ? "text-vocal-dark" : "text-white"}`}
          >
            Vocal<span className="text-vocal-purple">Art</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`hover:text-vocal-purple transition-colors font-medium ${
                isScrolled ? "text-vocal-dark" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-vocal-purple transition-colors ${isScrolled ? "text-vocal-dark" : "text-white"}`}
          >
            <Icon name="MessageSquare" className="h-5 w-5" />
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-vocal-purple transition-colors ${isScrolled ? "text-vocal-dark" : "text-white"}`}
          >
            <Icon name="Send" className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-vocal-purple transition-colors ${isScrolled ? "text-vocal-dark" : "text-white"}`}
          >
            <Icon name="Phone" className="h-5 w-5" />
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-vocal-purple hover:bg-vocal-purple/90">
            Записаться на пробный урок
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "" : "text-white"}
            >
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-vocal-dark hover:text-vocal-purple transition-colors font-medium text-lg"
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4 bg-vocal-purple hover:bg-vocal-purple/90">
                Записаться на пробный урок
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
