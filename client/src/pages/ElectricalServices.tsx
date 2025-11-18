import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, Phone, Wrench, Zap, Lightbulb, Power, Shield } from 'lucide-react';

export default function ElectricalServices() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Electrical Services | Wiring & Panel Upgrades | Carolina Georgia Services"
        description="Licensed electrical services including wiring, panel upgrades, lighting installation, and 24/7 emergency electrical repairs across Richland County, SC."
        keywords="electrical services, electrician, wiring, panel upgrade, lighting installation, emergency electrician, Richland County SC"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Professional Electrical Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Electrical Solutions for Safe, Reliable Power
            </h1>
            <p className="text-xl mb-8 opacity-95">
              From electrical repairs to complete rewiring, our licensed electricians deliver safe, code-compliant electrical work. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 885-7330
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                24/7 Emergency Electrician
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Our Electrical Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete electrical solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Power className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Electrical Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Circuit Breaker Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Outlet & Switch Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Wiring Troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Power Outage Diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Emergency Electrical Repairs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Panel & Wiring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Electrical Panel Upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Circuit Breaker Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Home Rewiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Aluminum Wiring Replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>GFCI & AFCI Installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Lighting Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Interior Lighting Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Outdoor & Landscape Lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>LED Lighting Upgrades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Recessed Lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Security & Motion Lighting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Installations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Ceiling Fan Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Outlet & Switch Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>USB Outlet Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Smart Home Wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Appliance Circuit Installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Power className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Generators & Backup Power</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Generator Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Transfer Switch Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Whole-House Generators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Generator Maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Surge Protection Systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Specialized Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>EV Charger Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Hot Tub & Pool Wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Home Automation Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Electrical Safety Inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Commercial Electrical Work</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Electrical Problems We Solve</h2>
            <p className="text-xl text-muted-foreground">
              Safe, reliable solutions for all your electrical issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">⚡ Frequent Circuit Breaker Trips</h3>
              <p className="text-muted-foreground">
                Overloaded circuits, short circuits, or faulty breakers causing repeated power interruptions and safety concerns.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🔌 Dead Outlets</h3>
              <p className="text-muted-foreground">
                Worn outlets, loose wiring, or tripped GFCI causing outlets to stop working and preventing device charging.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💡 Flickering Lights</h3>
              <p className="text-muted-foreground">
                Loose connections, voltage fluctuations, or overloaded circuits causing lights to flicker or dim unexpectedly.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🔥 Burning Smell</h3>
              <p className="text-muted-foreground">
                Overheating wires, faulty outlets, or electrical arcing creating burning odors and serious fire hazards.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">⚠️ Outdated Electrical Panel</h3>
              <p className="text-muted-foreground">
                Old panels unable to handle modern electrical demands, creating safety risks and limiting home improvements.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💰 High Electric Bills</h3>
              <p className="text-muted-foreground">
                Inefficient lighting, phantom loads, or electrical issues wasting energy and driving up monthly utility costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Electrical Service Process</h2>
            <p className="text-xl text-muted-foreground">
              A safe, systematic approach to every electrical project
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact & Consultation</h3>
                <p className="text-muted-foreground">
                  Call (888) 885-7330 for emergency service or schedule an appointment. We discuss your electrical needs and provide time estimates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Safety Inspection & Diagnosis</h3>
                <p className="text-muted-foreground">
                  Our licensed electrician arrives with professional testing equipment, performs a safety inspection, and diagnoses the electrical issue.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Detailed Estimate & Code Compliance</h3>
                <p className="text-muted-foreground">
                  We provide upfront pricing, explain code requirements, and ensure all work meets local electrical codes and safety standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Professional Installation or Repair</h3>
                <p className="text-muted-foreground">
                  Using quality materials and following best practices, we complete the electrical work safely and efficiently.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Testing & Safety Verification</h3>
                <p className="text-muted-foreground">
                  We test all circuits, verify proper voltage, check ground connections, and ensure everything operates safely.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Documentation & Warranty</h3>
                <p className="text-muted-foreground">
                  We provide documentation for permits/inspections, explain warranty coverage, and offer electrical safety tips.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Carolina Georgia Services for Electrical</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Licensed Electricians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully licensed, bonded, and insured electricians with extensive training and certifications.
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
                  Electrical emergencies are dangerous. We're available 24/7 to restore power safely and quickly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Code Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All work meets or exceeds local electrical codes and passes inspection the first time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Quality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stand behind our electrical work with comprehensive warranties on parts and labor.
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
                <CardTitle>When should I upgrade my electrical panel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upgrade if your panel is over 25 years old, uses fuses instead of breakers, frequently trips, or can't handle modern electrical demands. Most homes need 200-amp service today.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How much does it cost to install an EV charger?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  EV charger installation typically costs $800-$2,000 depending on charger type, distance from panel, and whether a panel upgrade is needed. We provide free estimates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the difference between GFCI and AFCI outlets?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  GFCI outlets protect against ground faults and electrocution (required in wet areas). AFCI outlets detect arc faults and prevent electrical fires (required in bedrooms and living areas).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do I need a permit for electrical work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most electrical work requires permits to ensure safety and code compliance. We handle all permit applications and inspections as part of our service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How can I reduce my electric bill?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upgrade to LED lighting, install programmable thermostats, eliminate phantom loads with smart power strips, and consider whole-home surge protection to extend appliance life.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Electrical Service</h2>
              <p className="text-lg mb-6 opacity-95">
                Electrical emergencies like power outages, sparking outlets, or burning smells require immediate attention. Our emergency electricians respond 24/7 to keep you safe.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Fast emergency response</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Fully equipped service vehicles</span>
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
              <h3 className="text-2xl font-bold mb-4">Electrical Service Areas in Richland County, SC</h3>
              <p className="mb-6 opacity-95">
                We serve all communities across Richland County with licensed electrical service:
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need an Electrician?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for expert electrical service, repair, or installation
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
