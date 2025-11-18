import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, Phone, MapPin, Navigation, Cloud, Building2, Users, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function Cayce() {
  return (
    <div className="min-h-screen">
      <SEO
        title="HVAC, Plumbing & Electrical Services in Cayce, SC | Carolina Georgia Services"
        description="Expert HVAC, plumbing, and electrical services in Cayce, South Carolina. Serving all neighborhoods with 24/7 emergency service. Licensed, insured, and locally trusted."
        keywords="HVAC Cayce SC, plumber Cayce, electrician Cayce, AC repair Cayce, emergency plumber Cayce SC"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Cayce, South Carolina</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional HVAC, Plumbing & Electrical Services in Cayce, SC
            </h1>
            <p className="text-xl mb-8 opacity-95">
              Serving Cayce residents and businesses with reliable, expert service for over a decade. From the Riverwalk to Guignard Park, we're your local service experts.
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

      {/* Service Area Details */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Coverage Across Cayce</h2>
            <p className="text-xl text-muted-foreground">
              We serve every neighborhood and business district in Cayce, SC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Service Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete coverage of Cayce city limits and surrounding areas:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Downtown Cayce</li>
                  <li>• Cayce Riverwalk District</li>
                  <li>• Guignard Park Area</li>
                  <li>• Knox Abbott Drive Corridor</li>
                  <li>• Airport Boulevard Area</li>
                  <li>• State Street District</li>
                  <li>• Congaree River Waterfront</li>
                  <li>• Industrial Parks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Response Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fast response times across all Cayce neighborhoods:
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Emergency Service</div>
                    <div className="text-muted-foreground">15-30 minutes citywide</div>
                  </div>
                  <div>
                    <div className="font-semibold">Same-Day Service</div>
                    <div className="text-muted-foreground">Within 2-4 hours</div>
                  </div>
                  <div>
                    <div className="font-semibold">Scheduled Appointments</div>
                    <div className="text-muted-foreground">Next available slot</div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Average arrival:</strong> 22 minutes for emergencies
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Navigation className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy to Find</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conveniently located to serve all of Cayce quickly:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Minutes from I-77 & I-26</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Central Cayce location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>GPS-tracked service vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Real-time arrival updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Find Us in Cayce</h2>
            <p className="text-xl text-muted-foreground">
              Easy access from major Cayce landmarks and thoroughfares
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>From Cayce Riverwalk</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Head east on State Street toward Knox Abbott Drive</p>
                <p>2. Turn right onto Knox Abbott Drive</p>
                <p>3. Continue for 1.2 miles</p>
                <p>4. We serve the entire Cayce area - call for exact directions</p>
                <p className="font-semibold mt-4">Drive time: 5-7 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Guignard Park</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Exit park onto Frink Street</p>
                <p>2. Turn left onto 12th Street</p>
                <p>3. Continue to Knox Abbott Drive</p>
                <p>4. Turn right - we're nearby</p>
                <p className="font-semibold mt-4">Drive time: 4-6 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From I-77 / I-26 Interchange</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Take I-77 South to Exit 5 (Knox Abbott Drive)</p>
                <p>2. Turn right onto Knox Abbott Drive</p>
                <p>3. Continue through Cayce</p>
                <p>4. Call (888) 885-7330 for specific directions to your location</p>
                <p className="font-semibold mt-4">Drive time: 8-10 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Cayce City Hall</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Head south on Knox Abbott Drive</p>
                <p>2. Continue past Guignard Park</p>
                <p>3. We serve all of Cayce - we'll come to you!</p>
                <p>4. Available 24/7 for emergencies</p>
                <p className="font-semibold mt-4">Drive time: 3-5 minutes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather Challenges */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cayce Weather & Your Home Systems</h2>
            <p className="text-xl text-muted-foreground">
              How Cayce's climate affects your HVAC, plumbing, and electrical systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Hot, Humid Summers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cayce summers average 90°F+ with high humidity near the Congaree River.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• AC overworking & breakdowns</li>
                    <li>• High humidity causing mold</li>
                    <li>• Increased energy bills</li>
                    <li>• Frozen evaporator coils</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Preventive AC maintenance, dehumidifier installation, energy-efficient upgrades
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Severe Thunderstorms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cayce experiences frequent severe storms, especially spring and summer.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Power surges damaging HVAC</li>
                    <li>• Lightning strikes</li>
                    <li>• Flooding from heavy rain</li>
                    <li>• Sump pump failures</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Whole-home surge protection, generator installation, sump pump service
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Mild Winters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Winters are mild but occasional freezes can cause problems.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Frozen pipes during cold snaps</li>
                    <li>• Heat pump failures</li>
                    <li>• Water heater strain</li>
                    <li>• Outdoor faucet freezing</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Pipe insulation, heat pump maintenance, emergency burst pipe repair
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Major Employers */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Cayce's Major Employers</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses and organizations throughout Cayce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Government & Public</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• City of Cayce</li>
                  <li>• Cayce Public Safety</li>
                  <li>• Lexington County offices</li>
                  <li>• Public schools</li>
                  <li>• Municipal facilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Medical offices</li>
                  <li>• Dental practices</li>
                  <li>• Urgent care centers</li>
                  <li>• Physical therapy clinics</li>
                  <li>• Veterinary hospitals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Retail & Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Restaurants & cafes</li>
                  <li>• Shopping centers</li>
                  <li>• Hotels & motels</li>
                  <li>• Auto dealerships</li>
                  <li>• Gas stations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Manufacturing plants</li>
                  <li>• Warehouses</li>
                  <li>• Distribution centers</li>
                  <li>• Industrial parks</li>
                  <li>• Commercial properties</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Need commercial HVAC, plumbing, or electrical service for your Cayce business?
            </p>
            <Link href="/commercial">
              <Button size="lg">
                View Commercial Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhood Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cayce Neighborhoods We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Expert service in every corner of Cayce, SC
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Downtown Cayce & Riverwalk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Historic downtown area along the Congaree River with mixed residential and commercial properties.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Older home plumbing updates</li>
                    <li>• Historic building HVAC</li>
                    <li>• Electrical panel upgrades</li>
                    <li>• Commercial restaurant equipment</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 15-20 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Guignard Park Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Residential neighborhoods surrounding Guignard Park with family homes built 1970s-2000s.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• AC replacement (aging units)</li>
                    <li>• Water heater installation</li>
                    <li>• Drain cleaning</li>
                    <li>• Ceiling fan installation</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 18-25 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Knox Abbott Drive Corridor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Major commercial corridor with businesses, restaurants, and retail establishments.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Commercial HVAC maintenance</li>
                    <li>• Restaurant plumbing</li>
                    <li>• Parking lot lighting</li>
                    <li>• Emergency repairs</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 15-22 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Airport Boulevard Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mix of residential and light industrial near Columbia Metropolitan Airport.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Industrial electrical work</li>
                    <li>• Commercial plumbing</li>
                    <li>• Warehouse HVAC</li>
                    <li>• Generator installation</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 20-28 minutes
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Cayce Residents Choose Us</h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to other Cayce service providers
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Carolina Georgia Services</th>
                    <th className="p-4 text-center">Other Local Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">All 3 Services (HVAC, Plumbing, Electrical)</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Usually only 1 service</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">24/7 Emergency Service</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited hours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Average Response Time</td>
                    <td className="p-4 text-center font-semibold text-primary">15-30 minutes</td>
                    <td className="p-4 text-center text-muted-foreground">45-90 minutes</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">Upfront Pricing</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Often surprise charges</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Licensed & Insured</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">Warranty on Work</td>
                    <td className="p-4 text-center font-semibold text-primary">Yes - Parts & Labor</td>
                    <td className="p-4 text-center text-muted-foreground">Limited or none</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Serves All Cayce Neighborhoods</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited coverage</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-semibold">Online Scheduling</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Phone only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <h3 className="font-bold text-lg mb-2">The Carolina Georgia Services Advantage in Cayce:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>One call does it all:</strong> HVAC, plumbing, and electrical under one roof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Faster response:</strong> Average 22-minute arrival for Cayce emergencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Local expertise:</strong> We understand Cayce's unique climate and building challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Transparent pricing:</strong> No hidden fees or surprise charges - ever</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in Cayce</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>HVAC Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• AC Installation & Repair</li>
                  <li>• Heating System Service</li>
                  <li>• Duct Cleaning & Sealing</li>
                  <li>• Preventive Maintenance</li>
                  <li>• Emergency 24/7 Service</li>
                </ul>
                <Link href="/services/hvac">
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Plumbing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Leak Detection & Repair</li>
                  <li>• Drain Cleaning</li>
                  <li>• Water Heater Service</li>
                  <li>• Pipe Repair & Replacement</li>
                  <li>• Emergency Plumber</li>
                </ul>
                <Link href="/services/plumbing">
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Electrical Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Electrical Repairs</li>
                  <li>• Panel Upgrades</li>
                  <li>• Lighting Installation</li>
                  <li>• Generator Installation</li>
                  <li>• Emergency Electrician</li>
                </ul>
                <Link href="/services/electrical">
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Serve Your Cayce Home or Business</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Call now for fast, reliable HVAC, plumbing, or electrical service anywhere in Cayce, SC
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call (888) 885-7330
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              24/7 Emergency Service
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Serving Cayce, SC and all surrounding Richland County communities
          </p>
        </div>
      </section>
    </div>
  );
}
