import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FloatingContactButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:9110441250';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919110441250', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-2"
          >
            <Button
              onClick={handleCall}
              size="lg"
              className="rounded-full shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="rounded-full shadow-lg bg-success hover:bg-success/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={() => setShowOptions(!showOptions)}
        size="lg"
        className="rounded-full h-16 w-16 shadow-2xl animate-float"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingContactButton;
