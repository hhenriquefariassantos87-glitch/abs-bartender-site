import { MessageCircle } from "lucide-react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <Button
        onClick={() => window.open("https://www.instagram.com/moustachedrinks", "_blank")}
        className="h-14 w-14 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 shadow-glow p-0"
        aria-label="Instagram"
      >
        <Instagram className="h-7 w-7 text-white" />
      </Button>
      <Button
        onClick={() => window.open("https://wa.me/5511943542533", "_blank")}
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1fb855] shadow-glow p-0"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-background" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
