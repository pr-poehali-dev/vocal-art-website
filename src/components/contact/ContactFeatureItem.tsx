
import { ReactNode } from "react";
import Icon from "@/components/ui/icon";

interface ContactFeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const ContactFeatureItem = ({ icon, title, description }: ContactFeatureItemProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-vocal-purple/20 p-2 rounded-full">
        <Icon name={icon} className="text-vocal-purple h-6 w-6" />
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ContactFeatureItem;
