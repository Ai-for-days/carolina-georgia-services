import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Thermometer, Wrench, Zap, MapPin, Clock, Shield } from "lucide-react";
import { richlandCountyLocations } from "@/data/locations";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

export default function Home() {
  const cities = richlandCountyLocations.filter(loc => loc.type === 'city');
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="HVAC, Plumbing and Electrical Services | Richland County SC | Carolina Georgia Services"
        description="24/7 emergency HVAC, plumbing & electrical service across all 38 Richland County locations including Columbia, Irmo, Cayce, Forest Acres. Licensed, insured, same-day appointments. Call now!"
        keywords="HVAC Richland County, plumber Columbia SC, electrician Richland County, emergency HVAC, 24/7 plumber, AC repair Columbia, heating service SC"
        schema={generateLocalBusinessSchema()}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <picture>
            <source srcSet="/hero-hvac.webp" type="image/webp" />
            <img 
              src="/hero-hvac.jpg" 
              alt="HVAC Service"
              loading="lazy"
              decoding="async" 
            className="w-full h-full object-cover"
          />
          </picture>
        </div>
        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expert HVAC, Plumbing and Electrical Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Serving every community across South Carolina, North Carolina, and Georgia with professional, reliable service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Our Services
                </Button>
              </Link>
              <a href="tel:+18005551234">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white">
                  Call (888) 885-7330
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">HVAC Services</CardTitle>
                <CardDescription className="text-base">
                  Complete heating, ventilation, and air conditioning solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AC Installation and Repair</li>
                  <li>• Heating System Service</li>
                  <li>• Preventive Maintenance</li>
                  <li>• Emergency 24/7 Service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Plumbing Services</CardTitle>
                <CardDescription className="text-base">
                  Expert plumbing solutions for all your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Leak Detection and Repair</li>
                  <li>• Drain Cleaning</li>
                  <li>• Water Heater Service</li>
                  <li>• Pipe Installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Electrical Services</CardTitle>
                <CardDescription className="text-base">
                  Licensed electricians for safe, reliable power
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Electrical Repairs</li>
                  <li>• Panel Upgrades</li>
                  <li>• Lighting Installation</li>
                  <li>• Generator Installation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Carolina Georgia Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">24/7 Emergency Service</h3>
              <p className="text-muted-foreground">
                We're available around the clock for your urgent needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Licensed and Insured</h3>
              <p className="text-muted-foreground">
                Fully certified professionals you can trust
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Local Expertise</h3>
              <p className="text-muted-foreground">
                Offices in every town and city we serve
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Richland County Locations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Serving Richland County, South Carolina</h2>
            <p className="text-lg text-muted-foreground">
              We have offices in every community across Richland County
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((location) => (
                <div 
                  key={location.name}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-medium text-card-foreground">{location.name}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All {richlandCountyLocations.length} Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Contact us today for a free quote or emergency service
          </p>
          <a href="tel:+18005551234">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-secondary hover:bg-white/90">
              Call (888) 885-7330
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
