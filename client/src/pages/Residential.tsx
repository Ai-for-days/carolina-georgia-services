import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Phone, Thermometer, Wrench, Zap, CheckCircle, Clock, Shield, Star } from "lucide-react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

export default function Residential() {
  const schema = {
    ...generateLocalBusinessSchema(),
    "serviceType": ["Residential HVAC", "Residential Plumbing", "Residential Electrical"]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Residential HVAC, Plumbing and Electrical | Richland County SC"
        description="Residential HVAC, plumbing & electrical services for homeowners in Columbia, Irmo, Cayce, Forest Acres & all Richland County. AC installation, water heater repair, electrical upgrades. Same-day service available."
        keywords="residential HVAC Columbia SC, home AC installation, residential plumber Irmo, home electrical repair, furnace replacement, water heater installation, electrical panel upgrade"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Home className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Residential Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Complete Home Comfort Solutions for Richland County Families
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Service
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Home Services We Provide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Residential HVAC</CardTitle>
                <CardDescription className="text-base">
                  Keep your home comfortable all year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AC installation & replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Furnace repair & service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Heat pump systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Duct cleaning & sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Thermostat installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Indoor air quality solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Residential Plumbing</CardTitle>
                <CardDescription className="text-base">
                  Expert plumbing for your home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Water heater installation & repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Drain cleaning & repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Leak detection & repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fixture installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sewer line service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sump pump installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Residential Electrical</CardTitle>
                <CardDescription className="text-base">
                  Safe, reliable electrical service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Electrical panel upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Home generator installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lighting installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ceiling fan installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Outlet & switch repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>EV charger installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Homeowners Choose Us */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Homeowners Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Same-Day Service</h3>
              <p className="text-muted-foreground">
                Most appointments available same-day or next-day
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Licensed Technicians</h3>
              <p className="text-muted-foreground">
                All technicians are licensed, background-checked, and insured
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">
                100% satisfaction guarantee on all residential work
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Upfront Pricing</h3>
              <p className="text-muted-foreground">
                Clear, honest pricing before we start any work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Home Comfort?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Schedule your residential service today and experience the Carolina Georgia Services difference
          </p>
          <a href="tel:+18005551234">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-secondary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              Call (888) 885-7330
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
