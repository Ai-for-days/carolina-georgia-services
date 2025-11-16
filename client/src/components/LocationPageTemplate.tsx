import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Thermometer, Wrench, Zap, CheckCircle } from "lucide-react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

interface LocationPageProps {
  locationName: string;
  locationType: string;
  nearbyLocations?: string[];
  landmarks?: string[];
}

export default function LocationPageTemplate({ 
  locationName, 
  locationType,
  nearbyLocations = [],
  landmarks = []
}: LocationPageProps) {
  const schema = generateLocalBusinessSchema(locationName);

  return (
    <div className="min-h-screen">
      <SEO 
        title={`HVAC, Plumbing & Electrical Services in ${locationName}, SC | Carolina Georgia Services`}
        description={`Expert HVAC, plumbing & electrical service in ${locationName}, SC. Emergency repairs, installations, maintenance. 24/7 availability. Licensed & insured. Call for same-day service!`}
        keywords={`HVAC ${locationName}, plumber ${locationName} SC, electrician ${locationName}, AC repair ${locationName}, emergency HVAC ${locationName}, plumbing services ${locationName}`}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HVAC, Plumbing & Electrical Services in {locationName}, SC
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              Trusted local service for your {locationType} community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-800-555-1234
                </Button>
              </a>
            </div>
            <p className="mt-4 text-lg text-primary-foreground/80">
              <Clock className="w-5 h-5 inline mr-2" />
              24/7 Emergency Service Available
            </p>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete Home & Business Services in {locationName}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional HVAC, plumbing, and electrical solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">HVAC Services</CardTitle>
                <CardDescription className="text-base">
                  Heating & cooling solutions for {locationName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AC installation & repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Furnace service & replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Heat pump systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Emergency HVAC service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Preventive maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Plumbing Services</CardTitle>
                <CardDescription className="text-base">
                  Expert plumbing for {locationName} homes & businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Emergency plumbing repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Water heater service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Drain cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Leak detection & repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sewer line service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Electrical Services</CardTitle>
                <CardDescription className="text-base">
                  Licensed electrical work in {locationName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Electrical repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Panel upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Generator installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lighting installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Emergency electrical service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Location */}
      <section className="py-16 md:py-20 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why {locationName} Residents Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Local Experts</h3>
              <p className="text-muted-foreground">
                We know {locationName} and serve your community with pride
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Response</h3>
              <p className="text-muted-foreground">
                Quick service to {locationName} - usually within 60 minutes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Guaranteed Work</h3>
              <p className="text-muted-foreground">
                100% satisfaction guarantee on all services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Frequently Asked Questions - {locationName}
            </h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you serve {locationName}, SC?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! We proudly serve {locationName} and all of Richland County with complete HVAC, plumbing, and electrical services. We're available 24/7 for emergency service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How quickly can you get to {locationName}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For emergency service in {locationName}, we typically arrive within 60 minutes. For scheduled appointments, we offer same-day and next-day service options.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What areas near {locationName} do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    In addition to {locationName}, we serve all 38 Richland County locations including Columbia, Irmo, Cayce, Forest Acres, Blythewood, and many more communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Service in {locationName}?
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Call now for fast, professional HVAC, plumbing, or electrical service
          </p>
          <a href="tel:+18005551234">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-secondary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              Call 1-800-555-1234
            </Button>
          </a>
          <p className="mt-4 text-lg">
            <Clock className="w-5 h-5 inline mr-2" />
            24/7 Emergency Service
          </p>
        </div>
      </section>
    </div>
  );
}
