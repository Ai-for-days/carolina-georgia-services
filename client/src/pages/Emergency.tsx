import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Phone, Clock, Zap, Wrench, Thermometer, Shield, CheckCircle } from "lucide-react";
import SEO, { generateLocalBusinessSchema } from "@/components/SEO";

export default function Emergency() {
  const schema = {
    ...generateLocalBusinessSchema(),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "availableService": [
      {
        "@type": "Service",
        "name": "24 Hour Emergency HVAC Service",
        "description": "Emergency heating and cooling repairs available 24/7 throughout Richland County"
      },
      {
        "@type": "Service",
        "name": "Emergency Plumbing Service",
        "description": "Burst pipes, water heater failures, and plumbing emergencies handled immediately"
      },
      {
        "@type": "Service",
        "name": "Emergency Electrical Service",
        "description": "Power outages, electrical failures, and safety hazards resolved quickly"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="24/7 Emergency HVAC, Plumbing and Electrical | Richland County SC"
        description="Emergency HVAC, plumbing & electrical service available 24/7 in Columbia, Irmo, Cayce, Forest Acres & all Richland County. Same-day service. Burst pipes, no heat, power outages. Call now!"
        keywords="24 hour emergency HVAC Columbia SC, emergency plumber Richland County, same day AC repair, emergency electrician near me, burst pipe repair, no heat emergency, power outage electrician"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-destructive text-destructive-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-destructive-foreground/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">24/7 Emergency Service</h1>
            <p className="text-xl md:text-2xl mb-8 text-destructive-foreground/90">
              HVAC, Plumbing and Electrical Emergencies Resolved Fast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234">
                <Button size="lg" variant="secondary" className="text-xl px-10 py-6 h-auto">
                  <Phone className="w-6 h-6 mr-3" />
                  Call (888) 885-7330
                </Button>
              </a>
            </div>
            <p className="mt-6 text-lg text-destructive-foreground/80">
              <Clock className="w-5 h-5 inline mr-2" />
              Available 24 Hours a Day, 7 Days a Week
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Emergency Services We Handle</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When disaster strikes, we're ready to respond immediately across all of Richland County
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Emergency HVAC</CardTitle>
                <CardDescription className="text-base">
                  Heating and cooling emergencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>No heat in winter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>AC not cooling in summer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Furnace making strange noises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Gas leak smell</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Complete system failure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Emergency Plumbing</CardTitle>
                <CardDescription className="text-base">
                  Urgent plumbing repairs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Burst pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Frozen pipes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Sewer backup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Water heater leaking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>No hot water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Major leaks and flooding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Emergency Electrical</CardTitle>
                <CardDescription className="text-base">
                  Critical electrical issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Power outages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Circuit breaker tripping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Sparking outlets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Burning smell from electrical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Generator failures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Us for Emergency Service</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Response</h3>
              <p className="text-muted-foreground">
                On-site within 60 minutes for most emergencies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Licensed and Insured</h3>
              <p className="text-muted-foreground">
                Fully certified professionals you can trust
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fully Stocked Trucks</h3>
              <p className="text-muted-foreground">
                Most repairs completed on first visit
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-destructive-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Upfront Pricing</h3>
              <p className="text-muted-foreground">
                No hidden fees, even for after-hours service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Emergency Service Throughout Richland County</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              24/7 emergency response in Columbia, Irmo, Cayce, Forest Acres, Blythewood, and all 38 Richland County locations
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground">We Respond to Emergencies In:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {['Columbia', 'Irmo', 'Cayce', 'Forest Acres', 'Blythewood', 'Dentsville', 'St. Andrews', 'Hopkins', 'Eastover', 'Elgin', 'Arcadia Lakes', 'Fort Jackson'].map((location) => (
                <div key={location} className="flex items-center justify-center gap-2 text-card-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{location}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              ...and 26 more communities across Richland County
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <AlertCircle className="w-20 h-20 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Don't Wait - Call Now!</h2>
            <p className="text-xl md:text-2xl mb-8 text-destructive-foreground/90">
              Emergency situations get worse with time. Our technicians are standing by 24/7.
            </p>
            <a href="tel:+18005551234">
              <Button size="lg" variant="secondary" className="text-2xl px-12 py-8 h-auto">
                <Phone className="w-7 h-7 mr-3" />
                (888) 885-7330
              </Button>
            </a>
            <p className="mt-6 text-lg">
              <Clock className="w-5 h-5 inline mr-2" />
              24/7/365 - We Never Close
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
