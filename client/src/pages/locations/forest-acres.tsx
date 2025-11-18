import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, Phone, MapPin, Navigation, Cloud, Building2, Users, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function ForestAcres() {
  return (
    <div className="min-h-screen">
      <SEO
        title="HVAC, Plumbing & Electrical Services in Forest Acres, SC | Carolina Georgia Services"
        description="Expert HVAC, plumbing, and electrical services in Forest Acres, South Carolina. Serving Trenholm Plaza, Forest Lake, and all Forest Acres neighborhoods with 24/7 emergency service."
        keywords="HVAC Forest Acres SC, plumber Forest Acres, electrician Forest Acres, AC repair Forest Acres, emergency plumber Forest Acres SC, Forest Acres HVAC repair"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8" />
              <span className="text-sm font-semibold uppercase tracking-wide">Forest Acres, South Carolina</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Forest Acres' Premier HVAC, Plumbing & Electrical Experts
            </h1>
            <p className="text-xl mb-8 opacity-95">
              Serving Forest Acres' upscale residential community and thriving business district. From Trenholm Plaza to Forest Lake, we're your trusted local service provider.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Coverage Across Forest Acres</h2>
            <p className="text-xl text-muted-foreground">
              We serve every neighborhood and business in Forest Acres, SC
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
                  Complete coverage of Forest Acres and surrounding areas:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Trenholm Plaza District</li>
                  <li>• Forest Lake</li>
                  <li>• Decker Boulevard Corridor</li>
                  <li>• Beltline Boulevard Area</li>
                  <li>• Forest Drive Commercial</li>
                  <li>• Residential Neighborhoods</li>
                  <li>• Shopping Centers</li>
                  <li>• Medical Offices</li>
                  <li>• Professional Buildings</li>
                  <li>• Adjacent Columbia Areas</li>
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
                  Fast response times across all Forest Acres areas:
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Trenholm Plaza Area</div>
                    <div className="text-muted-foreground">15-22 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">Forest Lake</div>
                    <div className="text-muted-foreground">18-25 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">Decker Boulevard</div>
                    <div className="text-muted-foreground">16-24 minutes</div>
                  </div>
                  <div>
                    <div className="font-semibold">Residential Areas</div>
                    <div className="text-muted-foreground">17-26 minutes</div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Average arrival:</strong> 19 minutes citywide
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Navigation className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategically located for rapid response to Forest Acres:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Minutes from I-77 and Forest Drive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Close to Trenholm Plaza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>GPS-tracked fleet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Real-time ETA updates</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Find Us in Forest Acres</h2>
            <p className="text-xl text-muted-foreground">
              Easy access from major Forest Acres landmarks and highways
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>From Trenholm Plaza</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Exit Trenholm Plaza onto Forest Drive</p>
                <p>2. Head east or west depending on your location</p>
                <p>3. We serve the entire Forest Acres area</p>
                <p>4. Call (888) 885-7330 for specific directions</p>
                <p className="font-semibold mt-4">Drive time: 5-8 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Forest Lake</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Take Forest Lake Drive to Trenholm Road</p>
                <p>2. Turn onto Forest Drive</p>
                <p>3. We'll come to you anywhere in Forest Acres!</p>
                <p>4. Available 24/7 for emergencies</p>
                <p className="font-semibold mt-4">Drive time: 6-10 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From I-77 (Exit 12 - Forest Drive)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Take Exit 12 onto Forest Drive</p>
                <p>2. Head east into Forest Acres</p>
                <p>3. Pass Trenholm Plaza on your right</p>
                <p>4. We serve all of Forest Acres - call for directions</p>
                <p className="font-semibold mt-4">Drive time: 8-12 minutes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>From Downtown Columbia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>1. Take Blossom Street east</p>
                <p>2. Continue onto Forest Drive</p>
                <p>3. Enter Forest Acres city limits</p>
                <p>4. Emergency service available 24/7</p>
                <p className="font-semibold mt-4">Drive time: 10-15 minutes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather Challenges */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Forest Acres Weather & Your Home Systems</h2>
            <p className="text-xl text-muted-foreground">
              How Forest Acres' climate affects your HVAC, plumbing, and electrical systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Extreme Summer Heat & Humidity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Forest Acres experiences brutal summers with temperatures regularly exceeding 95°F and high humidity. Mature tree canopy provides some relief but homes still struggle.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• AC units running constantly</li>
                    <li>• System failures during heat waves</li>
                    <li>• High energy bills</li>
                    <li>• Aging HVAC systems (many homes 1960s-1980s)</li>
                    <li>• Inadequate insulation in older homes</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> AC replacement for aging systems, energy-efficient upgrades, preventive maintenance, same-day emergency service
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Severe Storms & Power Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Forest Acres' mature trees are beautiful but vulnerable to severe thunderstorms, causing power outages and property damage.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Fallen trees damaging power lines</li>
                    <li>• Frequent power outages</li>
                    <li>• Lightning strikes</li>
                    <li>• Power surges damaging HVAC/appliances</li>
                    <li>• Sump pump failures during storms</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Whole-home surge protection, backup generator installation, emergency electrical repairs, sump pump service
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Aging Home Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Many Forest Acres homes were built 1950s-1980s with original plumbing, electrical, and HVAC systems now reaching end-of-life.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Issues:</div>
                  <ul className="space-y-1 ml-4">
                    <li>• Galvanized pipe corrosion</li>
                    <li>• Outdated electrical panels</li>
                    <li>• 20-30 year old HVAC systems</li>
                    <li>• Insufficient electrical capacity</li>
                    <li>• Water heater failures</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded">
                    <strong>Our Solution:</strong> Pipe replacement, electrical panel upgrades, HVAC system replacement, water heater installation, home rewiring
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Forest Acres' Major Employers</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by Forest Acres' leading businesses and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Retail & Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Trenholm Plaza</li>
                  <li>• Forest Acres Shopping Center</li>
                  <li>• Decker Boulevard Retail</li>
                  <li>• Restaurants</li>
                  <li>• Grocery stores</li>
                  <li>• Specialty shops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Medical & Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Medical offices</li>
                  <li>• Dental practices</li>
                  <li>• Physical therapy clinics</li>
                  <li>• Urgent care centers</li>
                  <li>• Veterinary clinics</li>
                  <li>• Pharmacies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Professional Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Law offices</li>
                  <li>• Accounting firms</li>
                  <li>• Real estate agencies</li>
                  <li>• Insurance offices</li>
                  <li>• Financial advisors</li>
                  <li>• Consulting firms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Hospitality & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Hotels</li>
                  <li>• Restaurants & cafes</li>
                  <li>• Salons & spas</li>
                  <li>• Fitness centers</li>
                  <li>• Banks</li>
                  <li>• Service businesses</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Need commercial HVAC, plumbing, or electrical service for your Forest Acres business?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Forest Acres Neighborhoods We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Expert service in every Forest Acres neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Trenholm Plaza District</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Heart of Forest Acres commercial district. Mix of retail, restaurants, professional offices, and nearby upscale homes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Commercial HVAC maintenance</li>
                    <li>• Restaurant plumbing & grease traps</li>
                    <li>• Retail electrical service</li>
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
                <CardTitle>Forest Lake</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Prestigious lakefront community with beautiful homes (1950s-1970s) surrounding the scenic lake. High property values.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• HVAC system replacement (aging units)</li>
                    <li>• Sump pump installation</li>
                    <li>• Electrical panel upgrades</li>
                    <li>• Water heater replacement</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 18-25 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Decker Boulevard Corridor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Major commercial corridor with shopping centers, medical offices, and restaurants. High traffic area.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Commercial HVAC service</li>
                    <li>• Multi-tenant plumbing</li>
                    <li>• Electrical for signage & lighting</li>
                    <li>• Emergency commercial repairs</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 16-24 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beltline Boulevard Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Established residential neighborhood with mid-century homes (1960s-1980s). Tree-lined streets and family-friendly.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• AC replacement (aging systems)</li>
                    <li>• Pipe replacement (galvanized)</li>
                    <li>• Electrical rewiring</li>
                    <li>• Smart thermostat installation</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 17-26 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forest Drive Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mix of single-family homes and townhomes along Forest Drive. Convenient location near shopping and dining.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• HVAC maintenance</li>
                    <li>• Drain cleaning</li>
                    <li>• Ceiling fan installation</li>
                    <li>• Water heater service</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 16-24 minutes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>North Forest Acres</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Quiet residential area with well-maintained homes. Close to schools and parks. Strong community feel.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="font-semibold">Common Service Needs:</div>
                  <ul className="space-y-1">
                    <li>• Preventive HVAC maintenance</li>
                    <li>• Tankless water heaters</li>
                    <li>• Generator installation</li>
                    <li>• Electrical panel upgrades</li>
                  </ul>
                  <div className="mt-3 text-primary font-semibold">
                    Response time: 18-26 minutes
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Forest Acres Residents Choose Us</h2>
            <p className="text-xl text-muted-foreground">
              See how we compare to other Forest Acres service providers
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Carolina Georgia Services</th>
                    <th className="p-4 text-center">Other Forest Acres Companies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">All 3 Services (HVAC, Plumbing, Electrical)</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Usually only 1 service</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">24/7 True Emergency Service</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited hours</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Average Response Time</td>
                    <td className="p-4 text-center font-semibold text-primary">19 minutes</td>
                    <td className="p-4 text-center text-muted-foreground">45-90 minutes</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">Experience with Older Homes</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Limited expertise</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Upfront, Transparent Pricing</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Often hidden fees</td>
                  </tr>
                  <tr className="border-b bg-muted/20">
                    <td className="p-4 font-semibold">Comprehensive Warranty</td>
                    <td className="p-4 text-center font-semibold text-primary">Parts & Labor</td>
                    <td className="p-4 text-center text-muted-foreground">Limited or parts only</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Commercial & Residential</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Usually residential only</td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="p-4 font-semibold">Same-Day Service Available</td>
                    <td className="p-4 text-center"><CheckCircle2 className="h-6 w-6 text-green-600 mx-auto" /></td>
                    <td className="p-4 text-center text-muted-foreground">Often 2-3 day wait</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <h3 className="font-bold text-lg mb-2">The Carolina Georgia Services Advantage in Forest Acres:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>One call does it all:</strong> HVAC, plumbing, and electrical - perfect for Forest Acres' aging homes that need multiple systems updated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Fastest response in Forest Acres:</strong> Average 19-minute arrival time vs. 45-90 minutes for competitors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Mid-century home expertise:</strong> We understand the unique challenges of Forest Acres' 1950s-1980s homes - from galvanized pipes to outdated electrical panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Commercial & residential:</strong> We serve both Forest Acres homeowners and Trenholm Plaza businesses with equal expertise</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in Forest Acres</h2>
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
                  <li>• System Replacement (aging units)</li>
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
                  <li>• Pipe Replacement (galvanized)</li>
                  <li>• Drain Cleaning</li>
                  <li>• Water Heater Service</li>
                  <li>• Sump Pump Installation</li>
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
                  <li>• Panel Upgrades</li>
                  <li>• Home Rewiring</li>
                  <li>• Generator Installation</li>
                  <li>• Surge Protection</li>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Serve Your Forest Acres Home or Business</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Call now for fast, reliable HVAC, plumbing, or electrical service anywhere in Forest Acres, SC
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
            Serving Forest Acres, SC and all surrounding Richland County communities
          </p>
        </div>
      </section>
    </div>
  );
}
