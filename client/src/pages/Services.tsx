import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Wrench, Zap, MapPin, Building2, Home } from "lucide-react";
import { richlandCountyLocations, services } from "@/data/locations";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

export default function Services() {
  const cities = richlandCountyLocations.filter(loc => loc.type === 'city');
  const neighborhoods = richlandCountyLocations.filter(loc => loc.type === 'neighborhood');
  const communities = richlandCountyLocations.filter(loc => loc.type === 'community');
  const regions = richlandCountyLocations.filter(loc => loc.type === 'region');
  
  const schema = {
    ...generateLocalBusinessSchema(),
    "@type": "ProfessionalService",
    "serviceType": ["HVAC Services", "Plumbing Services", "Electrical Services"]
  };

  const serviceIcons = {
    thermometer: Thermometer,
    wrench: Wrench,
    zap: Zap,
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="HVAC, Plumbing & Electrical Services | Richland County SC"
        description="Complete HVAC, plumbing & electrical solutions for residential & commercial properties in Columbia, Irmo, Cayce, Forest Acres & all 38 Richland County locations. Emergency service available 24/7."
        keywords="HVAC services Richland County, plumbing services Columbia SC, electrical services Richland County, AC repair, furnace installation, water heater, electrical panel upgrade"
        schema={schema}
      />
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive HVAC, plumbing, and electrical services for residential and commercial properties across the Carolinas and Georgia.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons];
              
              return (
                <div key={service.title} className="max-w-5xl mx-auto">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl mb-3">{service.title}</CardTitle>
                          <CardDescription className="text-lg">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-foreground font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial & Residential */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Commercial & Residential Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve both residential homes and commercial businesses with the same level of expertise and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Residential Services</CardTitle>
                <CardDescription>
                  Trusted home services for homeowners and property managers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Single-family homes</li>
                  <li>• Apartments & condos</li>
                  <li>• Multi-family properties</li>
                  <li>• Emergency repairs</li>
                  <li>• Routine maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Commercial Services</CardTitle>
                <CardDescription>
                  Professional solutions for businesses and commercial facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Office buildings</li>
                  <li>• Retail spaces</li>
                  <li>• Industrial facilities</li>
                  <li>• Restaurants & hospitality</li>
                  <li>• Scheduled maintenance programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Richland County Locations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              All {richlandCountyLocations.length} Richland County Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              We have an office in every town, city, municipality, neighborhood, and region in Richland County, South Carolina
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Cities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Cities ({cities.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {cities.map((location) => (
                  <div 
                    key={location.name}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-card-foreground">{location.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhoods */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Neighborhoods ({neighborhoods.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {neighborhoods.map((location) => (
                  <div 
                    key={location.name}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-card-foreground">{location.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Communities */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Communities ({communities.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {communities.map((location) => (
                  <div 
                    key={location.name}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-card-foreground">{location.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regions */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Regions ({regions.length})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {regions.map((location) => (
                  <div 
                    key={location.name}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-card-foreground">{location.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Service in Your Area?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Contact us today for expert HVAC, plumbing, or electrical service
          </p>
          <a href="tel:+18005551234">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-secondary hover:bg-white/90">
              Call 1-800-555-1234
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
