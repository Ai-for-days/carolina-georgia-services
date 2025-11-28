import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, Phone, Wrench, Droplet, Pipette, Zap, Shield } from 'lucide-react';

export default function PlumbingServices() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Plumbing Services | Leak Repair & Drain Cleaning | Carolina Georgia Services"
        description="Expert plumbing services including leak detection, drain cleaning, water heater installation, and 24/7 emergency plumbing repairs across Richland County, SC."
        keywords="plumbing services, leak repair, drain cleaning, water heater, pipe repair, emergency plumber, Richland County SC"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Professional Plumbing Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Plumbing Solutions for Your Home or Business
            </h1>
            <p className="text-xl mb-8 opacity-95">
              From minor leaks to major installations, our licensed plumbers deliver reliable, quality service you can trust. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 885-7330
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                24/7 Emergency Plumber
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Our Plumbing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Droplet className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Leak Detection and Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Advanced Leak Detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Pipe Leak Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Faucet & Fixture Leaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Slab Leak Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Water Line Repair</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Pipette className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Drain & Sewer Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Drain Cleaning & Unclogging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sewer Line Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Video Camera Inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Hydro Jetting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sewer Line Replacement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Water Heaters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Water Heater Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Water Heater Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Tankless Water Heaters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Water Heater Maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Emergency Water Heater Service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Fixtures & Installations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Faucet Installation & Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Toilet Installation & Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sink & Disposal Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Shower & Tub Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Bathroom Remodeling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Pipette className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Pipe Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Pipe Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Pipe Repair & Replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Repiping Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Frozen Pipe Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Burst Pipe Emergency Service</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Droplet className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Specialized Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Sump Pump Installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Backflow Prevention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Gas Line Installation & Repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Water Filtration Systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Commercial Plumbing</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Plumbing Problems We Solve</h2>
            <p className="text-xl text-muted-foreground">
              Fast, reliable solutions for all your plumbing issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💧 Dripping Faucets</h3>
              <p className="text-muted-foreground">
                Worn washers, O-rings, or valve seats causing constant dripping that wastes water and increases bills.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🚽 Running Toilets</h3>
              <p className="text-muted-foreground">
                Faulty flapper valves, fill valves, or flush valves causing toilets to run continuously and waste hundreds of gallons.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🚿 Low Water Pressure</h3>
              <p className="text-muted-foreground">
                Clogged aerators, pipe corrosion, or water line issues reducing water pressure throughout your property.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🔧 Clogged Drains</h3>
              <p className="text-muted-foreground">
                Hair, grease, soap buildup, or foreign objects blocking sinks, showers, or tub drains causing slow drainage.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">💥 Burst Pipes</h3>
              <p className="text-muted-foreground">
                Frozen pipes, corrosion, or high water pressure causing pipe bursts and potential water damage to your property.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-3">🔥 No Hot Water</h3>
              <p className="text-muted-foreground">
                Water heater pilot light out, heating element failure, or thermostat issues preventing hot water production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Plumbing Service Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven approach to deliver quality plumbing solutions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Emergency or Scheduled Service</h3>
                <p className="text-muted-foreground">
                  Call (888) 885-7330 for immediate emergency service or schedule a convenient appointment. We provide arrival time estimates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Professional Assessment</h3>
                <p className="text-muted-foreground">
                  Our licensed plumber arrives fully equipped, assesses the situation, and uses advanced tools like camera inspections when needed.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Clear Explanation & Pricing</h3>
                <p className="text-muted-foreground">
                  We explain the problem in plain language, provide upfront pricing with no hidden fees, and answer all your questions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Repair or Installation</h3>
                <p className="text-muted-foreground">
                  Using quality parts and proven techniques, we complete the work efficiently while protecting your property from damage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                5
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Testing & Verification</h3>
                <p className="text-muted-foreground">
                  We test all repairs to ensure proper function, check for leaks, and verify water pressure and drainage are working correctly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                6
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Cleanup & Maintenance Advice</h3>
                <p className="text-muted-foreground">
                  We clean up the work area, provide maintenance tips to prevent future issues, and offer warranty information on our work.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Carolina Georgia Services for Plumbing</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Licensed Plumbers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully licensed, bonded, and insured plumbers with years of experience and ongoing training.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plumbing emergencies happen anytime. We're available 24/7 to stop leaks and prevent damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Upfront Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No surprises—we provide clear, upfront pricing before starting any work. You approve first.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Warranty Backed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We stand behind our work with warranties on parts and labor for your complete peace of mind.
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
                <CardTitle>How quickly can you respond to a plumbing emergency?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We typically arrive within 1-2 hours for emergency calls in Richland County. Our plumbers are on call 24/7 with fully stocked trucks ready to handle most repairs immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer drain cleaning services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive drain cleaning using professional equipment including hydro jetting and video camera inspection to clear clogs and identify underlying issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What should I do if I have a burst pipe?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immediately shut off your main water valve, turn off electricity near the leak, and call us at (888) 885-7330. Move valuables away from the water and don't attempt repairs yourself.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does a water heater last?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Traditional tank water heaters last 8-12 years, while tankless water heaters can last 15-20 years with proper maintenance. We recommend annual inspections to maximize lifespan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you provide warranties on your plumbing work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer warranties on both parts and labor. Warranty terms vary by service type—ask your plumber for specific details on your repair or installation.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Plumbing Service</h2>
              <p className="text-lg mb-6 opacity-95">
                Burst pipes, major leaks, and sewer backups require immediate attention. Our emergency plumbers are ready to respond 24/7 to minimize damage and restore your plumbing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Rapid response times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Fully equipped service trucks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Transparent emergency pricing</span>
                </li>
              </ul>
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call (888) 885-7330 Now
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Plumbing Service Areas in Richland County, SC</h3>
              <p className="mb-6 opacity-95">
                We serve all communities across Richland County with fast, professional plumbing service:
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Plumber?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for expert plumbing service, repair, or installation
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
