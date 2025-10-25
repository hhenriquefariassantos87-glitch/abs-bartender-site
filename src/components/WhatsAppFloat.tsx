import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <Button
      onClick={() => window.open("https://wa.me/5511982844587", "_blank")}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1fb855] shadow-glow z-50 p-0"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-background" />
    </Button>
  );
};

export default WhatsAppFloat;
