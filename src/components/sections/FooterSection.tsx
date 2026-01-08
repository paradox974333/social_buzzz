import { Button } from "@/components/ui/button";
import { Instagram, Phone, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">social<span className="text-primary">_buzzz</span></h3>
            <p className="text-muted-foreground mb-4">
              Elevating brands through creative social media management and modern web solutions.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" asChild>
                <a href="https://instagram.com/social_buzzz18" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" onClick={() => window.location.href = 'tel:9110441250'}>
                <Phone className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" onClick={() => window.open('https://wa.me/919110441250', '_blank')}>
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Account Management</li>
              <li>Content Creation</li>
              <li>Video Production</li>
              <li>Website Development</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Phone: 9110441250</li>
              <li>Instagram: @social_buzzz18</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 social_buzzz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
