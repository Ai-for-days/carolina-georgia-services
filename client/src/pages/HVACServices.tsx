import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, Phone, Wrench, ThermometerSnowflake, Wind, Flame, Shield } from 'lucide-react';

export default function HVACServices() {
  return (
    <div className="min-h-screen">
      <SEO
        title="HVAC Services | Heating & Air Conditioning | Carolina Georgia Services"
        description="Professional HVAC services including AC installation, furnace repair, heat pump service, and 24/7 emergency HVAC repairs across Richland County, SC."
        keywords="HVAC services, AC repair, furnace installation, heat pump, air conditioning, heating, Richland County SC"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wind className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Professional HVAC Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Heating & Air Conditioning Services
            </h1>
            <p className="text-xl mb-8 opacity-95">
              Keep your home or business comfortable year-round with our comprehensive HVAC solutions. From installation to emergency repairs, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 885-7330
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                24/7 Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Our HVAC Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive heating and cooling solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <ThermometerSnowflake className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Air Conditioning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>AC Installation & Replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>AC Repair & Troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Preventive Maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Duct Cleaning & Sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Refrigerant Recharge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Flame className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Heating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Furnace Installation & Replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Furnace Repair & Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Heat Pump Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Boiler Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Thermostat Installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wind className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Indoor Air Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Air Purification Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Humidifiers & Dehumidifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ventilation Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Filter Replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ductless Mini-Split Systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common HVAC Problems We Solve</h2>
            <p className="text-xl text-muted-foreground">
              Expert solutions for all your heating and cooling issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">❄️ AC Not Cooling</h3>
              <p className="text-muted-foreground">
                Low refrigerant, dirty filters, compressor issues, or thermostat problems preventing proper cooling.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🔥 Furnace Not Heating</h3>
              <p className="text-muted-foreground">
                Pilot light out, faulty ignition, clogged filters, or blower motor failure causing no heat.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💨 Poor Airflow</h3>
              <p className="text-muted-foreground">
                Blocked vents, dirty ducts, or blower fan problems reducing air circulation throughout your space.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">📢 Strange Noises</h3>
              <p className="text-muted-foreground">
                Banging, rattling, or squealing sounds indicating loose parts, motor issues, or ductwork problems.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💧 Water Leaks</h3>
              <p className="text-muted-foreground">
                Condensate drain clogs, frozen coils, or refrigerant leaks causing water damage around your unit.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💰 High Energy Bills</h3>
              <p className="text-muted-foreground">
                Inefficient systems, poor insulation, or aging equipment driving up your monthly utility costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our HVAC Service Process</h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to ensure quality results every time
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Initial Contact & Scheduling</h3>
                <p className="text-muted-foreground">
                  Call us at (888) 885-7330 or request service online. We'll schedule a convenient appointment time and provide an estimated arrival window.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Thorough Inspection & Diagnosis</h3>
                <p className="text-muted-foreground">
                  Our certified technician arrives on time, inspects your HVAC system, identifies the problem, and explains the issue in clear terms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Transparent Pricing & Approval</h3>
                <p className="text-muted-foreground">
                  We provide upfront pricing with no hidden fees. You approve the work before we begin—no surprises on your bill.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Repair or Installation</h3>
                <p className="text-muted-foreground">
                  Using quality parts and proven techniques, we complete the work efficiently while maintaining your property's cleanliness.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Testing & Quality Assurance</h3>
                <p className="text-muted-foreground">
                  We test your system to ensure it's running efficiently and safely, checking airflow, temperature, and all safety controls.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Maintenance Tips & Follow-Up</h3>
                <p className="text-muted-foreground">
                  We provide maintenance recommendations to extend your system's life and schedule follow-up visits if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Carolina Georgia Services for HVAC</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Licensed & Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully certified HVAC technicians with comprehensive insurance coverage for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>24/7 Emergency Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  HVAC emergencies don't wait. We're available around the clock to restore your comfort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Expert Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ongoing training ensures our team stays current with the latest HVAC technology and techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Satisfaction Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stand behind our work with warranties on parts and labor. Your satisfaction is our priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How often should I service my HVAC system?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We recommend servicing your HVAC system twice a year—once before summer for AC and once before winter for heating. Regular maintenance prevents breakdowns, improves efficiency, and extends equipment life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does an HVAC system typically last?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With proper maintenance, air conditioners last 15-20 years and furnaces last 15-30 years. Heat pumps typically last 10-15 years. Regular service significantly extends these lifespans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What size HVAC system do I need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  System size depends on your home's square footage, insulation, windows, and climate. Our technicians perform load calculations to determine the right size—an oversized or undersized system wastes energy and money.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer financing options?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer flexible financing options for HVAC installations and major repairs. Contact us at (888) 885-7330 to discuss payment plans that fit your budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's included in a maintenance visit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our maintenance includes filter replacement, coil cleaning, refrigerant check, electrical connection inspection, thermostat calibration, safety control testing, and a full system performance evaluation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency & Service Area */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency HVAC Service</h2>
              <p className="text-lg mb-6 opacity-95">
                HVAC emergencies can happen anytime—no heat in winter, no AC in summer, or system failures. We're available 24/7 to restore your comfort quickly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Fast response times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Fully stocked service vehicles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Upfront emergency pricing</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 885-7330 Now
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Service Areas in Richland County, SC</h3>
              <p className="mb-6 opacity-95">
                We proudly serve all communities across Richland County with fast, reliable HVAC service:
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>Columbia</div>
                <div>Irmo</div>
                <div>Cayce</div>
                <div>Forest Acres</div>
                <div>Blythewood</div>
                <div>Dentsville</div>
                <div>St. Andrews</div>
                <div>Hopkins</div>
                <div>Eastover</div>
                <div>Elgin</div>
                <div>Lake Murray</div>
                <div>Fort Jackson</div>
              </div>
              <p className="mt-4 text-sm opacity-90">
                + 26 more communities across Richland County
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for expert HVAC service, repair, or installation
          </p>
          <Button size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Call (888) 885-7330
          </Button>
        </div>
      </section>
    </div>
  );
}
