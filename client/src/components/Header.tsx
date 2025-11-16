import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-2xl font-bold text-primary">{APP_TITLE}</div>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="tel:+18005551234">
              <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
