import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Phone, Thermometer, Wrench, Zap, CheckCircle, Clock, Shield, Award } from "lucide-react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

export default function Commercial() {
  const schema = {
    ...generateLocalBusinessSchema(),
    "@type": "ProfessionalService",
    "serviceType": ["Commercial HVAC", "Commercial Plumbing", "Commercial Electrical"],
    "areaServed": {
      "@type": "City",
      "name": "Columbia",
      "containedIn": {
        "@type": "State",
        "name": "South Carolina"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Commercial HVAC, Plumbing & Electrical | Columbia SC | Richland County"
        description="Commercial HVAC, plumbing & electrical services for restaurants, offices, retail, and industrial facilities in Columbia SC and Richland County. Preventive maintenance programs, emergency service, installations."
        keywords="commercial HVAC Columbia SC, commercial plumber Richland County, commercial electrician Columbia, restaurant HVAC service, office building plumbing, retail electrical contractor, industrial plumbing"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Building2 className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Commercial Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional HVAC, Plumbing & Electrical Solutions for Your Business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Get a Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized commercial services for businesses across Richland County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Restaurants & Hospitality', items: ['Commercial kitchens', 'Walk-in coolers', 'Grease traps', 'Hood systems'] },
              { title: 'Office Buildings', items: ['Multi-zone HVAC', 'Restroom plumbing', 'Lighting systems', 'Conference rooms'] },
              { title: 'Retail Spaces', items: ['Storefront HVAC', 'Customer restrooms', 'Display lighting', 'Security systems'] },
              { title: 'Industrial Facilities', items: ['Heavy-duty HVAC', 'Process plumbing', 'High-voltage electrical', 'Equipment service'] }
            ].map((industry) => (
              <Card key={industry.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Commercial Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Commercial HVAC</CardTitle>
                <CardDescription className="text-base">
                  Keep your business comfortable year-round
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rooftop unit installation & repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multi-zone climate control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Preventive maintenance programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Energy efficiency upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Commercial Plumbing</CardTitle>
                <CardDescription className="text-base">
                  Reliable plumbing for your facility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Commercial water heaters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Grease trap service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Backflow prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sewer line maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fixture installation & repair</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Commercial Electrical</CardTitle>
                <CardDescription className="text-base">
                  Safe, code-compliant electrical work
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
                    <span>Commercial lighting design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Generator installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Code compliance inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tenant improvement work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Businesses Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Minimal Downtime</h3>
              <p className="text-muted-foreground">
                We work around your schedule to keep your business running
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fully Licensed</h3>
              <p className="text-muted-foreground">
                All technicians are licensed, bonded, and insured
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Preventive Maintenance</h3>
              <p className="text-muted-foreground">
                Scheduled maintenance programs to prevent costly breakdowns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Guaranteed Work</h3>
              <p className="text-muted-foreground">
                All commercial work backed by our satisfaction guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Commercial Maintenance Programs</h2>
              <p className="text-lg text-muted-foreground">
                Protect your investment with scheduled preventive maintenance
              </p>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Benefits of Our Maintenance Program</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Priority Service</h4>
                        <p className="text-sm text-muted-foreground">Jump to the front of the line for emergency calls</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Extended Equipment Life</h4>
                        <p className="text-sm text-muted-foreground">Regular maintenance extends system lifespan by years</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Energy Savings</h4>
                        <p className="text-sm text-muted-foreground">Well-maintained systems use up to 30% less energy</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Prevent Breakdowns</h4>
                        <p className="text-sm text-muted-foreground">Catch small issues before they become expensive repairs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Discounted Rates</h4>
                        <p className="text-sm text-muted-foreground">Members receive 15% off all repairs and parts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Detailed Reports</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive inspection reports after each visit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Commercial Project?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Get a free consultation and quote for your commercial HVAC, plumbing, or electrical needs
          </p>
          <a href="tel:+18005551234">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-secondary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              Call for Free Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
