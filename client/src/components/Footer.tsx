import { MapPin, Phone, Mail } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{APP_TITLE}</h3>
            <p className="text-primary-foreground/80">
              Professional HVAC, Plumbing, and Electrical services across South Carolina, North Carolina, and Georgia.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+18005551234" className="hover:text-secondary transition-colors">
                    1-800-555-1234
                  </a>
                  <p className="text-sm text-primary-foreground/70">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@carolinageorgiaservices.com" className="hover:text-secondary transition-colors">
                  info@carolinageorgiaservices.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div className="text-primary-foreground/80">
                <p>South Carolina</p>
                <p>North Carolina</p>
                <p>Georgia</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} {APP_TITLE}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
